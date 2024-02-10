import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../Context/Context';
import AnimationTransition from '../AnimationTransition/AnimationTransition';

import './OurVision.scss';
import './AnimationOurVision.scss';

const OurVision = () => {
    const { handleAnimationScroll } = useContext(Context);
    const [showAnimation, setShowAnimation] = useState(false);
    const visionRef = useRef(),
        visionCardOneRef = useRef(),
        visionCardTwoRef = useRef(),
        visionCardThreeRef = useRef();

    useEffect(() => {
        handleAnimationScroll(visionRef, setShowAnimation);
    }, [visionRef, setShowAnimation, handleAnimationScroll]);

    return (
        <section className="vision _animation-item py-5 body__border" ref={visionRef}>
            <h2 className="fw-bold text-center mb-4">Our Vision</h2>
            <div className="row justify-content-between">
                <div className="col-lg-4 mb-5 mb-md-0">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="vision__card_one"
                        classRef={visionCardOneRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="vision__card vision__card_one text-center mx-md-5" ref={visionCardOneRef}>
                            <div className="vision__card_header">
                                <img src="./images/vision_01.png" alt="" />
                            </div>
                            <div className="vision__card_title my-5">
                                <h2 className="title">Creative</h2>
                            </div>
                            <div className="vision__card_content">
                                <p className='content__text'> InnovationAt Megista, we love to create new and exciting games. Our team is always thinking of fresh ideas and ways to make gaming even more fun. We believe in being bold and trying new things, to give our players the best experience possible.</p>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
                <div className="col-lg-4 mb-5 mb-md-0">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="vision__card_two"
                        classRef={visionCardTwoRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="vision__card vision__card_two text-center mx-md-5" ref={visionCardTwoRef}>
                            <div className="vision__card_header">
                                <img src="./images/vision_02.png" alt="" />
                            </div>
                            <div className="vision__card_title my-5">
                                <h2 className="title">Creative</h2>
                            </div>
                            <div className="vision__card_content">
                                <p className='content__text'>Commitment to Quality"Quality is our top priority at Megista. We check every detail to make sure our games are the best they can be. Our players deserve the best, and we’re dedicated to making that happen.</p>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
                <div className="col-lg-4">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="vision__card_three"
                        classRef={visionCardThreeRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="vision__card vision__card_three text-center mx-md-5" ref={visionCardThreeRef}>
                            <div className="vision__card_header">
                                <img src="./images/vision_03.png" alt="" />
                            </div>
                            <div className="vision__card_title my-5">
                                <h2 className="title">Creative</h2>
                            </div>
                            <div className="vision__card_content">
                                <p className='content__text'>Player SatisfactionAt Megista, our players are at the heart of everything we do. We listen, learn, and take action based on their feedback to constantly improve our games. Our goal is simple: to bring joy and fun to everyone who plays our games.</p>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
            </div>
        </section>
    )
}

export default OurVision;