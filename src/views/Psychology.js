import React from 'react';
import InstagramEmbed from 'react-instagram-embed';


const Psychology = () => {
    return (
        <section id="psychology" class="psychology section-bg">
            <section id="interview" class="testimonials section-bg">
      <div class="container">

        <div class="section-title" data-aos="zoom-in-right">
          <h2>Antique Boutique</h2>
          <p>Click to view our Instagram handle. Subscribe to get notified about New Arrivals. </p>
          <centre>
            <InstagramEmbed
            url='https://www.instagram.com/p/B_XSAKygH66/?utm_source=ig_embed&utm_campaign=loading'
            clientAccessToken='IGQVJXbVVZAUHBUMXgtTTZAtYnRPRUQzeUdHWmhXVU5YMzFkaDhwQ0xZAYllqaUJSNmpVVTVRRmlHNWlMRGFrR2NScjctTVNaSlF2OXktRHFENWRmd25qejlpTEc5Q2dFUG9aTFg0akd0SEh5RVRRQWFYLQZDZD'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            />
          </centre>
          </div>
          </div>
          </section>
        </section>
    );
};

export default Psychology;