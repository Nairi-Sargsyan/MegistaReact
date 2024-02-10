import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../Context/Context';
import AnimationTransition from '../AnimationTransition/AnimationTransition';

import FAQItems from './FAQItem';

import './FAQ.scss';
import './AnimationFAQ.scss';

const FAQ = () => {
    const { handleAnimationScroll } = useContext(Context);
    const [showAnimation, setShowAnimation] = useState(false);
    const faqRef = useRef(),
        faqAccardionRef = useRef();

    useEffect(() => {
        handleAnimationScroll(faqRef, setShowAnimation);
    }, [faqRef, setShowAnimation, handleAnimationScroll]);

    return (
        <section className="faq py-5" ref={faqRef}>
            <h2 className="fw-bold text-center mb-5">FAQ</h2>
            <AnimationTransition
                inProp={showAnimation}
                classNames="faq__accardion"
                classRef={faqAccardionRef}
                animFunction={setShowAnimation}
            >
                <div className="faq__accardion not-animation" ref={faqAccardionRef}>
                    <FAQItems />
                    <FAQItems />
                    <FAQItems />
                    <FAQItems />
                </div>
            </AnimationTransition>
        </section>
    )
}

export default FAQ;