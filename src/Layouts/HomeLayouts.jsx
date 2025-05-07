import React, { useEffect } from 'react';
import Navbar from '../assets/Components/Navbar';
import { Outlet, useLocation, useMatches } from 'react-router';
import HeroBanner from '../assets/Components/HeroBanner';
import Footer from '../assets/Components/Footer';
import AppCards from '../assets/Components/AppCards';

const HomeLayouts = () => {

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
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                {/* <HeroBanner></HeroBanner> */}
                {/* <AppCards></AppCards> */}
                <Outlet>

                </Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayouts;