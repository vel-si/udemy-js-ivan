"use strict";

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
    savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

// let i = 0;
// while(i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = prompt('Во сколько обойдется?');
    
//     if (typeof(a) === 'string'  && typeof(a) != 'null'
//             && typeof(b) != 'null'
//             && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         alert('errr');
//     }
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = prompt('Во сколько обойдется?');
    
//     if (typeof(a) === 'string'  && typeof(a) != 'null'
//             && typeof(b) != 'null'
//             && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         alert('errr');
//     }
//     i++;
// } while(i < 2);

function detectDayBudget() {
    appData.dayMoney = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет' + appData.dayMoney);
}

detectDayBudget();
 
function detectLevel() {
    if (appData.dayMoney < 100) {
        console.log('лох');
    } else if (appData.dayMoney > 100 && appData.dayMoney < 1000) {
        console.log('норм');
    } else if (appData.dayMoney > 2000) {
        console.log ('жыр');
    } else {
        console.log ('errr');
    }
}
 
detectLevel();

//  switch (appData.dayMoney) {
//     case(appData.dayMoney < 100):
//         console.log('лох');
//         break;
//     case(appData.dayMoney > 100 && appData.dayMoney < 1000):
//         console.log('норм');
//         break;
//     case(appData.dayMoney > 2000):
//         console.log ('жыр');
//         break;
//     default:
//         console.log ('errr');   
//  }

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt('Статья необязательных расходов? '+ i);
        appData.optionalExpenses[i] = a;
    }
}
console.log(appData);

chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений'),
            percent = +prompt('под какой процент');
        
        appData.monthIncome = save / 100 / 12 * percent;    
        alert('Доход с депозита ' + appData.monthIncome);
    }
}

checkSavings();
