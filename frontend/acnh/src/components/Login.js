function Login(){
    return(
        <div className="login-wrapper">
            <form className="login-form">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;