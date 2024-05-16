import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

/**
 * 在这里，你使用reduce函数来获取所有成本的总计，将其分配给一个变量并在JSX中显式该变量
 * 现在，每当用户添加费用时，都会导致状态更新，这将导致连接到上下文的所有组件重新渲染并使用新值更新自身
 * 
 */

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
   
    const totalExpenese = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    },0);

    const alertType = totalExpenese > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ￡{budget - totalExpenese}</span>
        </div>
    );
}

export default Remaining;