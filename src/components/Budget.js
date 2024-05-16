import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'


/**
 *  下面的代码片段中，我们使用useState挂钩创建一个名为newBudget的状态变量，并使用预算的当前值对其初始化。
 *  我们还定义了一个名为handleBudgetChange的函数，当用户更改输入字段的值时，该函数会更新newBudget的值
 * 然后，我们将输入字段value属性设置为newBudget并添加一个onCHange事件监听器，当用户更改输入字段的值时，
 * 该监听器会调用handleBudgetChange。
 * 
 */
const Budget = () =>{
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: ￡{budget}</span>
            <input type='number' step="10" value={newBudget} onChange={handleBudgetChange}></input>
            <span>{newBudget}</span>
        </div>
    )
}

export default Budget
