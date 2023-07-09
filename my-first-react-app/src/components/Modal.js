import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose, isSalesModal }) {

  const inlineStyle = { border: "4px solid", borderColor: isSalesModal ? "#ff4500" : "#555", textAlign: "center" }

  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal" style={inlineStyle}>
        {/* children je ustvari - NewEventForm  */}
        {children}
        <hr />
        <i>Button is comming from modal. And Form from NewEventForm that is insert over children in App.js!!!</i>
        <br />
        <button onClick={handleClose} className={isSalesModal ? "sales-btn": "" }>Close</button>
      </div>
    </div>
  ), document.body)
}
