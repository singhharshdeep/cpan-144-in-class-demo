import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function handleSubmit(event: React.SubmitEvent) {
        event.preventDefault();

        alert(`Form submitted successfully
                    Email: ${email}
                    Message: ${password}
                `);
    }

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input onChange={handleEmailChange} type="email" />
                    {email === "" && <div style={{
                        color: "red"
                    }}>Email is required</div>}
                </div>

                <div>
                    <label>Password:</label>
                    <input onChange={handlePasswordChange} type="password" />
                    {password === "" && <div style={{
                        color: "red"
                    }}>Password is required</div>}
                    {password.length < 8 && <div style={{
                        color: "red"
                    }}>Password must be atleast 8 characters</div>}
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}