import React from "react";
// import Menu from "../../containers/Menu";
// import ServiceCard from "../../components/ServiceCard";
// import EventCard from "../../components/EventCard";
// import PeopleCard from "../../components/PeopleCard";

// import "./style.scss";
// import EventList from "../../containers/Events";
// import Slider from "../../containers/Slider";
// import Logo from "../../components/Logo";
// import Icon from "../../components/Icon";
// import Form from "../../containers/Form";
import Form from "../containers/Form";
// import Modal from "../../containers/Modal";
import Modal from "../containers/Modal";
// import { useData } from "../../contexts/DataContext";


function Contact(){
    return(
        <div className="FormContainer" id="contact">
        <h2 className="Title">Contact</h2>
        <Modal
          Content={
            <div className="ModalMessage--success">
              <div>Message envoyé !</div>
              <p>
                Merci pour votre message nous tâcherons de vous répondre dans
                les plus brefs délais
              </p>
            </div>
          }
        >
          {({ setIsOpened }) => (
            <Form
              onSuccess={() => setIsOpened(true)}
              onError={() => null}
            />
          )}
        </Modal>
      </div>
    )
}
export default Contact