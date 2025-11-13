import "./App.css";

export default function App() {
  return (
    <div>
      <div className="cash-box">
        <span>₹</span>
      </div>

      {/** Here comes more cash boxes to be maintained */}
      <div className="cash-box">
        <span>₹</span>
      </div>
      <div className="cash-box">
        <span>₹</span>
      </div>
    </div>
  );
}
