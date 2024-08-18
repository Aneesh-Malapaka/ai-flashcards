import React from 'react';
import { FaGoogle } from "react-icons/fa";
import authImage from '../authImage.jpg';
import useAuth from '../hooks/AuthLogic';  
function Auth() {
  const { signInWithGoogle } = useAuth();  

  return (
    <div className='flex flex-row justify-center items-center mx-20 my-10 p-0 '>
      <div className="authDiv">
        <p className="tagline text-5xl mb-10">Sign in and let's enjoy the process of learning</p>
        <div className="auth">
          <button onClick={signInWithGoogle} className='flex gap-3 items-center bg-green-400 p-5 rounded-xl mb-3'>
            <FaGoogle /> Sign in with Google
          </button>
          <p className="help text-xs font-medium text-gray-500">An Account will be created automatically if you don't have one</p>
        </div>
      </div>
      <div className="imageDiv">
        <img src={authImage} alt="Students Happy" width={500} />
      </div>
    </div>
  );
}

export default Auth;
