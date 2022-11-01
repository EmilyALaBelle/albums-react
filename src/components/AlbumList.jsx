import { useState, useEffect } from 'react'
import AlbumCard from './AlbumCard'

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
                : albums.map(thisAlbum => <AlbumCard thisAlbum={thisAlbum} />)
            }
        </main>
    )
}
