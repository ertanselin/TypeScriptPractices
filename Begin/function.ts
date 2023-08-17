// Aşağıdaki örnekte basit bir toplama işlemi yapılıyor.

function getAverage1(a: number, b: number, c: number): string {
  const result = (a + b + c) / 3;
  return "result : " + result;
}

getAverage1(10, 20, 30);

// Soru işareti ile c'nın olup olmama durumunda hata vermemesini sağlarız.
// C değişkeninin olup olmama durumuna göre revize edilen kodlar;

function getAverage2(a: number, b: number, c?: number): string {
  let total = a + b;
  let count = 2;

  if (typeof c !== "undefined") {
    total += c;
    count++;
  }

  const result = total / count;

  return "result : " + result;
}

getAverage2(10, 20, 30);

// Değişken sayısına bağımlı kalmamak için fonksiyonu aşağıdaki gibi değişitrebiliriz;

const getAverage3 = (...a: number[]): string => {
    let total = 0;
    let count = 0;
  
    for (let i=0; i<a.length; i++) {
        total += a[i];
        count++;
    }

    const result = total / count;
    return "result : " + result;
  }
  
  getAverage3(10, 20, 30, 40, 50);