import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();

        //do login logic
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect...
                history.push("/");
            })
            .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();

        //do register logic
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //created a user and logged in, redirect
                history.push("/");
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                    className="login__logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    <h5>Password</h5>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <button onClick={login} type="submit" className="login__signInButton">
                        Sign In
                    </button>
                </form>

                <p>
                    By signing in you agree to... Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Similique sit hic veritatis voluptate distinctio! Beatae aut
                    eos qui provident fugiat?
                </p>
                <button onClick={register} className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
