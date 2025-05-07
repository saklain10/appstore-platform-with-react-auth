import React, { use, useState } from 'react';
import { Link, useLocation } from 'react-router';
// import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';


const Login = () => {
    // const [error, setError] = useState('')

    const navigate = useNavigate();

    // const { signIn } = use(AuthContext);
    // const location = useLocation()
    // // console.log(location)

    // const handleLogin = (e) => {
    //     e.preventDefault()
    //     const form = e.target
    //     const email = form.email.value
    //     const password = form.password.value
    //     // console.log(email, password)

    //     signIn(email, password).then((result) => {
    //         const user = result.user;
    //         // console.log(user)
    //         navigate(`${location.state ? location.state : "/"}`)

    //     })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorCode)
    //             // alert(errorCode,errorMessage)
    //             setError(errorCode)

    //         });
    // }
    // // const handleLlogin = () => {
    // //     navigate('/');
    // //   };
    return (
        <div className='flex justify-center mt-3 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-semibold text-2xl text-center py-5'>Login your account</h1>
                <hr className='mx-4 text-gray-300' />
                {/* <form onSubmit={handleLogin} className="card-body"> */}
                <form className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label font-semibold">Email</label>
                        <input required name="email" type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label font-semibold">Password</label>
                        <input required name="password" type="password" className="input" placeholder="Password" />
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        {/* onClick={handleLlogin} */}
                    </fieldset>
                </form>
                <p className='text-xs text-center pb-5'>Don’t Have An Account ? Please <Link className='text-green-600 font-semibold hover:underline' to="/auth/register">Register</Link> </p>
                <button className="btn bg-white text-black border-[#e5e5e5] hover:bg-amber-200 w-69 mx-auto">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;