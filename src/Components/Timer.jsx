import { useState, useEffect } from "react";
import "../Components/styles/Timer.css"; // Import external styles

export default function Timer() {
    const [countdown, setCountdown] = useState("");

    useEffect(() => {
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    function updateCountdown() {
        const eventDate = new Date("2025-02-28T00:00:00");
        const now = new Date();
        const diff = eventDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setCountdown(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
    }

    function getContainerClasses() {
        return "timer-container";
    }

    function getHeadingClasses() {
        return "timer-heading";
    }

    function getCountdownClasses() {
        return "timer-countdown";
    }

    return (
        <div className={getContainerClasses()}>
            <h2 className={getHeadingClasses()}>EVENT COUNTDOWN</h2>
            <div className={getCountdownClasses()}>{countdown}</div>
        </div>
    );
}
