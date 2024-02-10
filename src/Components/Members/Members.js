import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../Context/Context';
import AnimationTransition from '../AnimationTransition/AnimationTransition';

import './Members.scss';
import './AnimationMembers.scss';

const Members = () => {
    const { handleAnimationScroll } = useContext(Context);
    const [showAnimation, setShowAnimation] = useState(false);
    const membersRef = useRef(),
        membersCardOneRef = useRef(),
        membersCardTwoRef = useRef(),
        membersCardThreeRef = useRef(),
        membersCardFourRef = useRef(),
        membersCardFiveRef = useRef(),
        membersCardSixRef = useRef(),
        membersCardSevenRef = useRef();


    useEffect(() => {
        handleAnimationScroll(membersRef, setShowAnimation);
    }, [membersRef, setShowAnimation, handleAnimationScroll]);

    return (
        <section className="members _animation-item py-5" ref={membersRef}>
            <h2 className="fw-bold text-center mb-4">Members</h2>
            <div className="row justify-content-center mb-3">
                <div className="col-lg-3 col-md-6 ms-lg-5 ms-0">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="members__card_one"
                        classRef={membersCardOneRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="members__card members__card_one text-center" ref={membersCardOneRef}>
                            <div className="members__card_image mb-4">
                                <img src="./images/members_01.png" alt="" />
                            </div>
                            <div className="members__card_content">
                                <h5 className="content__title fw-bold">Name Surname</h5>
                                <p className="content__subtitle">Ui/Ux Designer</p>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
                <div className="col-lg-3 col-md-6">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="members__card_two"
                        classRef={membersCardTwoRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="members__card members__card_two text-center" ref={membersCardTwoRef}>
                            <div className="members__card_image mb-4">
                                <img src="./images/members_02.png" alt="" />
                            </div>
                            <div className="members__card_content">
                                <h5 className="content__title fw-bold">Name Surname</h5>
                                <p className="content__subtitle">Ui/Ux Designer</p>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
                <div className="col-lg-3 col-md-6">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="members__card_three"
                        classRef={membersCardThreeRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="members__card members__card_three text-center" ref={membersCardThreeRef}>
                            <div className="members__card_image mb-4">
                                <img src="./images/members_03.png" alt="" />
                            </div>
                            <div className="members__card_content">
                                <h5 className="content__title fw-bold">Name Surname</h5>
                                <p className="content__subtitle">Ui/Ux Designer</p>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
                <div className="col-lg-3 col-md-6">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="members__card_four"
                        classRef={membersCardFourRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="members__card members__card_four text-center" ref={membersCardFourRef}>
                            <div className="members__card_image mb-4">
                                <img src="./images/members_04.png" alt="" />
                            </div>
                            <div className="members__card_content">
                                <h5 className="content__title fw-bold">Name Surname</h5>
                                <p className="content__subtitle">Ui/Ux Designer</p>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
                <div className="col-lg-3 col-md-6">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="members__card_five"
                        classRef={membersCardFiveRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="members__card members__card_five text-center" ref={membersCardFiveRef}>
                            <div className="members__card_image mb-4">
                                <img src="./images/members_05.png" alt="" />
                            </div>
                            <div className="members__card_content">
                                <h5 className="content__title fw-bold">Name Surname</h5>
                                <p className="content__subtitle">Ui/Ux Designer</p>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
                <div className="col-lg-3 col-md-6">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="members__card_six"
                        classRef={membersCardSixRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="members__card members__card_six text-center" ref={membersCardSixRef}>
                            <div className="members__card_image mb-4">
                                <img src="./images/members_06.png" alt="" />
                            </div>
                            <div className="members__card_content">
                                <h5 className="content__title fw-bold">Name Surname</h5>
                                <p className="content__subtitle">Ui/Ux Designer</p>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
                <div className="col-lg-3 col-md-6">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="members__card_seven"
                        classRef={membersCardSevenRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="members__card members__card_seven text-center" ref={membersCardSevenRef}>
                            <div className="members__card_image mb-4">
                                <img src="./images/members_07.png" alt="" />
                            </div>
                            <div className="members__card_content">
                                <h5 className="content__title fw-bold">Name Surname</h5>
                                <p className="content__subtitle">Ui/Ux Designer</p>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
            </div>
        </section>
    )
}

export default Members;