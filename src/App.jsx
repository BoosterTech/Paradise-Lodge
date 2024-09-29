import GlobalStyles from "./styles/GlobalStyles";
import { Button } from "./ui/Button";
import Input from "./ui/Input";
import Row from "./ui/Row";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Row type="horizontal">
          <h1>The Paradise Lodge</h1>
          <div>
            <h2>Check in and out</h2>
            <Button onClick={() => alert("Check in")}>Check in</Button>
            <Button
              variation="secondary"
              size="small"
              onClick={() => alert("Check out")}
            >
              Check out
            </Button>
          </div>
        </Row>
        <Row>
          <h2>Form</h2>
          <form>
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="Number of guests" />
          </form>
        </Row>
      </div>
    </>
  );
}

export default App;
