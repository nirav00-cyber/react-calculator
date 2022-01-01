import { ACTIONS } from './App';


function OperationButton({ dispatch, operation }) 
{
  return (
    <butotn
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
      {operation}
    </butotn>
  )  
}

export default OperationButton;