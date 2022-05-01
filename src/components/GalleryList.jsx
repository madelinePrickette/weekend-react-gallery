import GalleryItem from "./GalleryItem.jsx";

function GalleryList ({galleryList}) {
    console.log('GalleryList component works in GalleryList.jsx', galleryList)
    return (
        <ul>
            {galleryList.map((gallery) => {
                return (
                    <GalleryItem
                    key= {gallery.id}
                    gallery= {gallery} />
                )
            })}
        </ul>
    )
}

export default GalleryList;