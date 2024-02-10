import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../Context/Context';
import AnimationTransition from '../AnimationTransition/AnimationTransition';

import './GetInTouch.scss';
import './AnimationGetInTouch.scss';

const GetInTouch = () => {
    const { handleAnimationScroll } = useContext(Context);
    const [showAnimation, setShowAnimation] = useState(false);
    const getInTouchRef = useRef(),
        getInTouchContentRef = useRef();

    useEffect(() => {
        handleAnimationScroll(getInTouchRef, setShowAnimation);
    }, [getInTouchRef, setShowAnimation, handleAnimationScroll]);

    return (
        <section className="get-in-touch _animation-item py-5 body__border" ref={getInTouchRef}>
            <div className="row">
                <div className="col-md-12">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="get-in-touch__content"
                        classRef={getInTouchContentRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="get-in-touch__content p-4" ref={getInTouchContentRef}>
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-md-6 mb-3 w-100">
                                    <div className="get-in-touch__tilte text-center mb-5">
                                        <img src="./images/get_img_01.png" alt="" className="content__image_01 d-none d-md-block" />
                                        <h2 className="fw-bold">GET IN TOUCH</h2>
                                        <p className='tilte__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-4 mb-md-0">
                                            <input type="text" className="get-in-touch__input input__name w-100" placeholder="Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="get-in-touch__input input__email w-100" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="content__text">
                                        <textarea className='w-100 input__text' rows="10" placeholder="Text..." />
                                        <button className="btn mg-send-btn border-0" type="button" id="button-addon2">
                                            <img src="./icons/send.png" alt="" />
                                        </button>
                                        <img src="./images/get_img_02.png" alt="" className="content__image_02 d-none d-md-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
            </div>
        </section >
    )
}

export default GetInTouch;