import { useReducer } from "react"
import "./styles.css"

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

function App() {
  

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">

        </div>
        <div className="current-operand">

        </div>
      </div>
      
    </div>
  )
}

export default App
