function Signup(){
    return (
        <div className="login-wrapper">
            <form className="login-form">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" />
                <label htmlFor="town">Town:</label>
                <input type="text" name="town" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
                <label htmlFor="confPass">Confirm Password:</label>
                <input type="password" name="confPass" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup;