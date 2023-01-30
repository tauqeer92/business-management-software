import React, {useState} from "react"
import { useNavigate } from "react-router-dom";


const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/users", {
            method: "post",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            navigate("/materials");
        });
        
    }
    
    return (
        <div className="sign-up-page">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <h3>Full Name:</h3>
                <input type="text" onChange={handleNameChange}></input>
                <h2>Email:</h2>
                <input type="text" onChange={handleEmailChange}></input>
                <h2>Password:</h2>
                <input type="text" onChange={handlePasswordChange}></input>
                <br></br>
                <br></br>
                <button type="submit">Sign Up</button>
                <h3>Already have an account?</h3>
                <a href="/login">Login</a>
            </form>

        </div>
    )
}   

export default SignUp

