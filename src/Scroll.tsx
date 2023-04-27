import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Function which is used in app.tsx that leads page movement to top when path url changes or page refreshes
const ScrollToTop = (props: {children: React.ReactElement}) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return <>{props.children}</>
}

export default ScrollToTop;