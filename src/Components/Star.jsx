import { useEffect } from "react";
import "./style.css" // Make sure to include appropriate styling
import { Rive } from "@rive-app/canvas";


export default function Star() {
    useEffect(() => {
       const s = new Rive({
        src:'/onlystars.riv',
        canvas:document.getElementById("starComponent"),
        autoplay:true,
        stateMachines:"State Machine 1",
        onLoad: function () {
            s.resizeDrawingSurfaceToCanvas();
        },
       })
    }, []);

    return (
        <>
        <div className="star">
            <canvas id="starComponent"></canvas>
        </div>
        </>
    );
}
