export default function AddAlbum() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className="add-album">
            <h3>Add new Album</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="album">Album:
                    <input type="text" name="album" />
                </label>
            </form>
        </section>
    )
}