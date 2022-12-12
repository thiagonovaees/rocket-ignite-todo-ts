import { GlobalStyle } from "./global";
import { Header } from "./components/Header/Header";
import { InputTask } from "./components/InputTask/InputTask";
import { ListTask } from "./components/ListTask/ListTask";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <InputTask />
      <ListTask />
    </>
  );
}
