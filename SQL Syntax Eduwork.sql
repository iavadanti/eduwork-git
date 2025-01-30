USE db_eduwork;
CREATE TABLE users(
user_id int PRIMARY KEY,
user_name varchar(50),
email varchar(50),
phone_number varchar(50),
gender varchar(50),
address varchar(50)
);
INSERT INTO db_eduwork.users VALUES 
(1, "Endah Nuraini", "endah@januar.my.id", "082075241112", "F", "Jakarta Timur"),
(2, "Labuh Kuswoyo", "kuswoyo@prabowo.my.id", "082187495779", "M", "Sukabumi"),
(3, "Elisa Mardhiyah", "mardhiyah1111@yahoo.co.id", "0848540780823", "F", "Gorontalo"),
(4, "Arianto Pranowo", "kunthara@gmail.co.id", "089008689363", "M", "Serang"),
(5, "Nrima Budiman", "vicky16@yahoo.com", "083827023995", "M", "Tangerang"),
(6, "Najwa Wulandari", "wulan@najwa.biz.id", "02612731531", "F", "Sungai Penuh"),
(7, "Oktaviani Luhur", "lurhur13@oktaviani.net", "085907168956", "F", "Jambi"),
(8, "Suwarno Bahuwirya", "bahuwirya.suwarno@sch.id", "086258070089", "M", "Sabang"),
(9, "Zahra Hartati", "zhartati@gmail.co.id", "082351058856", "F", "Bekasi"),
(10, "Cinthia Saefullah", "cinthia.saefullah@yahoo.co.id", "082584820830", "F", "Blitar"),
(11, "Rachel Aryani", "aryani.rachel@edu.ac.id", "082600405033", "F", "Depok"),
(12, "Dian Agustina", "dian1999@yahoo.com", "089957351753", "F", "Banjar"),
(13, "Vino Maulana", "maul3434@gmail.com", "085066490574", "M", "Pontianak"),
(14, "Kasiran Simbolon", "simbolon.cakrabuana@yahoo.co.id", "086347747439", "M", "Ambon"),
(15, "Galang Hidayanto", "galang123@yahoo.co.id", "082733711116", "M", "Bima"),
(16, "Irsad Pangestu", "irshad.p@sch.id", "099176864774", "M", "Padang Panjang"),
(17, "Zizi Laksmiwati", "lakss23@gmail.com", "083017068631", "F", "Jakarta Utara"),
(18, "Heryanto Nashiruddin", "heryanto.nash@brn.tv", "083100772314", "M", "Tangerang Selatan"),
(19, "Indah Yuliarti", "yuliarti.indah@mil.id", "081249132447", "F", "Depok"),
(20, "Adi Saputra", "adiii@yahoo.co.id", "086647173080", "M", "Tebing Tinggi"),
(21, "Tiara Hardiansyah", "hardiansyah.tiara@gmail.co.id", "088427003045", "F", "Bekasi"),
(22, "Damar Putri", "damar@geo.sch.ac.id", "086776409461", "F", "Salatiga"),
(23, "Nilam Kusmawati", "nilamm@yahoo.com", "083826439081", "F", "Magelang"),
(24, "Maria Utami", "utami@ph.ac.id", "083746035215", "F", "Depok"),
(25, "Kristian Ginting", "kris89@gmail.com", "085262353410", "M", "Medan"),
(26, "Febi Widiastuti", "febi.widi@gmail.com", "084553995748", "F", "Bogor"),
(27, "Karja Waluyo", "karja64@yahoo.co.id", "089240763517", "M", "Bogor"),
(28, "Raka Maheswara", "rakamahes@sch.ac.id", "087124962210", "M", "Magelang"),
(29, "Adrian Zulkarnain", "adrr3@gmail.com", "0813473196", "M", "Tangerang"),
(30, "Melinda Hasanah", "melinda1405@gmail.com", "084441138413", "F", "Jakarta Barat");

SELECT user_name AS name, phone_number, u.address FROM db_eduwork.users AS u



