import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToUp = () => {
    const { pathName } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName])

    return null;
}

export default ScrollToUp;