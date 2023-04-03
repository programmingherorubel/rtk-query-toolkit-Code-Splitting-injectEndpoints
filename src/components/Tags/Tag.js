// এখানে আমাদের টোগল করতে হবে , যখনি একটা ট্যাগ যদি সিলেক্টেড থাকে তখন আমরা রিমুভ ডিস্পেচ ইউজ করবো , আর যদি সিলেক্টেড না থাকে তাহলে আমরা সিলেক্টেড করে দিবো 

// সেজন্য আমরা এখানে একটা ইনটার্নাল স্টেট মেনেজ করতাছি যাতে আমরা সহজে বুঝতে পারি কোণ সিলেক্টেড কোণ টা সিলেক্টেড না 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagRemove, tagSelected } from '../../features/filter/filter';

const Tag = ({title}) => {
    const dispatch = useDispatch()
    const {tags:selected} = useSelector(state => state.filter)
    const isSelected = selected.includes(title) ? true : false 
    const style = isSelected ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'

    const handelSelected = ()=>{
        if(isSelected){
            dispatch(tagRemove(title))
        }else{
            dispatch(tagSelected(title))
        }
    }
    return (
        <>
            
           <div
                onClick={handelSelected}
                className={style}
            >
                {title}
            </div>
           
        </>
    );
};

export default Tag;


// active 
{/* <div
className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
>
redux
</div> */}