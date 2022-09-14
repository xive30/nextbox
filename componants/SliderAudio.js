import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Styles from "../styles/sliderAudio.module.css";

export default function SliderAudio() {

    const fetchAllMusics = async () => {
        const res = await fetch('http://localhost:3000/api/music');
        const allMusics = await res.json();
        SetAllMusics(allMusics);
    }

    useEffect(() => {
        fetchAllMusics();
    }, [])

    const [allMusics, SetAllMusics] = useState([]);
    console.log(allMusics);

    return (
        <Swiper
        pagination={{clickable: true, }} modules={[Pagination]} className={Styles.swipper}
        
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
                { allMusics.map((music) => (
            <SwiperSlide className={Styles.swiperSlide} key={music.id}>
                {/* <Image
                //   src="http://placeimg.com/640/640/any"
                    src={music.img}
                    alt={music.title}
                    layout="fill"
                /> */}
                <div className="title">
                    <h2 className="h3" data-id={music.id}>
                        {music.title}
                    </h2>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    );
};
