import React from 'react';
import HeroBanner from '../HeroBanner';
import AppCards from '../AppCards';
import { useLoaderData, useParams } from 'react-router';
import Autoplay from '../HeroBanner';

const Home = () => {
    const {id} = useParams();
    const data = useLoaderData();
    console.log(id, data)
    return (
        <div>
            <HeroBanner datas={data}></HeroBanner>
            <AppCards datas={data}></AppCards>
        </div>
    );
};

export default Home;