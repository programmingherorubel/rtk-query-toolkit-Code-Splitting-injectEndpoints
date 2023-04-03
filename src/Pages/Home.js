import React from 'react';
import Tags from '../components/Tags/Tags';
import VideoGrid from '../components/VideoGrid/VideoGrid/Videos';
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'


const Home = () => {
    return (
        <>
            <Tags />
            <VideoGrid />
            <Pagination/>
            <Footer/>
        </>
        
    );
};

export default Home;