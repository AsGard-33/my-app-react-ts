import { Link } from "react-router-dom";

import {
  ClientContainer,
  SectionName,
  ClientNavigation,
  ClientList,
  ClientName,
} from "./styles";

function Clients() {
  return (
    <ClientContainer>
      <SectionName>Clients</SectionName>
      <ClientNavigation>
        <ClientList>
          <ClientName>
            <Link to="/clients/facebook">Facebook</Link>
          </ClientName>
          <ClientName>
            <Link to="/clients/ibm">IBM</Link>
          </ClientName>
          <ClientName>
            <Link to="/clients/porsche">Porsche</Link>
          </ClientName>
        </ClientList>
      </ClientNavigation>
    </ClientContainer>
  );
}

export default Clients;
