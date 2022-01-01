import { useReducer } from "react"
import "./styles.css"

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}
function reducer(state, { type, payload })
{
  return
  {}
}
function App() {
  const [{currentOperand,previousOperand,operation},dispatch] = useReducer(reducer,{})  

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">

        </div>
        <div className="current-operand">

        </div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button className="span-two">=</button>
    </div>
  )
}

export default App
