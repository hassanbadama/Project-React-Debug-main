import React from "react";
import EventList from "../containers/Events";



function NosRealisateur(){
    return(
        <section className="EventsContainer">
        <h2 className="Title">Nos réalisations</h2>
        <EventList />
      </section>
    )
}
export default NosRealisateur