import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="text-2xl font-bold text-[#1a1a1a] sm:text-3xl">
            Algo deu errado
          </h1>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Ocorreu um erro inesperado. Por favor, recarregue a página ou tente
            novamente mais tarde.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-full bg-[#D35400] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c23d0e]"
          >
            Recarregar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
