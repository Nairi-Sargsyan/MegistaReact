import React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../Context/Context';
import AnimationTransition from '../AnimationTransition/AnimationTransition';

import './AboutMegista.scss';
import './AnimationAboutMegista.scss';

const AboutMegista = () => {

    const { handleAnimationScroll } = useContext(Context);
    const [showAnimation, setShowAnimation] = useState(false);
    const aboutMegista = useRef(),
        aboutImgTop = useRef(),
        aboutContentTop = useRef(),
        aboutImgBottom = useRef(),
        aboutContentBottom = useRef(),
        titleRef = useRef();

    useEffect(() => {
        handleAnimationScroll(aboutMegista, setShowAnimation)
    }, [handleAnimationScroll, setShowAnimation, aboutMegista])

    return (
        <section className="megista__about _animation-item not-animation body__border" ref={aboutMegista}>
            <div className="row">
                <div className="col-12">
                    <div className="megista__about_top">
                        <div className="row mb-3 justify-content-md-between align-items-center">
                            <div className="col-lg-4 col-md-6 order-md-1 order-2">
                                <AnimationTransition
                                    inProp={showAnimation}
                                    classNames="about__image_01"
                                    classRef={aboutImgTop}
                                    animFunction={setShowAnimation}
                                >
                                    <img src="./images/about_01.png" className="about__image_01" ref={aboutImgTop} alt="" />
                                </AnimationTransition>
                            </div>
                            <div className="col-lg-7 col-md-6 order-md-2 order-1">
                                <AnimationTransition
                                    inProp={showAnimation}
                                    classNames="megista__about_title"
                                    classRef={titleRef}
                                    animFunction={setShowAnimation}
                                >
                                    <div className="megista__about_title">
                                        <h2 className="fw-bold text-md-start text-center mb-4" ref={titleRef}>About Megista</h2>
                                    </div>
                                </AnimationTransition>
                                <AnimationTransition
                                    inProp={showAnimation}
                                    classNames="about__content_top"
                                    classRef={aboutContentTop}
                                    animFunction={setShowAnimation}
                                >
                                    <div className="about__content about__content_top rounded-4 py-3 px-4" ref={aboutContentTop}>
                                        <h5 className="company__about-title fw-bold">About</h5>
                                        <p className='company__about_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                                    </div>
                                </AnimationTransition>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="megista__about_bottom">
                        <div className="row justify-content-md-between align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <AnimationTransition
                                    inProp={showAnimation}
                                    classNames="about__content_bottom"
                                    classRef={aboutContentBottom}
                                    animFunction={setShowAnimation}
                                >
                                    <div className="about__content about__content_bottom rounded-4 py-3 px-4" ref={aboutContentBottom}>
                                        <h5 className="company__about-title fw-bold">About</h5>
                                        <p className='company__about_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                                    </div>
                                </AnimationTransition>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <AnimationTransition
                                    inProp={showAnimation}
                                    classNames="about__image_02"
                                    classRef={aboutImgBottom}
                                    animFunction={setShowAnimation}
                                >
                                    <img src="./images/about_02.png" className="about__image_02" ref={aboutImgBottom} alt="" />
                                </AnimationTransition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMegista;