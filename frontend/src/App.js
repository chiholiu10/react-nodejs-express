import { ThemeProvider } from "styled-components";
import { GlobalStyleReset } from "./styles/CssReset";
import theme from "./styles/Themes";
import { AppStyle, Header } from './App.styles';
import { WebOne } from './components/WebOne/WebOne';
import { WebTwo } from './components/WebTwo/WebTwo';
import { WebThree } from './components/WebThree/WebThree';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <Header>
          <GlobalStyleReset />
          <WebOne />
          <WebTwo />
          <WebThree />
        </Header>
      </AppStyle >
    </ThemeProvider>
  );
}

export default App;
