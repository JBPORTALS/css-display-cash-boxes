import "./App.css";

export default function App() {
  return (
    <div>
      <CashBox />
      <CashBox />
      <CashBox />
      <CashBox />
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
