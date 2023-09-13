import { createContext ,useContext ,useState ,useEffect} from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, 
    createUserWithEmailAndPassword , 
    sendEmailVerification ,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword} 
    from 'firebase/auth';
import { Space, Spin, message ,Progress } from 'antd';
import  {Firestore, getFirestore , collection , addDoc ,getDocs ,doc ,deleteDoc} from'firebase/firestore';
import { getStorage , ref , uploadBytes ,getDownloadURL} from "firebase/storage";

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
  const userUID = user?.uid;
  const currentUserEmail = user?.email;

  const SignOut = () => {
    return signOut(firebaseAuth);
  };

  const listAllLostAndFoundItems = () => {
    return getDocs(collection(firestore, 'lostandfound'));
  }
  const listAllMarketplaceItems = () => {
    return getDocs(collection(firestore, 'marketplace'));
  }



  const handleNewLostAndFoundListing = async (formData) => {
    try {
      const productName = formData['Product-Name'];
      const phoneNumber = formData['Contact'];
      const description = formData['description'];
      const photoList = formData['photoList'];
      const uploadedPhoto = photoList[0];
      const category = formData['category'];
  
      if (!uploadedPhoto) {
        throw new Error("No photo provided.");
      }
  
      console.log(productName, phoneNumber, description, uploadedPhoto);
  
      const imageRef = ref(storage, `uploads/lostandfound/images/${Date.now()}-${uploadedPhoto.name}`);
  
      // Create a promise to handle the upload
      const uploadPromise = new Promise(async (resolve, reject) => {
        try {
          // Upload the photo
          const uploadResult = await uploadBytes(imageRef, uploadedPhoto);
          resolve(uploadResult);
        } catch (error) {
          reject(error);
        }
      });
  
      // Set a timeout for the upload (e.g., 30 seconds)
      const uploadTimeout = 30000; // 30 seconds
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(null); // Resolve with null to indicate a timeout
        }, uploadTimeout);
      });
  
      // Wait for either the upload to complete or the timeout to occur
      const result = await Promise.race([uploadPromise, timeoutPromise]);
  
      if (result === null) {
        // Handle the case where the upload timed out
        throw new Error("File upload timed out. Please check your internet connection.");
      }
  
      const docData = {
        productName,
        phoneNumber,
        description,
        imageURL: result.ref.fullPath,
        userID: user.uid,
        userEmail: user.email,
        category
      };
  
      await addDoc(collection(firestore, 'lostandfound'), docData);
  
      return true; // Indicates success
    } catch (error) {
      message.error(error.message);
      console.error("Error uploading and adding document:", error);
      return false; // Indicates failure
    }
  }
  
  
  
  const handleMarketPlaceListing = async (formData) => {
    try {
      const productName = formData['Product-Name'];
      const phoneNumber = formData['Contact'];
      const description = formData['description'];
      const Amount = formData['Amount'];
      const photoList = formData['photoList'];
      const uploadedPhoto = photoList[0];
  
      if (!uploadedPhoto) {
        throw new Error("No photo provided.");
      }
  
      console.log("this is the out", productName, phoneNumber, description, Amount, uploadedPhoto);
  
      const imageRef = ref(storage, `uploads/marketplace/images/${Date.now()}-${uploadedPhoto.name}`);
  
      // Create a promise to handle the upload
      const uploadPromise = new Promise(async (resolve, reject) => {
        try {
          // Upload the photo
          const uploadResult = await uploadBytes(imageRef, uploadedPhoto);
          resolve(uploadResult);
        } catch (error) {
          reject(error);
        }
      });
  
      // Set a timeout for the upload (e.g., 30 seconds)
      const uploadTimeout = 30000; // 30 seconds
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(null); // Resolve with null to indicate a timeout
        }, uploadTimeout);
      });
  
      // Wait for either the upload to complete or the timeout to occur
      const result = await Promise.race([uploadPromise, timeoutPromise]);
  
      if (result === null) {
        // Handle the case where the upload timed out
        throw new Error("File upload timed out. Please check your internet connection.");
      }
  
      const docData = {
        productName,
        phoneNumber,
        description,
        Amount,
        imageURL: result.ref.fullPath,
        userID: user.uid,
        userEmail: user.email
      };
  
      await addDoc(collection(firestore, 'marketplace'), docData);
  
      console.log("done addDoc part");
  
      return true; // Indicates success
    } catch (error) {
      message.error(error.message);
      console.error("Error uploading and adding document:", error);
      return false; // Indicates failure
    }
  }
  




  const getImageURL = async (path) => {
    try {
      if (path) {
        const downloadURL = await getDownloadURL(ref(storage, path));
        return downloadURL;
      } else {
        console.error("Invalid path provided for getImageURL.");
        return null;
      }
    } catch (error) {
      console.error("Error getting download URL:", error);
      return null;
    }
  }

  const deleteItem = async (itemId) => {
    try {
      // Simulate a delay of 5 seconds (you can adjust this value)
      await new Promise((resolve) => setTimeout(resolve, 5000));
  
      // Construct the reference to the Firestore document
      const itemRef = doc(firestore, 'lostandfound', itemId);
  
      // Delete the document
      await deleteDoc(itemRef);
  
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
      throw new Error("Unable to delete item due to a network issue. Please check your internet connection.");
    }
  };



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
        listAllLostAndFoundItems,
        getImageURL,
        handleMarketPlaceListing,
        listAllMarketplaceItems,
        currentUserEmail,
        isLoggedIn,
        isEmailVerified,
        userUID,
        deleteItem
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
