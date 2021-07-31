import React from 'react';
import Image1 from "../images/img1.jpeg"
import Image2 from "../images/img2.jpeg"
import Image3 from "../images/img3.jpeg"
import Image4 from "../images/img4.jpeg"

const Gallery = () => {
    return (
        <div class="container">
            <div class="section-title aos-init" data-aos="fade-left">
               <h2>Gallery</h2>
               <div class="row mt-4">
                  <div class="item col-sm-6 col-md-4 mb-3">
                     <a href="img1.jpeg" class="fancybox" data-fancybox="gallery1">
                     <img src={Image1} width="100%" height="100%"/>
                     </a>
                  </div>
                  <div class="item col-sm-6 col-md-4 mb-3">
                     <a href="img2.jpeg" class="fancybox" data-fancybox="gallery1">
                     <img src={Image2} width="100%" height="100%"/>
                     </a>
                  </div>
                  <div class="item col-sm-6 col-md-4 mb-3">
                     <a href="img3.jpeg" class="fancybox" data-fancybox="gallery1">
                     <img src={Image3} width="100%" height="100%"/>
                     </a>
                  </div>
                  <div class="item col-sm-6 col-md-4 mb-3">
                     <a href="img4.jpeg" class="fancybox" data-fancybox="gallery1">
                     <img src={Image4} width="100%" height="100%"/>
                     </a>
                  </div>
                  <div class="item col-sm-6 col-md-4 mb-3">
                     <a href="img1.jpeg" class="fancybox" data-fancybox="gallery1">
                     <img src={Image1} width="100%" height="100%"/>
                     </a>
                  </div>
                  <div class="item col-sm-6 col-md-4 mb-3">
                     <a href="img3.jpeg" class="fancybox" data-fancybox="gallery1">
                     <img src={Image2} width="100%" height="100%"/>
                     </a>
                  </div>
               </div>
            </div>
         </div>
    );
};

export default Gallery