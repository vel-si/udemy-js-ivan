"use strict";
let start = document.getElementById('start'),
    budget = document.querySelector('.budget-value'),
    daybudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalexpenses = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthsavings = document.querySelector('.monthsavings-value'),
    yearsavings = document.querySelector('.yearsavings-value'),
    expensesInput = document.querySelectorAll('.expenses-item'),
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

function start() {
    money = +prompt('ваш бюджет на месяц');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('ваш бюджет на месяц');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце'),
                b = +prompt('Во сколько обойдется?');
            
            if (typeof(a) === 'string'  && typeof(a) != 'null' && typeof(b) != 'null'
                    && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                alert('errr');
            }
        }
    },
    detectDayBudget: function() {
        appData.dayMoney = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет' + appData.dayMoney);
    },
    detectLevel: function() {
        if (appData.dayMoney < 100) {
            console.log('лох');
        } else if (appData.dayMoney > 100 && appData.dayMoney < 1000) {
            console.log('норм');
        } else if (appData.dayMoney > 2000) {
            console.log ('жыр');
        } else {
            console.log ('errr');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений'),
                percent = +prompt('под какой процент');
            
            appData.monthIncome = save / 100 / 12 * percent;    
            alert('Доход с депозита ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt('Статья необязательных расходов? '+ i);
            appData.optionalExpenses[i] = a;
        }
    },
    chooseIncome: function() {
        let items = prompt('Доп доход? через запятую');
        if (typeof(items) == 'string' || items == '' || typeof(items) != 'null') {
            appData.income = items.split(', ');
        appData.income.push(prompt('а что еще?'));
        appData.income.sort();
        } else {
            console.log ('errr');
        }
        appData.income.forEach(function(item, i) {
            alert('Способы доп заработка:' + (i+1) + ': ' + item);
        });
    },
    showData: function() {
        console.log('Наша программа включает в себя данные:');
        for (let key in appData) {
            console.log(key + ": " + appData[key]);
        }
    }
};


appData.chooseIncome();
appData.showData();

// chooseExpenses();
// detectDayBudget();
// detectLevel();
// chooseOptExpenses();
// checkSavings();


    console.log(expensesInput);