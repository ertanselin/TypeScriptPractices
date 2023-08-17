var a = 5;
var b = "a";
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, "a", true];
var h = ["a", 5, false]; // tuple
var creditPayment = 0;
var transferPayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["credit"] = 0] = "credit";
    Payment[Payment["transfer"] = 1] = "transfer";
    Payment[Payment["payatthedoor"] = 2] = "payatthedoor";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var credit = Payment.credit; // 0
var transfer = Payment.transfer; // 1
var payatthedoor = Payment.payatthedoor; // 2
var eft = Payment.eft; // 3
