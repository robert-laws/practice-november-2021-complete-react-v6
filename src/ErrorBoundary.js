// from react docs

import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, information) {
    // log error to an error reporting service
    console.error("ErrorBoundary caught an error", error, information);
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. <Link to="/">Return to home page</Link>.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
