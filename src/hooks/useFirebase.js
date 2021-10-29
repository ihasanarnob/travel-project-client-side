import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const  useFirebase = () => {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true)


    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        })
        .finally(() => setLoading(false));

    }

    useEffect(() =>{
        const unsubscribed =  onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setLoading(false);
        })
        return() => unsubscribed;
    },[])

    const logOut = () =>{
        signOut(auth)
        .then(result =>{ })
        .finally(()=> setLoading(false))

    }


    return{
        loading,
        user,
        signInUsingGoogle,
        logOut,
    }
}

export default useFirebase;