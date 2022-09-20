import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Styles from "../styles/sliderAudio.module.css";
import React, { useRef, useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import Image from "next/image";
import Vinyle from "./Vinyle"

export default function SliderAudio() {

    const fetchAllMusics = async () => {
        const res = await fetch('api/music');
        const allMusics = await res.json();
        SetAllMusics(allMusics);
    }

    useEffect(() => {
        fetchAllMusics();
    }, [])

    const [allMusics, SetAllMusics] = useState([]);
    const [currentMusic, setCurrentMusic] = useState({})
    // console.log(allMusics);


    const selectMusic = async (e) => {
        const index =
            setCurrentMusic(allMusics[e.currentTarget.dataset.id]);
        console.log(currentMusic);
    }

    return (
        <>
            <Swiper
                pagination={{ clickable: true, }}
                modules={[Pagination]}
                className={Styles.swipper}
                loop={true}

                spaceBetween={10}
                slidesPerView={2}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {allMusics.map((music, index) => (
                    <SwiperSlide className={Styles.swiperSlide} key={index}>
                        {<Image
                            className="Styles.img"
                            src={music.img}
                            alt={music.title}
                            layout="fill"
                        />}
                        <div className={Styles.title}>
                            <h2 data-id={index} onClick={selectMusic}>
                                {music.title}
                            </h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <AudioPlayer music={currentMusic} />
            <Vinyle music={currentMusic} />
        </>
    );
};
