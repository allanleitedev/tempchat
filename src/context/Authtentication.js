import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { useState,createContext } from "react";

import {getDatabase,set,ref} from 'firebase/database'
import{app} from '../services/Firebaseconfig'

export const AuthContext = createContext({})

export function AuthProvider({children}){
  
  const auth = getAuth();
  const [user,setUser] = useState(sessionStorage.getItem("@AuthFireBase:user"))
  const [name,setName] = useState(sessionStorage.getItem("@AuthFireBase:name"))

  function createMail(email,password){
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        alert("Cadastro realizado com sucesso!")
        setUser(user)
        setName(user.email)
        sessionStorage.setItem("@AuthFireBase:user", JSON.stringify(user))
        sessionStorage.setItem("@AuthFireBase:name", JSON.stringify(user.email))
    })
        .catch((error) => {
        const errorMessage = error.message
  });
  }
  
  function signInMail(email,password){
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(userCredential)
          setUser(user)
          setName(user.email)
          sessionStorage.setItem("@AuthFireBase:user", JSON.stringify(user))
          sessionStorage.setItem("@AuthFireBase:name", JSON.stringify(user.email))
      })
          .catch((error) => {
          const errorMessage = error.message
    });
  }
  
  function signInGoogle(){
      var provider = new GoogleAuthProvider
    
      signInWithPopup(auth,provider)
      .then((result)=>{
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const user = result.user
        setUser(user)
        setName(user.displayName)
        sessionStorage.setItem("@AuthFireBase:user", JSON.stringify(user))
        sessionStorage.setItem("@AuthFireBase:name", JSON.stringify(user.displayName))
      })
    }
  
  function signInGithub(){
    var provider = new GithubAuthProvider
  
    signInWithPopup(auth,provider)
    .then((result)=>{
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential.acessToken
      const user = result.user
      setUser(user)
      sessionStorage.setItem("@AuthFireBase:user", JSON.stringify(user))
    })
  }

  function logOut(){
    sessionStorage.clear()
    setUser(null)
    setName(null)
  }
function newChat(){
    console.log('teste')
    const db = getDatabase(app);
  set(ref(db, 'users/' + 'userId'), {
    username: 'name',
    email: 'email',
    profile_picture : 'imageUrl'
  });
    
}
  
  return (
      <AuthContext.Provider value={{signInGoogle,signInMail,logOut,createMail,newChat, signed: !!user,user,name}}>
        {children}
      </AuthContext.Provider>
  )

}
