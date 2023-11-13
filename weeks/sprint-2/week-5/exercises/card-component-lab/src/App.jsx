import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
        <Card Title="Lemon" SubTitle="This is a really tasty fruit" Icon="🍋" ButtonText="ORDER NOW"  />
        <Card Title="Rocket" SubTitle="Join us into the outer space!" Icon="🚀" ButtonText="BOOK SEAT"  />
        <Card Title="Doggy" SubTitle="Hello, do you want to be friends?" Icon="🐶" ButtonText="ADOPT ME"  />
        
    </>
  );
}

export default App;
