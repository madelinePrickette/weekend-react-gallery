function GalleryItem({gallery}) {
    return (
        <div>
        <img src={gallery.path} />
        <p>{gallery.description}</p>
        </div>
    )
}

export default GalleryItem;