import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem"
import { AppContext } from "../context/AppContext";

// 在这里，你将创建一个列表，使用map函数迭代费用，并显式ExpenseItem组件

const ExpenseList = () => {
    const {expenses} = useContext(AppContext)

    return (
        <table className="table">
            <thead className="thear-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </tbody>
        </table>
    );
}

export default ExpenseList