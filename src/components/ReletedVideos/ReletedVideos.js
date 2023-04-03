import React from 'react';
import SingleReletedVideos from './SingleReletedVideos';
import { useGetReletedVideosQuery } from '../../features/reletedVideos/relatedVideosApi';
import Loading from '../Loading/Loading'
import Error from '../Error/Error'

const ReletedVideos = ({id,tags}) => {
    const {data,isLoading,isError} = useGetReletedVideosQuery({id,tags})

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
        content = data.map((relatedvdo,index) => <SingleReletedVideos key={index} relatedvdo ={relatedvdo} />)
    }
    
    
    return (
        <div
        className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
    >
        {/* <!-- single related video --> */}
        {content}
    </div>
    );
};

export default ReletedVideos;