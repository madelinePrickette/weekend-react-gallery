import LikeButton from "./LikeButton";
import DescriptionSwap from "./DescriptionSwap";

function GalleryItem({gallery}) {
    return (
        <div>
        <img src={gallery.path} />
        <DescriptionSwap />
        <LikeButton />
        </div>
    )
}

export default GalleryItem;