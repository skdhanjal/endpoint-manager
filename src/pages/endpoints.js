import { Component, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  CHeaderH1,
  HeaderH2,
  CardsContainer,
  ActionContainer,
  Button
} from "./styles";
import Card from "../components/card/card";
import data from "../../data/Endpoints.json";
import { AppContext } from "../appprovider";

class Endpoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoints: data.slice(0, 20),
      selectedEndpoint: null
    };
    this.onCardSelect = this.onCardSelect.bind(this);
  }

  onCardSelect(card) {
    this.setState({ selectedEndpoint: card });
  }

  performAction(type) {
    this.state.selectedEndpoint &&
      this.props.dispatch({
        type: "ADD_ACTION_LOG",
        payload: {
          type,
          device: this.state.selectedEndpoint.deviceName,
          time: new Date()
        }
      });
  }

  render() {
    return (
      <Layout>
        <CHeaderH1>Endpoints Manager</CHeaderH1>
        <Link to="/logs">Action Logs</Link>
        <HeaderH2> Available Endpoints</HeaderH2>
        <ActionContainer>
          <Button primary onClick={() => this.performAction("scan")}>
            Scan
          </Button>
          <Button onClick={() => this.performAction("terminate")}>
            Terminate
          </Button>
        </ActionContainer>
        <CardsContainer>
          {this.state.endpoints.map((ePoint) => {
            return (
              <Card
                key={ePoint.id}
                card={ePoint}
                onSelect={this.onCardSelect}
                className={`${
                  this.state.selectedEndpoint?.id === ePoint.id
                    ? "selected"
                    : ""
                }`}
              ></Card>
            );
          })}
        </CardsContainer>
      </Layout>
    );
  }
}

const EndpointsContainer = ({ children }) => {
  const { dispatch } = useContext(AppContext);
  return <Endpoints dispatch={dispatch}>{children} </Endpoints>;
};

export default EndpointsContainer;
