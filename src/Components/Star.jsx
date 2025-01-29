import { useEffect } from "react";
import "./style.css" // Make sure to include appropriate styling

export default function Star() {
    useEffect(() => {
        const starsContainer = document.getElementById("star");
        if (!starsContainer) return;

        for (let i = 0; i < 200; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            starsContainer.appendChild(star);
        }
    }, []);

    return <div id="star"></div>;
}
