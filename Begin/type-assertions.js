// Burada direkt let message olarak any type'ında bir değişken oluşturduk.
var message;
message = "Hello World";
// Bu nedenle message. dediğimizde IntelliSense çalışmaz. 
// let count = message.lenght;// 
// Aşağıdaki şekilde type ataması yapabiliriz. 
var count = message.length;
// Alternatif olarak aşağıdaki yöntemi de kullanabilirz;
var lenght = message.length;
