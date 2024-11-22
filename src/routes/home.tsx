import { auth } from "../firebase";
import "./home.css"
export default function Home(){
    const logOut = () => {
        auth.signOut();
    }
    return <button className="small" onClick={logOut}>Log Out</button>;
}