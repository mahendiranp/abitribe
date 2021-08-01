import React from 'react';
import { Fancybox } from "@fancyapps/ui";
import Image1 from "../images/img1.jpeg"
import Image2 from "../images/img2.jpeg"
import Image3 from "../images/img3.jpeg"
import Image4 from "../images/img4.jpeg"


const Gallery = () => {
   let images = [
      {
         name: "image1",
         path: "../images/banner/img1.jpg"
      },
       {
         name: "image2",
         path: "../images/banner/img2.jpg"
      },
       {
         name: "image3",
         path: "../images/banner/img3.jpg"
      },
       {
         name: "image4",
         path: "../images/banner/img4.jpg"
      },
       {
         name: "image5",
         path: "../images/banner/img5.jpg"
      },
       {
         name: "image6",
         path: "../images/banner/img6.jpg"
      },
       {
         name: "image7",
         path: "../images/banner/img7.jpg"
      },
       {
         name: "image8",
         path: "../images/banner/img8.jpg"
      },
       {
         name: "image9",
         path: "../images/banner/img9.jpg"
      },
       {
         name: "image10",
         path: "../images/banner/img10.jpg"
      },
       {
         name: "image11",
         path: "../images/banner/img11.jpg"
      },
       {
         name: "image12",
         path: "../images/banner/img12.jpg"
      },
       {
         name: "image13",
         path: "../images/banner/img13.jpg"
      }
   ]

   const ImageGal = () => {
      return images.map(img => 
         <div class="item col-sm-6 col-md-4 mb-3">
            <a href={img.path} class="fancybox" data-fancybox="gallery1">
            <img src={img.path} width="100%" height="100%" alt={img.name}/>
            </a>
         </div>
      )
   }
    return (
        <div id="gallery" class="section-bg">
        
            <div class="section-title aos-init" data-aos="fade-center">
               <h2>Gallery</h2>
               <div className="container">
               <div class="row mt-4">
                  <ImageGal />
               </div>
            </div>
            </div>
         </div>
    );
};

export default Gallery