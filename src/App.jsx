import "./App.css";

export default function App() {
  return (
    <div className="store-room">
      <CashBoxContainer>
        <CashBox />
        <CashBox />
        <CashBox />
      </CashBoxContainer>

      <CashBoxContainer>
        <CashBox />
        <CashBox />
        <CashBox />
      </CashBoxContainer>

      <CashBoxContainer>
        <CashBox />
        <CashBox />
        <CashBox />
      </CashBoxContainer>

      <CashBoxContainer>
        <CashBox />
        <CashBox />
        <CashBox />
      </CashBoxContainer>
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
