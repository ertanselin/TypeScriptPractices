
let a: number = 5;
let b: string = "a";
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3];
let g: any[] = [1, "a", true];
let h: [string, number, boolean] = ["a", 5, false]; // tuple


const creditPayment = 0 ;
const transferPayment = 1;
const eftPayment = 2;

enum Payment {credit=0, transfer=1, payatthedoor=2, eft=3};

let credit = Payment.credit;                // 0
let transfer = Payment.transfer;            // 1
let payatthedoor = Payment.payatthedoor;    // 2
let eft = Payment.eft;                      // 3
