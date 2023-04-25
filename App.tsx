import { ThemeProvider } from "styled-components";
import { List } from "./src/screens/List";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <List />
    </ThemeProvider>
  );
}

