import { useState } from "react"

export default function AddAlbum() {
    const [album, setAlbum] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className="add-album">
            <h3>Add new Album</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="album">Album:
                    <input type="text" name="album" 
                    onChange = {e => setAlbum(e.target.value)}
                    value = {album} />
                </label>
            </form>
        </section>
    )
}