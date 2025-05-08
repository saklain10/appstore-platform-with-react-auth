// <<<<<<< HEAD
// import React, { use, useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router';
// import { AuthContext } from '../Provider/AuthProvider';


// const Register = () => {
//     const { signIn, googleSignIn } = useContext(AuthContext);

//     const { createUser,setUser,updateUser } = use(AuthContext)
    
//     const navigate = useNavigate();
//     const [passwordError, setPasswordError] = useState('')



//     const handleRegister = (e) => {
//         e.preventDefault();
//         // console.log(e.target);
//         const form = e.target
//         const name = form.name.value;
    
//         const photo = form.photo.value
//         const email = form.email.value
//         const password = form.password.value
//         if(password.length < 6){
//             setPasswordError("Password should be at least 6 character")
//         }
//         else if (!/[A-Z]/.test(password)) {
//            <span>setPasswordError("Password should have at least one Uppercase")</span>
//         }
//         else if (!/[a-z]/.test(password)) {
//             setPasswordError("Password should have at least one Lowercase")
//         }
        
//         console.log({ name, photo, email, password })
//         createUser(email, password).then(result => {
//             const user = result.user;
//             console.log(user);
//             updateUser({displayName: name, photoURL: photo})
//             .then(()=>{
//                 setUser({...user,displayName: name, photoURL: photo});
//                 navigate('/')
//             })
//             .catch((error) => {
//                 console.log(error)
//                 setUser(user);
                
//             });
 
//             })
//             .catch((error) =>{
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // alert(errorMessage)
//             })
            
    

//     }

//     const handleGoogleLogin = () => {
//         googleSignIn()
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 navigate(`${location.state? location.state : '/'}`)
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode);
//                 // alert(errorCode, errorMessage);
//             });
//     };

// =======
// import React, { use, useState } from 'react';
// import { Link, useNavigate } from 'react-router';
// // import { AuthContext } from '../Provider/AuthProvider';

// const Register = () => {
//     // const { createUser, setUser, updateUser } = use(AuthContext)
//     // const [nameError, setNameError] = useState("")
//     const navigate = useNavigate();

//     // const handleRegister = (e) => {
//     //     e.preventDefault();
//     //     // console.log(e.target);
//     //     const form = e.target
//     //     const name = form.name.value;
//     //     if (name.length < 5) {
//     //         setNameError("Name should be at least 6 character");
//     //         return;
//     //     } else {
//     //         setNameError("");

//     //     }
//     //     const photo = form.photo.value
//     //     const email = form.email.value
//     //     const password = form.password.value
//     //     // console.log({ name, photo, email, password })
//     //     createUser(email, password).then(result => {
//     //         const user = result.user;
//     //         // console.log(user)
//     //         updateUser({ displayName: name, photoURL: photo })
//     //         .then(() => {
//     //             setUser({...user, displayName: name, photoURL: photo});
//     //         })
//     //         navigate("/")
//     //             .catch((error) => {
//     //                 console.log(error)
//     //                 // An error occurred
//     //                 // ...
//     //                 setUser(user)
//     //             });

//     //     })
//     //         .catch((error) => {
//     //             const errorCode = error.code;
//     //             const errorMessage = error.message;
//     //             console.log(errorCode)
//     //             alert(errorMessage)

//     //         });

//     // }
// >>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
//     return (
//         <div className='flex justify-center mt-3 items-center'>
//             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                 <h1 className='font-semibold text-2xl text-center py-5'>Register your account</h1>
//                 <hr className='mx-4 text-gray-300' />
//                 {/* <form onSubmit={handleRegister} className="card-body"> */}
// <<<<<<< HEAD
//                 <form onSubmit={handleRegister} className="card-body">
//                     <fieldset className="fieldset">
//                         <label className="label font-semibold">Name</label>
//                         <input required name="name" type="text" className="input" placeholder="Your Name" />
// =======
//                 <form  className="card-body">
//                     <fieldset className="fieldset">
//                         <label className="label font-semibold">Name</label>
//                         <input required name="name" type="text" className="input" placeholder="Your Name" />
//                         {/* {nameError && <p className='text-red-600 text-xs'>{nameError}</p>} */}
// >>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
//                         <label className="label font-semibold">Photo URL</label>
//                         <input required name="photo" type="text" className="input" placeholder="Photo URL" />
//                         <label className="label font-semibold">Email</label>
//                         <input required name="email" type="email" className="input" placeholder="Email" />
// <<<<<<< HEAD
//                         {passwordError && <p className='text-red-700'>{passwordError}</p>}
// =======
// >>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
//                         <label className="label font-semibold">Password</label>
//                         <input required name="password" type="password" className="input" placeholder="Password" />
//                         <button type='submit' className="btn btn-neutral mt-4">Register</button>
//                     </fieldset>
//                 </form>
//                 <p className='text-xs text-center pb-7'>Already Have an Account ? Please <Link className='text-secondary font-semibold hover:underline' to="/auth/login">Login</Link> </p>
// <<<<<<< HEAD
//                 <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] hover:bg-amber-200 w-69 mx-auto">
// =======
//                 <button className="btn bg-white text-black border-[#e5e5e5] hover:bg-amber-200 w-69 mx-auto">
// >>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
//                     <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//                     Login with Google
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Register;


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { signIn, googleSignIn, createUser, setUser, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // Password validation
        if (password.length < 6) {
            setPasswordError("Password should be at least 6 characters");
        } else if (!/[A-Z]/.test(password)) {
            setPasswordError("Password should have at least one uppercase letter");
        } else if (!/[a-z]/.test(password)) {
            setPasswordError("Password should have at least one lowercase letter");
        } else {
            // Create user and update profile
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    updateUser({ displayName: name, photoURL: photo })
                        .then(() => {
                            setUser({ ...user, displayName: name, photoURL: photo });
                            navigate('/');
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='flex justify-center mt-3 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-semibold text-2xl text-center py-5'>Register your account</h1>
                <hr className='mx-4 text-gray-300' />
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label font-semibold">Name</label>
                        <input required name="name" type="text" className="input" placeholder="Your Name" />
                        <label className="label font-semibold">Photo URL</label>
                        <input required name="photo" type="text" className="input" placeholder="Photo URL" />
                        <label className="label font-semibold">Email</label>
                        <input required name="email" type="email" className="input" placeholder="Email" />
                        {passwordError && <p className='text-red-700'>{passwordError}</p>}
                        <label className="label font-semibold">Password</label>
                        <input required name="password" type="password" className="input" placeholder="Password" />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                <p className='text-xs text-center pb-7'>
                    Already Have an Account? Please <Link className='text-secondary font-semibold hover:underline' to="/auth/login">Login</Link>
                </p>
                <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] hover:bg-amber-200 w-69 mx-auto">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g>
                    </svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Register;
