import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../Context/Context';
import AnimationTransition from '../AnimationTransition/AnimationTransition';

import './Subscribe.scss';
import './AnimationSubscribe.scss';

const Subscribe = () => {
    const { handleAnimationScroll } = useContext(Context);
    const [showAnimation, setShowAnimation] = useState(false);
    const subscribeRef = useRef(),
        subscribeImageLeft = useRef(),
        subscribeImageRight = useRef(),
        titleText = useRef(),
        inputGroup = useRef();

    useEffect(() => {
        handleAnimationScroll(subscribeRef, setShowAnimation);
    }, [subscribeRef, setShowAnimation, handleAnimationScroll]);

    return (
        <section className="subscribe _animation-item py-5 body__border" ref={subscribeRef} >
            <div className="subscribe__bg">
                <div className="row h-100 align-items-center">
                    <div className="col-xl-3 col-6 text-start h-100">
                        <AnimationTransition
                            inProp={showAnimation}
                            classNames="subscribe__image_left"
                            classRef={subscribeImageLeft}
                            animFunction={setShowAnimation}
                        >
                            <div className="subscribe__image_left" ref={subscribeImageLeft}>
                                <img src="./images/sub_01.png" className="image__left" alt="" />
                                <img src="./images/sum_icon_01.png" className="subscribe__icon_01 d-md-block d-none" alt="" />
                            </div>
                        </AnimationTransition>
                    </div>
                    <div className="col-xl-6 order-xl-2 order-3 h-100">
                        <div className="mx-3 subscribe__input">
                            <AnimationTransition
                                inProp={showAnimation}
                                classNames="animation__text"
                                classRef={titleText}
                                animFunction={setShowAnimation}
                            >
                                <h2 className="fw-bold text-center mb-4 animation__text" ref={titleText}>Subscribe to Megista</h2>
                            </AnimationTransition>
                            <AnimationTransition
                                inProp={showAnimation}
                                classNames="input-group"
                                classRef={inputGroup}
                                animFunction={setShowAnimation}
                            >
                                <div className="input-group justify-content-center mb-3" ref={inputGroup}>
                                    <input type="text" className="subscribe__content" placeholder="Placeholder/Input text" />
                                    <button className="btn mg-send-btn border-0 ms-3" type="button" id="button-addon2">
                                        <img src="./icons/send.png" alt="" />
                                    </button>
                                </div>
                            </AnimationTransition>
                        </div>
                    </div>
                    <div className="col-xl-3 col-6 text-end order-xl-3 order-2 h-100">
                        <AnimationTransition
                            inProp={showAnimation}
                            classNames="subscribe__image_right"
                            classRef={subscribeImageRight}
                            animFunction={setShowAnimation}
                        >
                            <div className="subscribe__image_right" ref={subscribeImageRight}>
                                <img src="./images/sub_02.png" className="image__right" alt="" />
                                <img src="./images/sub_icon_02.png" className="subscribe__icon_02 d-md-block d-none" alt="" />
                            </div>
                        </AnimationTransition>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;