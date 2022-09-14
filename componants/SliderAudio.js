import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Styles from "../styles/sliderAudio.module.css";
import React, { useRef, useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

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


    const selectMusic = (e) => {
        setCurrentMusic(allMusics[e.currentTarget.dataset.id - 1]);
        // console.log(currentMusic);
    }

    return (
        <>
            <Swiper
                pagination={{ clickable: true, }} 
                modules={[Pagination]} 
                className={Styles.swipper}

                spaceBetween={10}
                slidesPerView={2}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {allMusics.map((music) => (
                    <SwiperSlide className={Styles.swiperSlide} key={music.id}>
                        {/* <Image
                //   src="http://placeimg.com/640/640/any"
                    src={music.img}
                    alt={music.title}
                    layout="fill"
                /> */}
                        <div className="title">
                            <h2 className="h3" data-id={music.id} onClick={selectMusic}>
                                {music.title}
                            </h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <AudioPlayer music={currentMusic} />
        </>
    );
};
