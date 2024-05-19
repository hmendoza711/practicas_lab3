import "./App.css";
import TableComp from "./componentes/tableComp/TableComp";

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  return (
    <div>
      <TableComp netIncomes={netIncomes} />
    </div>
  );
}

export default App;