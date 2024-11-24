import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from '/src/firebase';
import { FirebaseError } from "firebase/app"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Error, Input, Switcher, Title, Wrapper, Form, Sumbit } from "../components/auth-components";
import GithubButton from "../components/github-btn";



export default function CreateAccount() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if (isLoading || email === "" || password === "") return;
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, eamil, password);
            navigate("/");
        } catch (e) {
            if(e instanceof FirebaseError){
                setError(e.message)
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <Title>join ✘</Title>
            <Form onSubmit={onSubmit}>
                <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
                <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required />
                <Sumbit type="submit" value={isLoading ? "Loading..." : "Login"} />
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                계정이 없으신가요? <Link to="/create-account">계정 생성하기&rarr;</Link>
            </Switcher>
            <br></br>
            <GithubButton />
        </Wrapper>
        
    );
}
