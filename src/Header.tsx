

function Header  (){
  return (
  <div className="flex justify-center items-center flex-col ">
    <h1 className="text-2xl">Sign up</h1>
    <p className="text-gray-500">Please enter your details to create an account.</p>
    <h1>Username</h1>
    <button className="bg-gray-900 w-[200px] h-[30px] rounded-xl"></button>
<h1 className="">Email</h1>
   <button className="bg-gray-900 w-[200px] h-[30px] rounded-xl"></button>
    <h1>Password</h1>
       <button className="bg-gray-900 w-[200px] h-[30px] rounded-xl"></button>
       <div className="bg-green-700 rounded-2xl w-[200px] h-[30px] m-[20px] text-white  flex justify-center">Sign in</div>
       <div className=" flex flex-row">
       <p className="text-gray-500">Already Have an account?</p>
        <p className="text-green-700">Login</p>
     
     
       </div>

  </div>

  )
}
export default Header