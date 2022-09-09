import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  //   static getDerivedStateFromProps(props, state) {
  //     const { pathname } = props.location
  //     if (pathname !== state.pathname) {
  //       // try to clear error when location changed
  //       return {
  //         hasError: false,
  //         pathname,
  //       }
  //     }
  //     return { pathname }
  //   }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // const newState = Object.assign({}, this.state)
    const newState = {
      ...this.state,
    };
    newState.message = error.message;
    this.setState(newState);
    console.log("state after error--->", this.state);
  }

  render() {
    console.log("propssssss-> ", this.props);
    console.log("state before error--->", this.state);

    if (this.state.hasError) {
      return (
        <div
          style={{
            textAlign: "center",
            padding: "24px",
            backgroundColor: "red",
          }}
        >
          <p> Something went wrong</p>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  msg: PropTypes.string,
  goBack: PropTypes.string,
};

ErrorBoundary.defaultProps = {
  msg: "Oh no! Something went wrong",
  goBack: "Go Back",
};

export default ErrorBoundary;
