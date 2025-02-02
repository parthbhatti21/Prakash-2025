import { useState, useEffect } from "react";
import "../Components/styles/Timer.css"; // Import external styles

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [isVisible, setIsVisible] = useState(true); // State to control visibility

    useEffect(() => {
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    function updateCountdown() {
        const eventDate = new Date("2025-02-28T00:00:00");
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
    }

    // Function to hide the timer
    const handleClose = () => {
        setIsVisible(false);
    };

    // If the timer is not visible, return null
    if (!isVisible) {
        return null;
    }

    return (
        <div className="timer-container">
            {/* Close Button */}
            <div className="close-btn" onClick={handleClose}>
                &times;
            </div>

            <h2 className="timer-heading">EVENT COUNTDOWN</h2>
            <div className="timer-grid">
                <div className="timer-item">
                    <span className="timer-value orbitron-font">{timeLeft.days}</span>
                    <span className="timer-label">Days</span>
                </div>
                <div className="timer-item">
                    <span className="timer-value orbitron-font">{timeLeft.hours}</span>
                    <span className="timer-label">Hours</span>
                </div>
                <div className="timer-item">
                    <span className="timer-value orbitron-font">{timeLeft.minutes}</span>
                    <span className="timer-label">Minutes</span>
                </div>
                <div className="timer-item">
                    <span className="timer-value orbitron-font">{timeLeft.seconds}</span>
                    <span className="timer-label">Seconds</span>
                </div>
            </div>
        </div>
    );
}
