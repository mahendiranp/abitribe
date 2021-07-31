import React from 'react';
import InstagramEmbed from 'react-instagram-embed';


const Psychology = () => {
    return (
        <section id="psychology" class="psychology section-bg">
            <div class="container">
                <div class="section-title aos-init" data-aos="fade-up">
                    <h2>PSYCHOLOGICAL TESTING</h2>
                    <p>There are mainly three divisions of testing one has to go through once he/she is screened-in on DAY-1. Although other tests are also important, but I do believe that its the PSYCHOLOGICALTESTING that sets the base for further testing. So it is very important to know why and how Psychology is tested. It is a 3 hour long marathon writing test, that has mainly four sections for assessing you as a person. The written test extracts the information you provide as per different situations, this helps them decide how you will react to a particular situation at any point of time. Later on at the ground tasks or during your stay you are constantly judged that whatever you say about yourself, do you really follow what you wrote in your daily life.<br/>
                        For example if you write yourself as a Team Player, do you really coordinate with the team in the group tasks?? Or if you mark yourself as a good listener, do you show this trait in the Group Discussions that follow.
                        <br/>
                        DO REMEMBER-
                        <strong> "SSB IS A TEST OF PERSONALITY AND A PERSONALITY IS VOLATILE AND INFINITE. IT KEEPS ON CHANGING BY DIFFERENT FACTORS IN YOUR LIFE." </strong> <br/>
                        'Every stimulus, creates a response in every living organism' and psychological assessment is a process to extract out your personality traits by your immediate responses to different arenas of life.<br/>
                        <em>PSYCHOLOGICAL TESTING conists of the following tests: </em>
                    </p>
                </div>
                <div>
                    <div class="container aos-init" data-aos="fade-down">
                        <ul>
                        <li>
                            <h3 class="psychology-title">WAT – Word Association Test </h3>
                            <br/>
                            Around 50-60 words are projected back to back for about 10 seconds, and you have to form a sentence using those words. Clearly people often mistake this as a sentence framing test, or how good your vocabulary is. But WAT is a test of your subconscious imagination and how you associate a particular word in your life.  Each sentence tells something about you traits as a person to the assessor. Make sure you don’t write the obvious, avoid explaining the word itself. Like if the word is Honesty, you should not write ‘Honesty is the best policy’ rather focus on how you relate honesty to your own life.
                        </li>
                        <li>
                            <h3 class="psychology-title">TAT – Thematic Aptitude Test </h3>
                            <br/>
                            TAT is a test of ‘Perception’ it aims to judge a person’s quality by his/her imagination of thoughts by the immediate ‘response’ he/she shows to a particular picture. Around 10 different pictures are projected back to back, you have to observe a picture and write a story related to it. You firstly have to identify the protagonist or the hero of the story and then analyse the situation. The basic idea is how good you can link a picture to a problem and how wide your imagination can take you to solve it. You don’t have to make your hero as a superhero, because it looks childish, so the crisis and the response of your story must be clear and logical. 
                        </li>
                        <li>
                            <h3 class="psychology-title">SRT- Situation Reaction Test</h3>
                            <br/>
                            SRT is a test of ‘Reaction’, every problem in life has a solution although approaches can be different depending on the person. SRT puts you into problem and see how you react to the situation. The assessor wants a practical answer on how you react to a particular situation, do you like to face a situation or do you withdraw from it. For example, consider you have an important interview, and on your way, an old lady asks you to help her reach home. How will you react to it?? Your answer is your perception, and there’s not always right or wrong about it. Some situations demand response, others demand withdrawal while some might demand compromise, so choose wisely.
                        </li>
                        <li>
                            <h3 class="psychology-title">
                                SD- SELF DESCRIPTION
                            </h3>
                            <br/>
                            SD is the last section of the Psychological Testing and you’ll be tired when it arrives after continuously writing for around 2.5 hours. This is a basic test of ‘Self-assessment’. The test tries to extract information of how you rate yourself as a person, what you think is your parents’/friends’ opinion about you, what are your responsibilities towards your family or society, what all changes in yourself you want to see. So these are some basic questions on how well you know about yourself.
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section id="interview" class="testimonials section-bg">
      <div class="container">

        <div class="section-title" data-aos="zoom-in-right">
          <h2>Antique Boutique</h2>
          <p>Click to view our Instagram handle. Subscribe to get notified about New Arrivals. </p>
          <centre>
            <InstagramEmbed
            url='https://www.instagram.com/p/B_XSAKygH66/'
            clientAccessToken='684477648739411'
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