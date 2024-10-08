import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators } from './state/index'

export default function Shop() {
  const amount = useSelector(state=> state.amount);
  const dispatch = useDispatch();
  const {withdrawMoney , depositMoney } = bindActionCreators(actionCreators , dispatch)
  return (
    <div>
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
      Update Balance {amount}
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}
