import Countdown from "react-countdown";
import { useState } from "react";
import "../Components/styles/Timer.css"; // Import external styles

export default function Timer() {
    const [isVisible, setIsVisible] = useState(true);

    const eventDate = new Date("2025-02-28T00:00:00").getTime();

    // Renderer function for Countdown component
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span className="timer-heading">Event Started!</span>;
        } else {
            return (
                <div className="timer-grid">
                    <div className="timer-item">
                        <span className="timer-value orbitron-font">{days}</span>
                        <span className="timer-label">Days</span>
                    </div>
                    <div className="timer-item">
                        <span className="timer-value orbitron-font">{hours}</span>
                        <span className="timer-label">Hours</span>
                    </div>
                    <div className="timer-item">
                        <span className="timer-value orbitron-font">{minutes}</span>
                        <span className="timer-label">Minutes</span>
                    </div>
                    <div className="timer-item">
                        <span className="timer-value orbitron-font">{seconds}</span>
                        <span className="timer-label">Seconds</span>
                    </div>
                </div>
            );
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="timer-container">
            <div className="close-btn" onClick={() => setIsVisible(false)}>&times;</div>
            <h2 className="timer-heading">EVENT COUNTDOWN</h2>
            <Countdown date={eventDate} renderer={renderer} />
        </div>
    );
}
