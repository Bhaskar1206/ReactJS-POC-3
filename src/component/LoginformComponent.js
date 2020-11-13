import FormComponent from './FormComponent'

function LoginformComponent(){

    const {values, handleChanges,handleSubmit } = FormComponent();

    return(
        <div  className="form-group">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                id="username"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChanges}
                placeholder="Enter Your Name"
                />
                <div  className="form-group">
                <input
                id="username"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChanges}
                placeholder="Enter Your Password"
                />
                </div>
                <div className="form-group">
                    <button 
                    type="submit"
                    className ="btn btn-primary"
                    >Submit</button>
                </div>
            </form>
        </div>
    )

}
export default LoginformComponent