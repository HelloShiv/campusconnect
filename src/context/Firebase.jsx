import { createContext ,useContext} from "react";
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification ,
    signInWithEmailAndPassword} from 'firebase/auth'
import firebaseConfig from "./Api";
import Password from "antd/es/input/Password";


const FirebaseContext = createContext(null);


export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {

    const SignupUserWithEmailAndPass = async (email, password) => { // Changed parameter names
        try {
          const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
          // Send email verification
          await sendEmailVerification(userCredential.user); // Changed this line
        } catch (error) {
          // Handle any errors here
          console.error("Error creating user:", error);
        }
      };

      const signInUserWithEmailAndPass = (email , password) => signInWithEmailAndPassword(firebaseAuth,email,password);

    return <FirebaseContext.Provider value={{SignupUserWithEmailAndPass ,signInUserWithEmailAndPass}}>
        {props.children}
        </FirebaseContext.Provider>
};
