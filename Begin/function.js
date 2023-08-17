// Aşağıdaki örnekte basit bir toplama işlemi yapılıyor.
function getAverage1(a, b, c) {
    var result = (a + b + c) / 3;
    return "result : " + result;
}
getAverage1(10, 20, 30);
// Soru işareti ile c'nın olup olmama durumunda hata vermemesini sağlarız.
// C değişkeninin olup olmama durumuna göre revize edilen kodlar;
function getAverage2(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== "undefined") {
        total += c;
        count++;
    }
    var result = total / count;
    return "result : " + result;
}
getAverage2(10, 20, 30);
// Değişken sayısına bağımlı kalmamak için fonksiyonu aşağıdaki gibi değişitrebiliriz;
function getAverage3() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    return "result : " + result;
}
getAverage3(10, 20, 30, 40, 50);
