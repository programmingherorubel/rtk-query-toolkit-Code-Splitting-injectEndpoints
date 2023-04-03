import React from 'react';
import { useParams } from 'react-router-dom';
import Ifram from '../components/Ifram/Ifram';
import ReletedVideos from '../components/ReletedVideos/ReletedVideos';
import VideoDescription from '../components/VideoDescription/VideoDescription';
import { useGetSingleVideoQuery } from '../features/videosQuery/videosQueryApi';
import Error from './../components/Error/Error';
import Loading from './../components/Loading/Loading';

const VideoPage = () => {
    let { videoid } = useParams();
    const {data,isLoading,isError} =  useGetSingleVideoQuery(videoid)
    
    
    let content = null

    if(isLoading){
        content = <Loading />
    }

    if(!isLoading && isError){
        content = <Error message="thare was an error" />
    }

    if(!isLoading && !isError && data?.length === 0){
        content =  <Error message='No Videos Found'/>
    }

    if(!isLoading && !isError && data?.id){
        content = (<>
            <Ifram data={data} />
            <VideoDescription data={data} />
        </>)
    }
    

    
    
    return (
        <>
             <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2"> 
                        {content}
                    </div>

                    {/* <!-- related videos --> */}
                   {data?.id && <ReletedVideos id={videoid} tags={data.tags} />}
                </div>
            </div>
        </section>
        </>
    );
};

export default VideoPage;