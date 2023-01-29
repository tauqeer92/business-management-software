import React, {useState} from "react"


const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    
    return (
        <div className="sign-up-page">
            <h1>Sign Up</h1>
            <form>
                <h3>Full Name:</h3>
                <input type="text" value={name} onChange={handleNameChange}></input>
                <h2>Email:</h2>
                <input type="text" value={email} onChange={handleEmailChange}></input>
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