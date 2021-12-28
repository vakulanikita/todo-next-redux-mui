import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "../store/customerReducer";
import { fetchCustomers } from '../asyncActions/customers'

export default function Bank() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div>
      <span>Баланс: {cash}</span>
      <div>
        <button onClick={() => addCash(Number(prompt("сколько", 0)))}>Добавить бабла</button>
      </div>
      <div>
        <button onClick={() => getCash(Number(prompt("сколько", 0)))}>Снять бабла</button>
      </div>
      <div>
        <button onClick={() => addCustomer(prompt("Как звать?", 'Иван'))}>Добавить клиента</button>
      </div>
      <div>
        <button onClick={() => dispatch(fetchCustomers())}>Добавить всех клиентов</button>
      </div>
      {customers.length > 0 ?
      <div style={{display: 'inline-block', cursor:'pointer'}}>
        {customers.map(customers => 
          <div onClick={() => removeCustomer(customers)} style={{border:"1px solid black", padding:"10px 20px", marginBottom: '10px'}}>{customers.name}</div>
        )}
      </div>
      :
      <div>Клиентов нет!</div>}
    </div>
  )
}