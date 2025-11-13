import "./App.css";

export default function App() {
  return (
    <div className="store-room">
      <Racker>
        <CashBox />
        <CashBox />
        <CashBox />
        <CashBox />
        <CashBox />
        <CashBox />
        <CashBox />
        <CashBox />
        <CashBox />
        <CashBox />
        <CashBox />
        <CashBox />
      </Racker>
    </div>
  );
}

function CashBox() {
  return (
    <div className="cash-box">
      <span>₹</span>
    </div>
  );
}

function CashBoxContainer({ children }) {
  return <div className="cash-box-container">{children}</div>;
}

function Racker({ children }) {
  return <div className="racker">{children}</div>;
}
