import React from 'react';
import { BudgetConsumer } from '../store';

const BalanceDisplay = () => {
    return (
        <BudgetConsumer>   
            {value => {
                 const totalExpense = value.expenses.length > 0 ? (
                    value.expenses.reduce((acc, curr) => {
                        acc += parseInt(curr.amount)
                        return acc
                    }, 0)) : 0;
                    return (
                        <div className = 'row'>
                            <div className = 'col-lg-4'>
                                <div className = 'card'>
                                    <div classname = 'card-header'>Budget</div>
                                    <div classname = 'card-body'>
                                        <h5 className = 'text-center card-title'>{value.budget}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className = 'col-lg-4'>
                                <div className = 'card'>
                                    <div classname = 'card-header'>Expenses</div>
                                    <div classname = 'card-body'>
                                        <h5 className = 'text-center card-title'>{totalExpense}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className = 'col-lg-4'>
                                <div className = 'card'>
                                    <div classname = 'card-header'>Balance</div>
                                    <div classname = 'card-body'>
                                        <h5 className = 'text-center card-title'>{value.budget - totalExpense}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }}
        </BudgetConsumer>
    )
}

export default BalanceDisplay
