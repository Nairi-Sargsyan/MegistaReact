import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../Context/Context';
import AnimationTransition from '../AnimationTransition/AnimationTransition';

import './Game.scss';
import './AnimationGame.scss';

const Game = () => {
    const { handleAnimationScroll } = useContext(Context);
    const [showAnimation, setShowAnimation] = useState(false);
    const gameRef = useRef(),
        gameTitleImgRef = useRef(),
        gameBanansRef = useRef();

    useEffect(() => {
        handleAnimationScroll(gameRef, setShowAnimation);
    }, [gameRef, setShowAnimation, handleAnimationScroll]);

    return (
        <section className="game py-5 body__border" ref={gameRef}>
            <h2 className="fw-bold text-center mb-4">Game</h2>
            <div className="row justify-content-between">
                <div className="col-lg-5 mb-lg-0 mb-4">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="game__title_img"
                        classRef={gameTitleImgRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="game__title_img" ref={gameTitleImgRef}>
                            <img src="./images/game_01.png" className="w-100 h-100" alt="" />
                        </div>
                    </AnimationTransition>
                </div>
                <div className="col-lg-5">
                    <AnimationTransition
                        inProp={showAnimation}
                        classNames="game__bananas"
                        classRef={gameBanansRef}
                        animFunction={setShowAnimation}
                    >
                        <div className="game__bananas p-3 text-center h-100" ref={gameBanansRef}>
                            <div className="row h-100">
                                <div className="col-12">
                                    <img src="./images/game_02.png" alt="" />
                                </div>
                                <div className="col-12">
                                    <p className='bananas__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk...</p>
                                </div>
                                <div className="col-12">
                                    <div className="text-center">
                                        <button className="btn btn__play border-0">Play now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationTransition>
                </div>
            </div>
        </section>
    )
}

export default Game;