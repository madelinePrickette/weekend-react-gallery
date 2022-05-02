import { useState } from 'react'

function DescriptionSwap() {

    const [isImageShown, setIsImageShown] = useState(true);

    const switchImage = () => {
    setIsImageShown(!isImageShown)
    }

    const switchIfStatement = () => {
        if(isImageShown) {
            return 
        } else {
            return <p>{gallery.description}</p>
        }
    }

    return (
        <div>
            {switchIfStatement()}
            <img onClick={switchImage}></img>
        </div>
    )
}

export default DescriptionSwap;