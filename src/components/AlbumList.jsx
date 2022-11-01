import { useState, useEffect } from 'react'

export default function AlbumList() {
    const [albums, setAlbums] = useState()
    useEffect(() => {
        fetch('https://albums-api-el.web.app/albums')
            .then(responce => responce.json())
            .then(setAlbums)
            .catch(alert)
    }, [])

    return (
        <main className='album-list'>
            {!albums
                ? <p>Loading...</p>
                : albums.map(album => (
                    <div className='album' key={album.albumId}>
                        <h3>{album.album}</h3>
                        <p>{album.year}, {album.artist}</p>
                    </div>
                ))
            }
        </main>
    )
}
