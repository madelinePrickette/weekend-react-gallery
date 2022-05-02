import {useState} from 'react'

function LikeButton ({}) {
    
    const [likeCounter, setLikeCounter] = useState(0);
    
    const handleClickLike = () => {
        setLikeCounter(likeCounter + 1);
    }
    
    
    
    
    
    return (
        <>
        <button onClick={handleClickLike}>Click to like the above photo.</button>
        <p>Likes: {likeCounter}</p>
        </>
    )
}

export default LikeButton;