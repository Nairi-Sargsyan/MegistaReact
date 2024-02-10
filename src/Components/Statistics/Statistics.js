import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../Context/Context';
import AnimationTransition from '../AnimationTransition/AnimationTransition';

import './Statistics.scss';
import './AnimationStatistics.scss';

const Statistics = () => {
    const { handleAnimationScroll } = useContext(Context);
    const [showAnimation, setShowAnimation] = useState(false);
    const statisticsRef = useRef(),
        colOneRef = useRef(),
        coltwoRef = useRef(),
        colthreeRef = useRef(),
        colFourRef = useRef();

    useEffect(() => {
        handleAnimationScroll(statisticsRef, setShowAnimation);
    }, [statisticsRef, setShowAnimation, handleAnimationScroll]);

    return (
        <section className="statistics _animation-item py-5 body__border" ref={statisticsRef}>
            <h2 className="fw-bold text-center mb-4">Statistics</h2>
            <div className="statistics__content rounded-4">
                <div className="row">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="col_one"
                        classRef={colOneRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="col-lg-3 col-sm-6 text-center col_one" ref={colOneRef}>
                            <p className="statistics__number">873</p>
                            <p className="statistics__text">Twitch Streams </p>
                        </div>
                    </AnimationTransition>
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="col_two"
                        classRef={coltwoRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="col-lg-3 col-sm-6 text-center col_two" ref={coltwoRef}>
                            <p className="statistics__number">873</p>
                            <p className="statistics__text">Twitch Streams </p>
                        </div>
                    </AnimationTransition>
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="col_three"
                        classRef={colthreeRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="col-lg-3 col-sm-6 text-center col_three" ref={colthreeRef}>
                            <p className="statistics__number">873</p>
                            <p className="statistics__text">Twitch Streams </p>
                        </div>
                    </AnimationTransition>
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="col_fout"
                        classRef={colFourRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="col-lg-3 col-sm-6 text-center col_fout" ref={colFourRef}>
                            <p className="statistics__number">873</p>
                            <p className="statistics__text">Twitch Streams </p>
                        </div>
                    </AnimationTransition>
                </div>
            </div>
        </section>
    )
}

export default Statistics;