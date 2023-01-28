import React, { useEffect } from "react";
import "./scrollup.scss";

const ScrollUp = () => {
    useEffect(() => {
        const btn = document.querySelector(".scrollup");
        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                btn.style.opacity = "1";
                btn.style.pointerEvents = "all";
            } else {
                btn.style.opacity = 0;
                btn.style.pointerEvents = "none";
            }
        }
    }, [])

    const handleClick = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    return (
        <button className="scrollup" onClick={handleClick} ><i className="fa fa-chevron-up"></i></button>
    )
}

export default ScrollUp;