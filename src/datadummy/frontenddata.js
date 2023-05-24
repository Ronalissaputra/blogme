import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiTailwindcss,
  SiReact,
} from "react-icons/SI";
import functionjs from "../assets/images/functionjs.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import php from "../assets/images/php.png";
export const frontends = [
  {
    id: "1",
    title: "HTML",
    deskripsi: "Belajar HTML dasar",
    paragraf1:
      "HTML, singkatan dari HyperText Markup Language, adalah bahasa markah yang digunakan untuk membuat struktur dan mengatur konten pada halaman web.HTML dikembangkan oleh Tim Berners-Lee pada tahun 1990 sebagai bagian dari proyek WorldWideWeb di CERN (Organisasi Eropa untuk Riset Nuklir). Pada saat itu, HTML digunakan untuk membangun tautan hiperteks antara dokumen-dokumen yang tersebar di internet.",
    paragraf2:
      "Pada tahun 1995, HTML versi 2.0 diterbitkan oleh Internet Engineering Task Force (IETF). Versi ini memperkenalkan elemen-elemen dasar seperti <p>, <h1>-<h6>, <a>, dan sebagainya. Ini adalah langkah pertama dalam memperkenalkan standar resmi untuk HTML.",
    paragraf3:
      "Pada tahun 2000, XHTML (eXtensible HyperText Markup Language) dirilis sebagai standar HTML yang lebih ketat dan lebih berbasis XML. Namun, pada tahun 2014, HTML5 diterima sebagai rekomendasi resmi oleh World Wide Web Consortium (W3C). HTML5 membawa sejumlah perubahan dan peningkatan, termasuk elemen-elemen baru seperti <canvas>, <video>, dan <audio>, serta kemampuan untuk menyematkan skrip JavaScript.",
    contoh: html,
    penjelasan:
      "Pada gambar diatas menunjukan sintax dasar HTML dimana ada tag <html> sebagai tag awal kemudian ada <Head> dimana head ini memuat informasi seperti <title>, <meta>, dan pengimporan file - file external yang akan digunakan dalam pengembangan nantinya. Adapun tag <body> memuat isi dari semua kontent yang ad di website nantinya.",
    logo: SiHtml5,
    color: "text-red-500",
    border: "border-red-500",
  },
  {
    id: "2",
    title: "CSS",
    deskripsi: "Belajar CSS dasar",
    paragraf1:
      "CSS, singkatan dari Cascading Style Sheets, adalah bahasa yang digunakan untuk mengatur tampilan dan gaya visual halaman web. CSS dikembangkan oleh Håkon Wium Lie dan Bert Bos pada tahun 1994. Pada saat itu, halaman web dirancang dengan menggunakan elemen HTML yang memiliki atribut presentasi seperti warna, ukuran font, dan sebagainya. Namun, pendekatan ini sulit untuk dikelola dan tidak memisahkan konten dari presentasi.Pada tahun 1996, CSS1 diperkenalkan sebagai standar resmi oleh World Wide Web Consortium (W3C). CSS1 memungkinkan pengembang web untuk memisahkan tampilan dan gaya dari struktur HTML. Ini memungkinkan pengembang untuk membuat file terpisah yang berisi aturan gaya yang dapat diterapkan ke berbagai elemen HTML.Pada tahun 1998, CSS2 dirilis dengan peningkatan signifikan. CSS2 menambahkan lebih banyak kontrol dalam hal tata letak, posisi elemen, pengaturan teks, dan kemampuan gaya lainnya. Ini memperluas kemampuan desain halaman web secara substansial.",
    paragraf2:
      "Pada tahun 1999, W3C mulai bekerja pada spesifikasi CSS3 yang lebih modular dan terpisah menjadi beberapa modul. Modul CSS3 diperkenalkan secara bertahap dan memperkenalkan fitur-fitur baru seperti efek transisi, animasi, bayangan, grid layout, dan banyak lagi.",
    paragraf3:
      "CSS terus mengalami perkembangan dan peningkatan hingga saat ini. Spesifikasi CSS Level 3 terus diperluas dan diperbarui oleh W3C. Selain itu, ada juga perkembangan seperti CSS Grid dan Flexbox yang memberikan lebih banyak fleksibilitas dalam mengatur tata letak halaman web.",
    contoh: css,
    penjelasan:
      "Pada sintax diatas, ada beberapa jenis pemanngilan class html yang nantinya akan diberi styling. ketika kita memanggil componen dengan menggnunakan class makan diawali dengan tanda titik (.), namun, jika kita memanggil dengan berdasarkan id maka diawali dengan tanda (#).",
    logo: SiCss3,
    color: "text-blue-500",
    border: "border-blue-500",
  },
  {
    id: "3",
    title: "JavaScript",
    deskripsi: "Belajar JavaScript dasar",
    paragraf1:
      "JavaScript pertama kali dikembangkan oleh Brendan Eich pada tahun 1995 saat bekerja di Netscape Communications Corporation. Awalnya, bahasa tersebut dikenal dengan nama LiveScript tetapi kemudian diubah menjadi JavaScript untuk memanfaatkan popularitas bahasa pemrograman Java yang sedang naik daun pada saat itu.",
    paragraf2:
      "Tujuan awal JavaScript adalah memberikan kemampuan interaktif pada halaman web yang sebelumnya hanya statis. Sebagai bahasa skrip yang dieksekusi di sisi klien (client-side), JavaScript memungkinkan pengembang web untuk memanipulasi elemen-elemen HTML secara dinamis, memvalidasi formulir, dan merespons tindakan pengguna secara real-time.",
    paragraf3:
      "Seiring waktu, JavaScript menjadi semakin populer dan berkembang pesat. Pada tahun 1997, JavaScript diterima sebagai standar oleh European Computer Manufacturers Association (ECMA) dan diberi nama resmi ECMAScript, mengacu pada standarisasi bahasa tersebut. Dalam beberapa dekade terakhir, JavaScript telah mengalami evolusi yang signifikan. Berbagai versi ECMAScript yang baru, seperti ECMAScript 5, ECMAScript 6 (ES6), dan seterusnya, diperkenalkan dengan peningkatan fitur dan fungsionalitas yang memperluas kemampuan bahasa.",
    paragraf4:
      "JavaScript telah melebihi batas-batas web dan digunakan secara luas di berbagai lingkungan pengembangan, termasuk pengembangan aplikasi web, pengembangan permainan, pemrograman server (Node.js), pengembangan aplikasi mobile (React Native), dan banyak lagi. Dengan ekosistem yang besar dan komunitas yang aktif, JavaScript terus menjadi salah satu bahasa pemrograman yang paling populer dan berpengaruh di dunia saat ini.",
    contoh: functionjs,
    penjelasan:
      "Pada function diatas ketika di running di dalam browser maka akan menampilakan alert Hy! Ronalis bagaimana kabarmu Siang ini?. hal ini dikarenakan funcion akan menjalankan perintah alert dengan menerima 2 parameter yaitu nama dan waktu dimana pada contoh diatas mengirim dua parameter yaitu Ronalis dan Siang.",
    logo: SiJavascript,
    color: "text-yellow-500",
    border: "border-yellow-500",
  },
  {
    id: "4",
    title: "PHP",
    deskripsi: "Belajar PHP dasar",
    paragraf1:
      "PHP, singkatan dari Hypertext Preprocessor, adalah bahasa pemrograman server-side yang digunakan untuk mengembangkan aplikasi web dinamis. PHP dikembangkan oleh Rasmus Lerdorf pada tahun 1994 sebagai seperangkat skrip Perl untuk mengelola resume pribadinya. Pada awalnya, PHP berfungsi sebagai singkatan dari Personal Home Page Tools. PHP awalnya merupakan kumpulan skrip CGI (Common Gateway Interface) yang digunakan untuk memproses formulir dan menghasilkan halaman web dinamis. Pada tahun 1995, Lerdorf merilis PHP/FI (Personal Home Page/Forms Interpreter) yang lebih kuat dan lebih fleksibel daripada versi awal. PHP/FI menjadi semakin populer karena kemampuannya dalam menghubungkan halaman web dengan database.",
    paragraf2:
      "Pada tahun 1998, PHP3 diperkenalkan dengan fitur-fitur baru yang signifikan, termasuk dukungan untuk objek dan kemampuan bahasa yang lebih kuat. Pada saat yang sama, Zend Engine, mesin inti PHP yang dibangun oleh Zeev Suraski dan Andi Gutmans, diperkenalkan untuk meningkatkan performa dan kemampuan eksekusi PHP. Pada tahun 2000, PHP4 dirilis dengan perbaikan performa dan peningkatan dalam pengelolaan objek. Pada tahun 2004, PHP5 dirilis dengan fitur-fitur seperti pendukung OOP yang lebih kuat, penyaringan data yang ditingkatkan, dan kemampuan XML yang lebih baik.",
    paragraf3:
      "Pada tahun 2015, PHP7 dirilis dengan peningkatan performa yang signifikan dibandingkan dengan versi sebelumnya. PHP7 memberikan peningkatan kecepatan eksekusi, penggunaan memori yang lebih efisien, dan fitur-fitur baru seperti operator spaceship dan tipe-skalar.",
    contoh: php,
    penjelasan:
      "Pada contoh kode di atas, kita mendefinisikan sebuah fungsi dengan nama tambah yang memiliki dua parameter yaitu $a dan $b Di dalam fungsi, kita melakukan operasi penjumlahan antara nilai $a dan $b, dan menyimpan hasilnya ke dalam variabel $jumlah. Selanjutnya, kita mengembalikan (return) nilai $jumlah. Diluar fungsi, kita memanggil fungsi tambah dengan memberikan dua argumen yaitu 5 dan 3. Hasil penjumlahan yang dikembalikan oleh fungsi disimpan dalam variabel $hasil. Terakhir, kita mencetak hasil penjumlahan menggunakan perintah echo. Hasil penjumlahan: 8",
    logo: SiPhp,
    color: "text-blue-800",
    border: "border-blue-800",
  },
  {
    id: "5",
    title: "TailwindCss",
    deskripsi: "Belajar TailwindCss dasar",
    paragraf1: "",
    paragraf2: "",
    paragraf3: "",
    contoh: "",
    penjelasan: "",
    logo: SiTailwindcss,
    color: "text-teal-800",
    border: "border-teal-800",
  },
  {
    id: "6",
    title: "React Js",
    deskripsi: "Belajar React Js dasar",
    paragraf1: "",
    paragraf2: "",
    paragraf3: "",
    contoh: "",
    penjelasan: "",
    logo: SiReact,
    color: "text-teal-300",
    border: "border-teal-300",
  },
];
