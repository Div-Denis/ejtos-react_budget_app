import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

// 在这里，你将添加表单标签，添加名称、成本和操作字段的标签/输入，以及添加各个部门的值

const AllocationForm = (props) => {
    const {dispatch, remaining} = useContext(AppContext)

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [action, setAction] = useState('')

    const submitEvent = () => {
        
        if(cost > remaining) {
            alert("The value connot exceed remaining funds ￡"+ remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost)
        };
        if(action === "Reduce") {
            dispatch({
                type:"RED_EXPENSE",
                payload: expense
            });
        }else {
            dispatch({
                type: "ADD_EXPENSE",
                payload: expense,
            })
        }
    }

    return(
        <div className="row">
            <div className="input-group mb-3" style={{ marginLeft:'2rem' }}>
                <div className="input-group-prepend">
                    <label className="input-group=text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                <select className="custom-select" id="inputFroupSelect01" onChange={(event) => setName(event.target.value)}>
                    <option defaultChecked>Choose...</option>
                    <option value="Marketing" name="marketing">Marketing</option>
                    <option value="Sales" name="sales">Sales</option>
                    <option value="Finance" name="finance">Finance</option>
                    <option value="HR" name="hr">HR</option>
                    <option value="IT" name="it">IT</option>
                    <option value="Admin" name="admin">Admin</option>
                </select>

                <div className="input-group-repend" style={{marginLeft: '2rem'}}>
                    <label className="input-group-text" htmlFor="inputFroupSelect02">Allocation</label>
                </div>
                <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                </select>

                <input
                   required='required'
                   type="number"
                   id="cost"
                   value={cost}
                   style={{ marginLeft:'2rem', size:10 }}
                   onChange={(event) => setCost(event.target.value)}
                ></input>

                <button className="btn btn-primary" onClick={submitEvent} style={{marginLeft:'2rem'}}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default AllocationForm