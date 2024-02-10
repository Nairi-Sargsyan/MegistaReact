import React from 'react';
import { useRef } from 'react';

const FAQItems = () => {
    const faqAccrdionRef = useRef();

    const handleToggleAccardion = () => {
        faqAccrdionRef.current.classList.toggle('open');
    }

    return (
        <div
            ref={faqAccrdionRef}
            className="faq__accardion_items p-3 mb-1"
            onClick={handleToggleAccardion}
        >
            <div className="item p-4 d-flex justify-content-between align-items-center">
                <h2 className="item__title mb-0 text-start">How can I contact the team for help?</h2>
                <img src="./icons/faq_arrow.png" alt="" className="faq__item_icon" />
            </div>
            <div className="item__dropdown">
                <p className="item__dropdown_text mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk...</p>
            </div>
        </div>
    )
}

export default FAQItems;