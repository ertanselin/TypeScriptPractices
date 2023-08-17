// Burada direkt let message olarak any type'ında bir değişken oluşturduk.

let message;

message = "Hello World";

// Bu nedenle message. dediğimizde IntelliSense çalışmaz. 
// let count = message.lenght;// 

// Aşağıdaki şekilde type ataması yapabiliriz. 
let count = (<string>message).length;

// Alternatif olarak aşağıdaki yöntemi de kullanabilirz;
let lenght = (message as string).length