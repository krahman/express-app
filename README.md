# How to start

## Sebelum memulai!
* Pastikan node.js telah terinstall di pc kamu
* Kalo belum terinstall [download di sini](http://nodejs.org/download/)

## Initialize node project
* jalankan di bawah ini

```
npm init
```

* Lengkapi informasi yg diminta

## Install Express.js di project directory mu
Kali ini kita akan menggunakan framework Express.js untuk membangun Node.js server application.
* jalankan di bawah ini 

```
npm install express --save
```

## Install Mongoose di project directory mu
Di session ini kita akan menggunakan mongodb sebagai databasenya
* jalankan di bawah ini 

```
npm install mongoose --save'
```

## Json data
* Buatlah json data [seperti ini](https://github.com/krahman/express-app/blob/master/data.js)
* import data tersebut ke mongodb jalankan perintah di bawah ini

```
mongoimport --db simple --collection people --jsonArray data.js
```