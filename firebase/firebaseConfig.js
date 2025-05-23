import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCKCnZrGSAs2ICnjRR7y1iKpWjRKFFku7I",
    authDomain: "pokeapi2-2242d.firebaseapp.com",
    projectId: "pokeapi2-2242d",
    storageBucket: "pokeapi2-2242d.firebasestorage.app",
    messagingSenderId: "86804124821",
    appId: "1:86804124821:web:ab99918135a5eaa171f79c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };