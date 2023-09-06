import { createContext ,useContext ,useState ,useEffect} from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, 
    createUserWithEmailAndPassword , 
    sendEmailVerification ,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword} 
    from 'firebase/auth';
import firebaseConfig from "./Api";
import Password from "antd/es/input/Password";
import { Space, Spin } from 'antd';


export const FirebaseContext = createContext(null);


export const useFirebase = () => useContext(FirebaseContext);

export  const {firebaseApp} = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

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

  const SignOut = () => {
    return signOut(firebaseAuth);
  };

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
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
