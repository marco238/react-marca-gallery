import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import "./SliderWrapper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner from "../Banner/Banner";
import { isMobile } from "../../utils/utils";

SwiperCore.use([Navigation, Pagination]);

function SliderWrapper({ images, error }) {
  const [counter, setCounter] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (counter > 0 && counter % 4 === 0) {
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
      }, 4000)
    }
  }, [counter])

  if (error) {
    return <h2 className="error-text">There was an error, retry in a few minutes 😞</h2>;
  }

  if (!images) {
    return <h2 className="loading-text">Loading...</h2>;
  }

  const handleOnSlideEnd = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setCounter(prev => prev + 1);
  }

  const handleOnReachEnd = () => {
    setTimeout(() => {
      navigate('/endview');
    })
  }

  const closeAd = () => {
    setShowBanner(false);
  }

  return (
    <div className="slider-wrapper">
      {(!isMobile() && <Banner />) || (isMobile() && showBanner && <Banner closeAd={closeAd} />)}

      <div className="swiper-container">
        <Swiper
          className="mySwiper"
          navigation={true}
          pagination={true}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={activeIndex}
          loopAdditionalSlides={1}
          loopFillGroupWithBlank={true}
          onSlideChange={handleOnSlideEnd}
          onSwiper={(swiper) => console.log(swiper)}
          onReachEnd={handleOnReachEnd}
        >
          {images.map((img, index) => (
            <SwiperSlide key={img.id}>
              <img src={img.url} alt={img.titulo}></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="slider-info">
        <h2 className="slider-header">{images[activeIndex].titulo}</h2>
        <div className="slider-text" dangerouslySetInnerHTML={{ __html: images[activeIndex].descripcion }} />
      </div>
    </div>
  );
}

export default SliderWrapper;
