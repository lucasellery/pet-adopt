import { Component, ErrorInfo, ReactNode } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError(): { hasError: boolean; redirect: boolean } {
    return { hasError: true, redirect: false };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate(): void {
    if (this.state.hasError) {
      setTimeout(
        () =>
          this.setState({
            redirect: true,
          }),
        5000
      );
    }
  }

  render(): ReactNode {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error.
          <Link to="/"> Click here</Link> to go back to the home page or wait 5
          seconds.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
