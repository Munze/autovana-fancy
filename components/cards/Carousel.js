import React from "react";
import { Carousel } from "react-responsive-carousel";

export const Carusel = () => {
  return (
    <div className="rounded-md shadow-xs">
      <Carousel
      autoPlay
      interval={7000}
      // dynamicHeight
      showThumbs={true}
      infiniteLoop
      thumbWidth={120}
      transition={"crossfade"}
      >
        <div>
          <img alt="" src="https://thumbs.dreamstime.com/b/porsche-sports-car-white-isolate-white-55686111.jpg" />
        </div>
        <div>
          <img alt="" src="https://media.istockphoto.com/photos/illustration-of-generic-compact-car-perspective-view-picture-id1148853697?k=20&m=1148853697&s=612x612&w=0&h=x_IL5R5PF48fTZhuD-1gMHDqstoxyrUfRMH-Oet-7Mk=" />
        </div>
        <div>
          <img alt="" src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div>
          <img alt="" src="https://thumbs.dreamstime.com/b/porsche-sports-car-white-isolate-white-55686111.jpg" />
        </div>
        <div>
          <img alt="" src="https://media.istockphoto.com/photos/illustration-of-generic-compact-car-perspective-view-picture-id1148853697?k=20&m=1148853697&s=612x612&w=0&h=x_IL5R5PF48fTZhuD-1gMHDqstoxyrUfRMH-Oet-7Mk=" />
        </div>
        <div>
          <img alt="" src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div>
          <img alt="" src="https://thumbs.dreamstime.com/b/porsche-sports-car-white-isolate-white-55686111.jpg" />
        </div>
        <div>
          <img alt="" src="https://media.istockphoto.com/photos/illustration-of-generic-compact-car-perspective-view-picture-id1148853697?k=20&m=1148853697&s=612x612&w=0&h=x_IL5R5PF48fTZhuD-1gMHDqstoxyrUfRMH-Oet-7Mk=" />
        </div>
        <div>
          <img alt="" src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div>
          <img alt="" src="https://thumbs.dreamstime.com/b/porsche-sports-car-white-isolate-white-55686111.jpg" />
        </div>
        <div>
          <img alt="" src="https://media.istockphoto.com/photos/illustration-of-generic-compact-car-perspective-view-picture-id1148853697?k=20&m=1148853697&s=612x612&w=0&h=x_IL5R5PF48fTZhuD-1gMHDqstoxyrUfRMH-Oet-7Mk=" />
        </div>
        <div>
          <img alt="" src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        
      </Carousel>
    </div>
  );
};

export default Carusel;
