import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const [error, setError] = useState('');
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        toast.success("Welcome back");
        navigate(location.state?.from?.pathname || '/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        toast.success(`Logged in as ${user.displayName || 'User'}`);
        navigate(location.state?.from?.pathname || '/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <div className='flex justify-center mt-3 items-center'>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h1 className='font-semibold text-2xl text-center py-5'>Login your account</h1>
        <hr className='mx-4 text-gray-300' />
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold">Email</label>
            <input required name="email" type="email" className="input input-bordered" placeholder="Email" />

            <label className="label font-semibold">Password</label>
            <input required name="password" type="password" className="input input-bordered" placeholder="Password" />

            {error && <p className='text-red-600'>{error}</p>}

            <button type='submit' className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>

        <p className='text-xs text-center pb-5'>
          Don’t Have An Account?{' '}
          <Link className='text-green-600 font-semibold hover:underline' to="/auth/register">Register</Link>
        </p>

        <button
          onClick={handleGoogleLogin}
          className="btn bg-white text-black border-[#e5e5e5] hover:bg-amber-200 mx-auto w-5/6 mb-5"
        >
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path fill="#fff" d="M0 0h512v512H0z" />
              <path fill="#EA4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              <path fill="#FBBC05" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
              <path fill="#34A853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
              <path fill="#4285F4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
            </g>
          </svg>
          <span className="ml-2">Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
