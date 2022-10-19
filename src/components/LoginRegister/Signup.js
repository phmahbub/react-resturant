import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {createUser, updateUserName, user} = useContext(AuthContext)


  const handleName =(event)=>{
    const name = event.target.value
    setName(name)
    console.log(name)
  }
  const handleEmail =(event)=>{
    const email = event.target.value
    setEmail(email)
    console.log(email);
  }
  const handlePassword=(event)=>{
    const password = event.target.value
    setPassword(password)
    console.log(password);
  }

  const handleSingUp = () =>{
    createUser(email, password)
    .then(result =>console.log(result.user))
    .catch(error =>console.error(error))
    //update user name 
  updateUserName(name)
  .then(()=>{
    console.log('profile updated')
  })
  .catch(error=>console.error(error))
  }

  



  return (
    <div className="flex justify-center my-12">
      <div className="flex flex-col w-full max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-400">
            Sign up using your information
          </p>
        </div>
        <div
          
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label forHTML="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
              onChange={handleName}
                type="name"
                name="name"
                id="name"
                placeholder="Your full name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900"
              />
            </div>
            <div>
              <label forHTML="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                onChange={handleEmail}
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label forHTML="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                onChange={handlePassword}
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
              onClick={handleSingUp}
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Do you have an account?
              <Link
                rel="noopener noreferrer"
                to='/signin'
                className="hover:underline dark:text-violet-400"
              >
              <span className="text-purple-500"> Sign in</span>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
