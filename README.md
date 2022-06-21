# Project Title
digital-clock

## Project Link
https://reckocak.github.io/Digital-Clock-js/

## Description
Yeni bir Date nesnesi oluşturulur. Daha sonra getHours(), getMinutes() ve getSeconds() yöntemleri, h, m ve s değişkenlerine atanarak geçerli saatleri, dakikaları ve saniyeleri belirler. Değişkenlerle önde gelen sıfır sorununu cözmek icin leadingZero() parametresi ile fonksiyon olusturulur. bu fonksiyon sayinin 10'dan az olup olmadığını kontrol eder. Bu koşul doğruysa, saatin önüne 0 gelir. dogru degilse sadece o andaki sayi gelir. Bu şekilde elde edilen değerler bir dize halinde birleştirilir ve innerHTML ile id clock'a sahip öğeye yazılır. 500 milisaniyeden, yani yarım saniyeden sonra, setTimeout yöntemi clock() işlevini tekrar çağırır, bu da şimdiki zamanı güncelleştirir ve ardından sonsuz bir döngüde kendini tekrar tekrsr çağırır.

## Project Skeleton

```

|----Digital-Clock(folder)
        |----readme.md
        |----index.html
        |----style.css
        |----app.js
```     

![clock](./Ekran%20Resmi%202022-06-21%2015.19.08.png)

