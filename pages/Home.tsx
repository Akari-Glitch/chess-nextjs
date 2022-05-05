import { HomeStyles } from "../styles/HomeStyles";
import SelectColor from "./components/chess/SelectColorPlayer";
import { ChessProvider } from "./context/ChessProvider";
function Home() {
  return (
    <ChessProvider>
      <HomeStyles>
        <SelectColor></SelectColor>
      </HomeStyles>
    </ChessProvider>
  );
}

export default Home;
