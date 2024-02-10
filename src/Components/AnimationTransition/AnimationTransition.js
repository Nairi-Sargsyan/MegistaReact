import { CSSTransition } from "react-transition-group";

const AnimationTransition = ({ inProp, classNames, classRef, animFunction, children }) => {
    return (
        <CSSTransition
            in={inProp}
            timeout={1000}
            classNames={classNames}
            nodeRef={classRef}
            onEnter={() => animFunction(true)}
            onExited={() => animFunction(false)}
        >
            {children}
        </CSSTransition>
    )
}

export default AnimationTransition;