import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  state = { loading: true, showModal: false };

  // constructor() {
  //   super();

  //   this.state = {
  //     loading: true,
  //   };
  // }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState({
      loading: false,
      ...json.pets[0],
    });
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  adopt = () => {
    window.location = "http://www.google.com";
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="details">
          <h2>Loading...</h2>
        </div>
      );
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>

        <ThemeContext.Consumer>
          {([theme]) => {
            return (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >{`Adopt ${name}`}</button>
            );
          }}
        </ThemeContext.Consumer>
        <p>{description}</p>
        {this.state.showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
