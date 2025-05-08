// import React, { useState } from 'react';
// <<<<<<< HEAD
// import { Link, useLoaderData, useParams } from 'react-router';
// =======
// import { useLoaderData, useParams } from 'react-router';
// >>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
// import { IoIosStar } from "react-icons/io";

// const AppDetails = () => {
//   const data = useLoaderData();
//   const { id } = useParams();
//   const singleAppData = data.find(app => app.id === id);

//   const {
//     name,
//     developer,
//     thumbnail,
//     banner,
//     downloads,
//     category,
//     rating,
//     description,
//     features
//   } = singleAppData;

//   const [userRating, setUserRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [reviewText, setReviewText] = useState('');
//   const [agree, setAgree] = useState(false);
//   const [showReview, setShowReview] = useState(false);
//   const [isInstalled, setIsInstalled] = useState(false);
//   const [hasInstalledOnce, setHasInstalledOnce] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (agree) {
//       setShowReview(true);
//       alert("Review submitted!");
//     } else {
//       alert("Please agree to the privacy policy.");
//     }
//   };

//   return (
//     <div className='max-w-5xl mx-auto px-4 justify-start'>
//       <div className='flex justify-center'>
//         <img src={banner} className='w-192 h-auto object-cover rounded-xl shadow-lg' />
//       </div>

//       <div className='flex flex-col md:flex-row items-center md:items-start gap-6 mt-6 justify-center'>
//         <img src={thumbnail} alt={name} className='w-28 h-28 rounded-3xl shadow-md' />
//         <div>
//           <h2 className='text-3xl font-bold'>{name}</h2>
//           <p className='text-gray-500'>By {developer}</p>
//           <div className='flex gap-3 mt-2 text-sm text-gray-600'>
//             <span>📥 {downloads.toLocaleString()} downloads</span>
//             <span>📂 {category}</span>
//             <span>⭐ {rating}</span>
//           </div>
//           <button
//             onClick={() => {
//               setIsInstalled(!isInstalled);
//               if (!hasInstalledOnce) setHasInstalledOnce(true);
//             }}
//             className={`mt-4 px-4 py-2 ${isInstalled ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg transition`}
//           >
//             {isInstalled ? 'Uninstall' : 'Install'}
//           </button>
//         </div>
//       </div>

//       <div className='mt-8'>
//         <h3 className='text-xl font-semibold mb-2'>📖 Description</h3>
//         <p className='text-gray-700'>{description}</p>
//       </div>

//       <div className='mt-6'>
//         <h3 className='text-xl font-semibold mb-2'>🚀 Features</h3>
//         <ul className='list-disc list-inside text-gray-700'>
//           {features.map((feature, idd) => (
//             <li key={idd}>{feature}</li>
//           ))}
//         </ul>
//       </div>

// <<<<<<< HEAD
//       <Link className='btn btn-primary bg-base-300 text-black border-none mt-4' to="/">
//       Back to All Apps
//       </Link>

// =======
// >>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
//       {hasInstalledOnce && (
//         <div className='mt-6'>
//           <h3 className='text-xl font-semibold mb-4'>💬 User Reviews</h3>

//           <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow-sm bg-gray-50">
//             <div>
//               <label className='block font-medium mb-1'>Your Rating</label>
//               <div className="flex space-x-1 text-2xl">
//                 {[...Array(5)].map((_, index) => {
//                   const ratingValue = index + 1;
//                   return (
//                     <span
//                       key={index}
//                       className={`cursor-pointer ${ratingValue <= (hover || userRating) ? 'text-yellow-500' : 'text-gray-400'}`}
//                       onClick={() => setUserRating(ratingValue)}
//                       onMouseEnter={() => setHover(ratingValue)}
//                       onMouseLeave={() => setHover(0)}
//                     >
//                       <IoIosStar />
//                     </span>
//                   );
//                 })}
//               </div>
//             </div>

//             <div>
//               <label className='block font-medium mb-1'>Your Review</label>
//               <textarea
//                 className='w-full border p-2 rounded-md resize-none'
//                 placeholder="Write your review..."
//                 rows={4}
//                 value={reviewText}
//                 onChange={(e) => setReviewText(e.target.value)}
//               />
//             </div>

//             <div className='flex items-center space-x-2'>
//               <input
//                 type="checkbox"
//                 checked={agree}
//                 onChange={() => setAgree(!agree)}
//               />
//               <label className='text-sm'>
//                 I agree to the <a href="#" className='text-blue-600 underline'>Privacy Policy</a>.
//               </label>
//             </div>

//             <button
//               type="submit"
//               className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition'
//             >
//               Submit Review
//             </button>
//           </form>

//           {showReview && (
//             <div className="mt-6 p-4 border rounded-lg bg-white shadow-md">
//               <div className="flex items-center gap-3 mb-2">
//                 <img
//                   src="https://i.pravatar.cc/40"
//                   alt="user"
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div>
//                   <p className="font-semibold">John Doe</p>
//                   <div className="flex text-yellow-500">
//                     {[...Array(userRating)].map((_, index) => (
//                       <IoIosStar key={index} />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-700">{reviewText}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AppDetails;


import React, { useState } from 'react';
import { useLoaderData, useParams, Link } from 'react-router';
import { IoIosStar } from "react-icons/io";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const AppDetails = () => {
  const { user } = useContext(AuthContext);

  const data = useLoaderData();
  const { id } = useParams();
  const singleAppData = data.find(app => app.id === id);

  // If app data is not found, redirect or show an error message
  if (!singleAppData) {
    return <p>App not found!</p>;
  }

  const {
    name,
    developer,
    thumbnail,
    banner,
    downloads,
    category,
    rating,
    description,
    features
  } = singleAppData;

  const [userRating, setUserRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [agree, setAgree] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [hasInstalledOnce, setHasInstalledOnce] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agree) {
      setShowReview(true);
      alert("Review submitted!");
    } else {
      alert("Please agree to the privacy policy.");
    }
  };

  return (
    <div className='max-w-5xl mx-auto px-4 justify-start'>
      <div className='flex justify-center'>
        <img src={banner} className='w-192 h-auto object-cover rounded-xl shadow-lg' />
      </div>

      <div className='flex flex-col md:flex-row items-center md:items-start gap-6 mt-6 justify-center'>
        <img src={thumbnail} alt={name} className='w-28 h-28 rounded-3xl shadow-md' />
        <div>
          <h2 className='text-3xl font-bold'>{name}</h2>
          <p className='text-gray-500'>By {developer}</p>
          <div className='flex gap-3 mt-2 text-sm text-gray-600'>
            <span>📥 {downloads.toLocaleString()} downloads</span>
            <span>📂 {category}</span>
            <span>⭐ {rating}</span>
          </div>
          <button
            onClick={() => {
              setIsInstalled(!isInstalled);
              if (!hasInstalledOnce) setHasInstalledOnce(true);
            }}
            className={`mt-4 px-4 py-2 ${isInstalled ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg transition`}
          >
            {isInstalled ? 'Uninstall' : 'Install'}
          </button>
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='text-xl font-semibold mb-2'>📖 Description</h3>
        <p className='text-gray-700'>{description}</p>
      </div>

      <div className='mt-6'>
        <h3 className='text-xl font-semibold mb-2'>🚀 Features</h3>
        <ul className='list-disc list-inside text-gray-700'>
          {features.map((feature, idd) => (
            <li key={idd}>{feature}</li>
          ))}
        </ul>
      </div>

      <Link className='btn btn-primary bg-base-300 text-black border-none mt-4' to="/">
        Back to All Apps
      </Link>

      {hasInstalledOnce && (
        <div className='mt-6'>
          <h3 className='text-xl font-semibold mb-4'>💬 User Reviews</h3>

          <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow-sm bg-gray-50">
            <div>
              <label className='block font-medium mb-1'>Your Rating</label>
              <div className="flex space-x-1 text-2xl">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <span
                      key={index}
                      className={`cursor-pointer ${ratingValue <= (hover || userRating) ? 'text-yellow-500' : 'text-gray-400'}`}
                      onClick={() => setUserRating(ratingValue)}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    >
                      <IoIosStar />
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <label className='block font-medium mb-1'>Your Review</label>
              <textarea
                className='w-full border p-2 rounded-md resize-none'
                placeholder="Write your review..."
                rows={4}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </div>

            <div className='flex items-center space-x-2'>
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <label className='text-sm'>
                I agree to the <a href="#" className='text-blue-600 underline'>Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition'
            >
              Submit Review
            </button>
          </form>

          {showReview && (
  <div className="mt-6 p-4 border rounded-lg bg-white shadow-md">
    <div className="flex items-center gap-3 mb-2">
      <img
        src={user?.photoURL || "https://img.icons8.com/?size=100&id=21441&format=png&color=000000"}
        alt="user"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-semibold">{user?.displayName || "Someone"}</p>
        <div className="flex text-yellow-500">
          {[...Array(userRating)].map((_, index) => (
            <IoIosStar key={index} />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-700">{reviewText}</p>
  </div>
)}

        </div>
      )}
    </div>
  );
};

export default AppDetails;
