"use strict";

let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpenses = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthsavings = document.querySelector('.monthsavings-value'),
    yearsavings = document.querySelector('.yearsavings-value'),
    expensesInput = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.querySelector('.expenses-item-btn'),
    optExpBtn = document.querySelector('.optionalexpenses-btn'),
    countBtn = document.querySelector('.count-budget-btn'),
    optExpensesInput = document.querySelectorAll('.optionalexpenses-item'),
    incomeInput = document.querySelector('.choose-income'),
    chkBox = document.getElementById('savings'),
    savingsSum = document.getElementById('sum'),
    savingsPercent = document.getElementById('percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    
let money, time;

startBtn.addEventListener('click', function() {    
    time = prompt('Введите дату в формате YYYY-MM-DD');
    money = +prompt('ваш бюджет на месяц');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('ваш бюджет на месяц');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesInput.length; i++) {
        let a = expensesInput[i].value,
            b = expensesInput[++i].value;
        
        if (typeof(a) === 'string'  && typeof(a) != 'null' && typeof(b) != 'null'
                && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            alert('errr');
        }
    }
    expensesValue.textContent = sum;
    appData.expSum = sum;
});

optExpBtn.addEventListener('click', function() {
    for (let i = 0; i < optExpensesInput.length; i++) {
        let a = optExpensesInput[i].value;
        appData.optionalExpenses[i] = a;
        optionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {

        appData.dayMoney = ((appData.budget - appData.expSum) / 30).toFixed();
        dayBudget.textContent = appData.dayMoney;

        if (appData.dayMoney < 100) {
            level.textContent = 'лох';
        } else if (appData.dayMoney >= 100 && appData.dayMoney < 2000) {
            level.textContent = 'норм';
        } else if (appData.dayMoney >= 2000) {
            level.textContent = 'жыр';
        } else {
            level.textContent = 'errr';
        }
    } else {
        dayBudget.textContent = 'errr';
    }
});

incomeInput.addEventListener('input', function() {
    let items = incomeInput.value;
    if (typeof(items) == 'string' || items == '' || typeof(items) != 'null') {
        appData.income = items.split(', ');
    }
    income.textContent = appData.income;
});

chkBox.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }    
});

savingsSum.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +savingsSum.value,
            percent = +savingsPercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent; 

        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});

savingsPercent.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +savingsSum.value,
            percent = +savingsPercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent; 

        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};


