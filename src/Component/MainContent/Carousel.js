import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselCom = () => {
    return (
        <Carousel style={{ width: "100%", height: "200px", marginTop: "100px", border: "1px solid red" }}>
            <div>
                <img style={{ width: "100%" }} src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Fashion/AF/EOSS/flip/EOSS_PC_Herotator._SX3000_QL85_.jpg" alt="Slide 1" />
            </div>
            <div>
                <img style={{ width: "100%" }} src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Fashion/AF/Winterwearflip/topheros/cml-pc._SX3000_QL85_.jpg" alt="Slide 2" />
            </div>
            <div>
                <img style={{ width: "100%" }} src="https://m.media-amazon.com/images/G/31/img21/MA2023/Oct/winter/store/main-scroll-pc._CB574359281_.gif" alt="Slide 3" />
            </div>
            <div>
                <img style={{ width: "100%" }} src='https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Fashion/AF/Winterwearflip/topheros/genz-pc._SX3000_QL85_.jpg'></img>
            </div>
            <div>
                <img style={{ width: "100%" }} src='https://m.media-amazon.com/images/G/31/img23/Fashion/AF/Event/Jupiter23/Phase1/CML/Heros/1-pc_1._CB575777439_.png'></img>
            </div>
        </Carousel>
    );
};

export default CarouselCom;
