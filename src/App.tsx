import { Login } from './pages/Login';
import { GlobalStyle } from './styles/global'
import { Container } from './styles'

export function App() {
  return (
    <Container>
      <GlobalStyle />
      <Login />
    </Container>
  );
}