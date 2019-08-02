"use strict";

let money = prompt('ваш бюджет на месяц');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let expOne = prompt('Введите обязательную статью расходов в этом месяце');
let expTwo = +prompt('Во сколько обойдется?');
let expOne1 = prompt('Введите обязательную статью расходов в этом месяце');
let expTwo1 = +prompt('Во сколько обойдется?');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expOne: expTwo,
        expOne1: expTwo1
        },
    optionalExpenses: "",
    income: [],
    savings: false
};


alert('Расходы в день' + ((appData.budget - (appData.expenses.expOne + appData.expenses.expOne1)) / 30));
