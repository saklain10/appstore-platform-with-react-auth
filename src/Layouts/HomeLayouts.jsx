// import React, { useEffect } from 'react';
// <<<<<<< HEAD
// import Navbar from '../Components/Navbar';
// import { Outlet, useLocation, useMatches, useNavigation } from 'react-router';
// import HeroBanner from '../Components/HeroBanner';
// import Footer from '../Components/Footer';
// import AppCards from '../Components/AppCards';
// import Loading from '../Pages/Loading';

// const HomeLayouts = () => {
// const {state} = useNavigation();
// =======
// import Navbar from '../assets/Components/Navbar';
// import { Outlet, useLocation, useMatches } from 'react-router';
// import HeroBanner from '../assets/Components/HeroBanner';
// import Footer from '../assets/Components/Footer';
// import AppCards from '../assets/Components/AppCards';

// const HomeLayouts = () => {

// >>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
//     const location = useLocation();
//     const matches = useMatches();
//     useEffect(() => {
//         const activeMatch = matches
//           .filter((match) => match.route?.handle?.title)
//           .pop();
      
//         if (activeMatch?.route?.handle?.title) {
//           document.title = `${activeMatch.route.handle.title} - AppGallery`;
//         } else {
//           document.title = 'AppGallery';
//         }
//       }, [location, matches]);
      
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <Navbar></Navbar>
//                 </nav>
//             </header>
// <<<<<<< HEAD
//             {import.meta.env.VITE_name}
//             <main>
//                 {/* <HeroBanner></HeroBanner> */}
//                 {/* <AppCards></AppCards> */}
//                 {state === "loading" ? <Loading/> : <Outlet></Outlet>}
                
// =======
//             <main>
//                 {/* <HeroBanner></HeroBanner> */}
//                 {/* <AppCards></AppCards> */}
//                 <Outlet>

//                 </Outlet>
// >>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4
//             </main>
//             <footer>
//                 <Footer></Footer>
//             </footer>
//         </div>
//     );
// };

// export default HomeLayouts;


import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation, useMatches, useNavigation } from 'react-router';
import HeroBanner from '../Components/HeroBanner';
import Footer from '../Components/Footer';
import AppCards from '../Components/AppCards';
import Loading from '../Pages/Loading';

const HomeLayouts = () => {
    const { state } = useNavigation();
    const location = useLocation();
    const matches = useMatches();

    useEffect(() => {
        const activeMatch = matches
            .filter((match) => match.route?.handle?.title)
            .pop();

        if (activeMatch?.route?.handle?.title) {
            document.title = `${activeMatch.route.handle.title} - AppGallery`;
        } else {
            document.title = 'AppGallery';
        }
    }, [location, matches]);

    return (
        <div>
            <header>
                <nav>
                    <Navbar />
                </nav>
                {/* <HeroBanner></HeroBanner> */}
            </header>
            {/* {import.meta.env.VITE_name} */}
            <main>
                {state === "loading" ? <Loading /> : <Outlet />}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayouts;
