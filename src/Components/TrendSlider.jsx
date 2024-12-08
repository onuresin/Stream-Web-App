import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import videos from "./videos";
import EmptyBookmark from "../assets/images/bookmark_empt.svg";
import FillBookmark from "../assets/images/bookmark_fill.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TrendSlider({ bookmarkedVideos, toggleBookmark }) {
  const trendRandomVideos = (num) => {
    let shuffled = [...videos].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomVideos = useMemo(() => trendRandomVideos(5), []);

  return (
    <div className="trendingContainer">
      <h3>Trend Videolar</h3>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        breakpoints={{
          769: {
            slidesPerView: 2.5,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {randomVideos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="videoSlide">
              <Link to={`/video/${video.id}`}>
                <img src={video.thumbnail} alt={video.title} />
                <div className="videoSlideTextCont">
                  <div className="videoSlideText">
                    <p>
                      {video.year} ·
                      <img className="trendIcon" src={video.show} /> {video.type} ·{" "}
                      {video.rating}
                    </p>
                    <h6>{video.title}</h6>
                  </div>
                </div>
              </Link>
              <div
                className="bookmarkIcon"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleBookmark(video.id);
                }}
              >
                <img
                  src={
                    bookmarkedVideos.includes(video.id) ? FillBookmark : EmptyBookmark
                  }
                  alt="Bookmark Icon"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
