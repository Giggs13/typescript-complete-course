"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Andrej",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cookies"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
