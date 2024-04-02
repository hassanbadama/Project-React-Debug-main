import React from "react";
// import Menu from "../../containers/Menu";
// import ServiceCard from "../../components/ServiceCard";
// import EventCard from "../../components/EventCard";
import EventCard from "../components/EventCard";
// import PeopleCard from "../../components/PeopleCard";

// import "./style.scss";
import "../pages/Home/style.scss"
// import EventList from "../../containers/Events";
// import Slider from "../../containers/Slider";
import Logo from "../components/Logo";
import Icon from "../components/Icon";
// import Logo from "../../components/Logo";
// import Icon from "../../components/Icon";
// import Form from "../../containers/Form";
// import Modal from "../../containers/Modal";
// import { useData } from "../../contexts/DataContext";
import { useData } from "../contexts/DataContext";

function Footer(){
    const {last} = useData()
    return(
        <footer className="row">
        <div className="col presta">
          <h3>Notre derniére prestation</h3>
          <EventCard
            imageSrc={last?.cover}
            title={last?.title}
            date={new Date(last?.date)}
            small
            label="boom"
          />
        </div>
        <div className="col contact">
          <h3>Contactez-nous</h3>
          <address>45 avenue de la République, 75000 Paris</address>
          <div>01 23 45 67 89</div>
          <div>contact@724events.com</div>
          <div>
            <a href="#twitch">
              <Icon name="twitch" />
            </a>
            <a href="#facebook">
              <Icon name="facebook" />
            </a>
            <a href="#twitter">
              <Icon name="twitter" />
            </a>
            <a href="#youtube">
              <Icon name="youtube" />
            </a>
          </div>
        </div>
        <div className="col description">
          <Logo size="large" />
          <p>
            Une agence événementielle propose des prestations de service
            spécialisées dans la conception et l&apos;organisation de divers événements
            tels que des événements festifs, des manifestations sportives et
            culturelles, des événements professionnels
          </p>
        </div>
      </footer>
    )
}
export default Footer