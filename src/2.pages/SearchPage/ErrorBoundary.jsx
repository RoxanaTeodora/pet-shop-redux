// mostly code from reactjs.org/docs/error-boundaries.html for handle API errors with class component
import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this API listing.
          <Link to="/">Click here</Link>
          to back to the home page.
        </h2>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
