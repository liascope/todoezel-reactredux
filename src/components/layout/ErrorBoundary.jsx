import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary:", error, info);
  }

  render() {
    const { children, fallback } = this.props;

    if (this.state.hasError) {
      return fallback ?? (
        <div className="w-full text-center py-10 text-red-400">
          Something went wrong 😕
        </div>
      );
    }

    return children;
  }
}
