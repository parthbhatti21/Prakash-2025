import { useNavigate } from "react-router";
import "../Components/styles/EventRandom.css";

const eventsTypes = [
  { id: 1, name: "Tech", catagory: "Tech" },
  { id: 2, name: "Non-Tech", catagory: "NonTech" },
  { id: 3, name: "Workshop", catagory: "Workshop" },
  { id: 4, name: "Open R", catagory: "OpenR" },
  { id: 5, name: "E-Sports", catagory: "ESports" },
  { id: 6, name: "View More...", catagory: "All" },
];



export default function Event_Random() {
  // randomEvents.push(viewMore);
  // console.log(randomEvents)
  const navigate = useNavigate();

  return (
    <>
      <div className="homeEventBar">
        <h1 className="events-header">EVENTS</h1>
      </div>
      <div className="card-container">
        {eventsTypes.map((eventsTypes) => (
          <div
            key={eventsTypes.id}
            className={`card c${eventsTypes.id} ${eventsTypes.name}`}
            onClick={async () => {
              await navigate("/events");
              localStorage.setItem("eventname", eventsTypes.catagory);
              console.log(localStorage.getItem("eventname"));
            }}
          >
            <h2>{eventsTypes.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
