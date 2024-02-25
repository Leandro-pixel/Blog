import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o estado para que a próxima renderização mostre a UI de fallback.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode logar o erro para serviços de monitoramento de erros
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI de fallback aqui
      return <h1>Algo deu errado. Por favor, recarregue a página.</h1>;
    }

    // Se não houver erro, renderize os filhos normalmente.
    return this.props.children;
  }
}

export default ErrorBoundary;
