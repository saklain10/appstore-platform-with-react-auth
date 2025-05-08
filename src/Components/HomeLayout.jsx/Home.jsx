import React from 'react';
import HeroBanner from '../HeroBanner';
import AppCards from '../AppCards';
import { useLoaderData, useParams } from 'react-router';
import CollectionsSection from './CollectionsSection';
import ContactButton from '../ContuctUS';

const Home = () => {
    const { id } = useParams();
    const data = useLoaderData();

    return (
        <div>
            <HeroBanner datas={data} />
            <AppCards datas={data} />
            <CollectionsSection />
            <ContactButton></ContactButton>
        </div>
    );
};

export default Home;
