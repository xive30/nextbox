import React, { useEffect, useRef } from 'react'
import Style from "../styles/sliderAudio.module.css"

export default function AudioPlayer({music}) {

    const musicRef = useRef();

    useEffect(() => {
        musicRef.current.play(music.src);
    }, [music.src])

    return (
        <>
            <audio className={Style.audioBar} src={`assets/musics/${music.src}`} ref={musicRef} controls></audio>
            <p className={Style.subtitle}>{ music.title }</p>
        </>
    )
}
