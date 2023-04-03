import React from 'react';

const Ifram = ({data}) => {
    const {link,title}=data
  
    return (
         <iframe
                            width="100%"
                            class="aspect-video"
                            src={link}
                            title={title}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
    );
};

export default Ifram;