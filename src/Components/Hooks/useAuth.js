import { useEffect, useState } from 'react';

export function useAuth(authFirebase){
    const [authentication, setAuthentication] = useState(null);
    const provider = new authFirebase.GoogleAuthProvider();
    const auth = authFirebase();


    const login = () => auth.signInWithPopup(provider);

    const logOut = () => auth.signOut()
        .then()
        .catch(err => console.error(err))

    useEffect(()=> {
        auth.onAuthStateChanged(user => {if(user){setAuthentication(user)} else setAuthentication(null)})
    }, [auth, authentication]);

    return { authentication, login, logOut }
}