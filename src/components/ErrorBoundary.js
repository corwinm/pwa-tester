import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "", name: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.message, name: error.name };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>{this.state.name}</p>
          <p>{this.state.message}</p>
          <p>
            <button className="button" onClick={() => window.location.reload()}>Reload Page</button>
          </p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
