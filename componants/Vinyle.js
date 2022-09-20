import React from 'react'
import Image from "next/image";
import Styles from "../styles/sliderAudio.module.css"

export default function vinyle(music) {


    return (
        <div className={Styles.textAlignCenter}>
            {<Image
                src={'/assets/image/vinyle.png'}
                alt="vinyle"
                width={150}
                height={150}
                // className={Styles.imgVinyle}
            />}
        </div>
    )
}
