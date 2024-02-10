import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../Context/Context';
import AnimationTransition from '../AnimationTransition/AnimationTransition';
import './Company.scss';
import './AnimationCompany.scss';

const Company = () => {

    const { handleAnimationScroll } = useContext(Context);
    const [showAnimation, setShowAnimation] = useState(false);
    const companyRef = useRef();
    const companyEmblemRef = useRef();
    const companyAboutRef = useRef();

    useEffect(() => {
        handleAnimationScroll(companyRef, setShowAnimation);
    }, [companyRef, setShowAnimation, handleAnimationScroll]);

    return (
        <section className="company py-5 body__border">
            <div className="row" ref={companyRef}>
                <h2 className="fw-bold text-center mb-4">Company</h2>
                <div className="col-xl-5 col-lg-6">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="company__emblem"
                        classRef={companyEmblemRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="company__emblem mb-3 mb-xl-0 text-center w-100 p-3" ref={companyEmblemRef}>
                            <img src="./images/logo__xl.png" className="w-75 mb-4" alt="" />
                            <h2 className='logo__title'>MEGISTA</h2>
                            <p className="logo__subtitle">Game Studio</p>
                        </div>
                    </AnimationTransition>
                </div>
                <div className="col-xl-7 col-lg-6">
                    <div className="h-100">
                        <AnimationTransition
                            inProp={showAnimation}
                            classNames="animation-block"
                            classRef={companyAboutRef}
                            animFunction={setShowAnimation}
                        >
                            <div className="row animation-block justify-content-around align-items-center h-100" ref={companyAboutRef} >
                                <div className="col-12">
                                    <div className="company__about mt-xxl-4 mt-0 mb-3 mb-xxl-0 px-3 pt-3 pb-4 rounded-4">
                                        <h5 className="company__about-title">About</h5>
                                        <p className='company__about_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk...</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="company__about mb-3 mb-xl-0 px-3 pt-3 pb-4 rounded-4">
                                        <h5 className="company__about-title">About</h5>
                                        <p className='company__about_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe...</p>
                                    </div>
                                </div>
                                <div className="col-12 text-end">
                                    <a href="/" className="btn border-0 mg-read-me-btn">Read me</a>
                                </div>
                            </div>
                        </AnimationTransition>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Company;