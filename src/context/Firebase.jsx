import { createContext ,useContext ,useState ,useEffect} from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, 
    createUserWithEmailAndPassword , 
    sendEmailVerification ,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword} 
    from 'firebase/auth';
import { Space, Spin } from 'antd';
import  {Firestore, getFirestore , collection , addDoc ,getDocs} from'firebase/firestore';
import { getStorage , ref , uploadBytes} from "firebase/storage";

export const FirebaseContext = createContext(null);



export const useFirebase = () => useContext(FirebaseContext);


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};



export  const {firebaseApp} = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
      setIsLoading(false); // Set isLoading to false once the user state is determined.
    });

    return () => {
      // Cleanup the listener when the component unmounts.
      unsubscribe();
    };
  }, []);

  const SignupUserWithEmailAndPass = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const signInUserWithEmailAndPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const isLoggedIn = !!user; // Use double negation to convert to a boolean.
  const isEmailVerified = user?.emailVerified;

  const SignOut = () => {
    return signOut(firebaseAuth);
  };

  // const g




  const handleNewLostAndFoundListing = async (formData) => {
    const productName = formData['Product-Name'];
    const phoneNumber = formData['Contact'];
    const description = formData['description'];
    const photoList = formData['photoList'];
    const uploadedPhoto = photoList[0]; 
    console.log(productName,phoneNumber,description,uploadedPhoto);

    const imageRef = ref(storage , `uploads/lostandfound/images/${Date.now()}-${uploadedPhoto.name}`);
    const uploadReuslt = await uploadBytes(imageRef ,uploadedPhoto);
    return await addDoc(collection(firestore , 'lostandfound'),{
      productName,
      phoneNumber,
      description,
      imageURL: uploadReuslt.ref.fullPath,
      userID: user.uid,
      userEmail: user.email
    });
  }



// buffering  ring status
  if (isLoading) {
    return <div style={{display:"flex" ,justifyContent:"center" ,alignItems:"center" ,innerWidth:"100vw",height:"100vh"}}> 
            
      <Spin size="large" />
    </div>
  }

  return (
    <FirebaseContext.Provider
      value={{
        SignupUserWithEmailAndPass,
        signInUserWithEmailAndPass,
        SignOut,
        handleNewLostAndFoundListing,
        isLoggedIn,
        isEmailVerified,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
