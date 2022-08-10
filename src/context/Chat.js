/*import {db} from '../services/Firebaseconfig'
import {addDoc, collection,limit,orderBy,query} from 'firebase/firestore'

const roomRef= collection(db ,'rooms')

export async function newChat(){
    const newRoom = await addDoc(roomRef,{
        message:'teste',
        uid:'teste',
        profileimage:'url'
    })
    console.log('newRoom')
    //return chatToken;
}

export function newMessage(user,message,token){
    
}

export function receiveMessage(token){
    const roomRef = collection(db , token)
    const queryMessages = query(roomRef, orderBy('createdAt',limit(25)))
}*/