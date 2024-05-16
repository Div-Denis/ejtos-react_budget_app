import React, { useContext } from "react";
import {TiDelete} from 'react-icons/ti'
import { AppContext } from "../context/AppContext";

// 在这里，你正在调度一个动作，你的操作包含类型（以便减速器知道如何更新状态）和有效负载。
// 在这种情况下，你将传递此费用的ID（在渲染ExpenseList时从props获得）

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext)

    const handleDeleteExpense = () => {
       dispatch({
        type: 'DELETE_EXPENSE',
        payload: props.id,
       })
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            const:10,
        }

        dispatch({
            type:'ADD_EXPENSE',
            payload:expense
        })
    }

    return (
        <tr>
        <td>{props.id}</td>
        <td>￡{props.cost}</td>
        <td><button onClick={event => increaseAllocation(props.name)}>+</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
}

export default ExpenseItem;