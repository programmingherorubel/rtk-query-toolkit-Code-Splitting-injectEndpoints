import React from 'react';
import { Link } from 'react-router-dom';

const SingleReletedVideos = ({relatedvdo}) => {
    const {title,author,like,date,views,thumbnail,description,link} = relatedvdo

    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div
                className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
            >
                <Link to={link}>
                    <img
                        src={thumbnail}
                        className="object-cover"
                        alt={title}
                    />
                </Link>
                <p
                    className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                >
                    
                </p>
            </div>

            <div className="flex flex-col w-full">
                <Link to={link}>
                    <p
                        className="text-slate-900 text-sm font-semibold"
                    >
                        {title}
                    </p>
                </Link>
                <Link to={link}
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    
                >
                    {author}
                </Link>
                <p className="text-gray-400 text-xs mt-1">
                    {like} views . {date}
                </p>
            </div>
        </div>
    );
};

export default SingleReletedVideos;