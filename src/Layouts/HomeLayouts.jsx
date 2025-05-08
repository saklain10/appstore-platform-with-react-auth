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
