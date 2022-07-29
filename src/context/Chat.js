import {getDatabase,set,ref,push, serverTimestamp, onValue} from 'firebase/database'
import{app} from '../services/Firebaseconfig'

const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const tamanho = 64

const db = getDatabase(app);

export function newChat(){
    var chatToken =''
    for(var i=0;i<tamanho;i++){
        chatToken += char[(Math.floor(Math.random() * char.length))]
    }
    set(ref(db,chatToken), {
        theme:'generic',
    })
    console.log(chatToken)
    return chatToken;
}

export function newMessage(user,message,token){
    set(push(ref(db,token +'/messages'),{
        date:serverTimestamp(),
        user:user,
        message:message
    }))
}

export function receiveMessage(token){
    const starCountRef = ref(db, token);
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    return data
});
}