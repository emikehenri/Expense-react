export const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("button is working");
  }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-maintext">Email</span>
              </label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered" 
                required 
              />
            </div>
            
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text text-maintext">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="input input-bordered" 
                required 
              />
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                <span className="label-text ml-2 text-maintext">Remember me</span> 
              </label>
              <a href="#" className="text-sm hover:underline text-maintext">Forgot password?</a>
            </div>
            
            <button type="submit" className="btn btn-info mt-6 w-full">Login</button>
          </form>
        </>
    )
}