import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/FotoIgor.jpg";
import "../Styles/Components/sidebar.css";
import Curriculo from "../Img/IgorGomesCV.pdf"

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Igor Gomes" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworkContainer />
            <InformationContainer />
            <a href={Curriculo} title="Curriculo" className="btn">
                Download currículo
            </a>
        </aside>
    );
};

export default Sidebar;
