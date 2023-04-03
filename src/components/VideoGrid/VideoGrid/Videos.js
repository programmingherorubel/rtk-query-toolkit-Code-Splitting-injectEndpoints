import React from 'react';
import SingleVideo from './SingleVideo';
import { useGetVideosQuery } from '../../../features/videosQuery/videosQueryApi';
import Loading from '../../Loading/Loading'
import Error from '../../Error/Error'
import { useSelector } from 'react-redux';

const VideoGrid = () => {
    const {tags,search} = useSelector(state => state.filter)
    const {data,isLoading,isError} = useGetVideosQuery({tags,search})
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

    if(!isLoading && !isError && data.length > 0){
        content = data.map((video,index) => <SingleVideo video={video} key={index} />)
    }
    
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* <!-- single video --> */}
                    {content}

                    {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
                </div>
            </section>
        </section>
    );
};

export default VideoGrid;