import { useNavigate } from "react-router";

function Header() {
  const nevigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-2xl">Sign up</h1>
      <p className="text-gray-500">
        Please enter your details to create an account.
      </p>
      <h1>Username</h1>
      <button className="bg-gray-900 w-[200px] h-[30px] rounded-xl"></button>
      <h1 className="">Email</h1>
      <button className="bg-gray-900 w-[200px] h-[30px] rounded-xl"></button>
      <h1>Password</h1>
      <button className="bg-gray-900 w-[200px] h-[30px] rounded-xl"></button>
      <div
        className="bg-green-700 rounded-2xl w-[200px] h-[30px] m-[20px] text-white  flex justify-center "
        onClick={() => navigate("/age")}
      >
      sign up 
      </div>
      <div className=" flex flex-row">
        <p className="text-gray-500">Already Have an account?</p>
        <p className="text-[#64748B] text-sm">
          Already have an account?{""}
          <a>
            <span
              className="mt-2 text-[#00A63E] text-sm font-semibold 
cursor-pointer hover:underline"
            >
              Login
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
export default Header;