# How to start

## Sebelum memulai!
- Pastikan node.js telah terinstall di pc kamu
- Kalo belum terinstall [download di sini](http://nodejs.org/download/)

## Initialize node project
- run 'npm init'
- Lengkapi informasi yg diminta

## Install Express.js di project directory mu
Kali ini kita akan menggunakan framework Express.js untuk membangun Node.js server application.
- run 'npm install express --save'

## Install Mongoose di project directory mu
Di session ini kita akan menggunakan mongodb sebagai databasenya
- run 'npm install mongoose --save'

## Json data
- Buatlah json data [seperti ini](https://github.com/krahman/express-app/blob/master/data.js)
- import data tersebut ke mongodb run 'mongoimport --db simple --collection people --jsonArray [nama_json_data]
