import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

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

  render() {
    if (this.state.loading) {
      return (
        <div className="details">
          <h2>Loading...</h2>
        </div>
      );
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <button>{`Adopt ${name}`}</button>
        <p>{description}</p>
      </div>
    );
  }
}

export default withRouter(Details);
