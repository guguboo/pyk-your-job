<!-- Logo -->

<br />
<div align="center">
  <a href="https://github.com/guguboo/pyk-your-job">
    <img src="src\dummy_project_frontend\public\img\readme\PYK Logo.png">
  </a>
  <h3 align="center">PYK - Freelance ICP Powered App</h3>
  <p align="center">
    PYK adalah platform freelance yang didukung oleh blockchain ICP, menghubungkan klien dengan para profesional berbakat. Platform ini menawarkan transaksi yang aman, cepat, dan bebas komisi, menjadikan pekerjaan freelance lebih mudah dan transparan.
    <br/>
    <br/>
    <a href="#">View Demo</a>
  </p>
</div>

<!-- Key Features -->
## Mengapa anda harus memilih PYK?

### 1. Profil Terdesentralisasi
Dengan PYK, Anda memiliki kendali penuh atas data dan reputasi Anda yang tersimpan di blockchain. Tidak seperti platform tradisional, di mana data pengguna dapat dimanipulasi atau dihapus, PYK memastikan bahwa informasi Anda aman dan transparan. Anda dapat membangun portofolio yang mencerminkan keterampilan dan pengalaman Anda, serta mendapatkan kepercayaan dari klien dengan transparansi yang tinggi.

### 2. Smart Contract Escrow
Keamanan adalah prioritas utama kami. PYK menggunakan escrow berbasis kontrak pintar untuk memastikan bahwa pembayaran dilakukan dengan aman. Uang klien akan disimpan dalam escrow hingga pekerjaan selesai dan disetujui, memberikan perlindungan bagi kedua belah pihak. Dengan sistem ini, Anda tidak perlu khawatir tentang penipuan atau pembayaran yang tidak aman.

### 3. Low Commission Fee
Kami memahami pentingnya efisiensi biaya dalam freelancing. Oleh karena itu, PYK hanya mengenakan biaya komisi sebesar 5%, jauh lebih rendah dibandingkan dengan situs freelance tradisional yang biasanya mengenakan biaya jauh lebih tinggi. Dengan biaya yang lebih rendah, Anda dapat menjaga lebih banyak pendapatan dari setiap proyek yang Anda kerjakan, memungkinkan Anda untuk tumbuh dan sukses lebih cepat.

### 3. ICP Integration
PYK terintegrasi dengan blockchain ICP untuk memberikan pengalaman transaksi yang mulus dan cepat. Pengguna dapat melakukan transaksi menggunakan Token ICP dengan mudah, tanpa khawatir tentang biaya tambahan atau proses yang rumit. Integrasi ini tidak hanya mempercepat transaksi, tetapi juga memastikan bahwa semua pembayaran dilakukan dengan aman dan transparan.









## Authors

- [William Arthur Sandy K](https://github.com/Toxinityy)
- [Vico Prat](https://github.com/guguboo)
- [Andreas Ronaldi](https://github.com/Syhire)


## Fitur

### 1. Autentikasi Login dengan Internet Identity
Fitur ini memungkinkan pengguna untuk masuk ke platform secara aman menggunakan identitas digital mereka melalui Internet Identity. Dengan autentikasi berbasis blockchain ini, data pribadi Anda tetap aman dan proses login menjadi lebih cepat dan mudah.

### 2. Penemuan Pekerjaan
Pengguna dapat dengan mudah menemukan berbagai pekerjaan yang tersedia di platform. Fitur ini menyediakan filter pencarian dan kategori untuk membantu menemukan pekerjaan yang sesuai dengan keterampilan dan minat pengguna.

### 3. Pembuatan Pekerjaan
Klien dapat membuat dan memposting pekerjaan baru dengan mudah. Dengan fitur ini, Anda dapat memberikan detail pekerjaan, persyaratan, dan menawarkan upah yang sesuai bagi para profesional yang tertarik untuk melamar.

### 4. Penampil Proposal yang Diajukan
Fitur ini memungkinkan klien untuk melihat proposal yang diajukan oleh para freelancer yang tertarik dengan pekerjaan mereka. Klien dapat dengan mudah memeriksa, membandingkan, dan memilih proposal terbaik yang sesuai dengan kebutuhan proyek.

### 5. Daftar Pekerjaan yang Dibuat
Pengguna dapat melihat daftar semua pekerjaan yang telah mereka buat di platform. Fitur ini memudahkan klien untuk mengelola, memantau, dan memperbarui pekerjaan mereka kapan saja.
## Prerequisites

Pastikan anda memiliki framework / library berikut :

- [DFX](https://internetcomputer.org/docs/current/developer-docs/build/install) (DFINITY SDK)
- [Node.js](https://nodejs.org/) (versi >= 16.0.0) and npm (versi >= 7.0.0)

## Getting Started

Clone repository github memakai Github Desktop atau memakai command berikut :
   ```bash
   git clone https://github.com/your-username/pyk.git
   cd pyk
   ```

Jika ingin mendapat bantuan lebih lanjut, maka dapat menggunakan :
   ```bash
   dfx help
   dfx canister --help
   ```

Install seluruh library yang digunakan :
  ```bash
   npm i
   cd src
   cd dummy_project_frontend
   npm i
   ```
## Running Project Secara Local
Untuk menjalankan project secara Local, maka dapat melakukan beberapa tahap berikut : 
```bash
dfx start --background
dfx deps pull
dfx deps init
dfx deps deploy
dfx deploy
```
## Hal yang Dipelajari

Selama membangun proyek ini, kami belajar banyak hal, antara lain:

- **Integrasi Teknologi Blockchain**: Kami memahami cara mengintegrasikan teknologi blockchain, khususnya Internet Computer (ICP), untuk menciptakan platform freelance yang terdesentralisasi.

- **Autentikasi Berbasis Internet Identity**: Kami belajar tentang penerapan autentikasi berbasis Internet Identity dan bagaimana cara menjaga keamanan data pengguna.

- **Penggunaan Smart Contract**: Kami menghadapi tantangan dalam memahami cara kerja smart contract, terutama dalam mengintegrasikannya dengan fitur escrow dan transaksi bebas komisi.

- **Pencarian Solusi**: Kami mengatasi tantangan tersebut dengan membaca dokumentasi, mengikuti tutorial, dan berdiskusi dengan komunitas pengembang ICP. 

- **Pembelajaran Berulang**: Kesabaran dan pendekatan pembelajaran berulang sangat membantu kami dalam menyelesaikan masalah teknis yang kami hadapi, hingga akhirnya berhasil menyelesaikan proyek ini.



## Optimizations

Kami sadar bahwa proyek yang akan kami lakukan tentunya belum sempurna. Oleh karena itu, kami ingin berinovasi dalam beberapa aspek untuk meningkatkan kualitas dan pengalaman pengguna. Beberapa fokus optimasi kami meliputi:

### 1. Peningkatan Kinerja  
   Kami berkomitmen untuk meningkatkan kecepatan dan responsivitas platform agar pengguna dapat berinteraksi dengan lebih lancar.

### 2. Keamanan yang Ditingkatkan 
   Kami akan terus memperkuat sistem keamanan untuk melindungi data pengguna dan transaksi. Ini termasuk audit rutin terhadap kontrak pintar dan penerapan praktik keamanan terbaik.

### 3. User Experience (UX) yang Lebih Baik  
   Kami berencana untuk melakukan riset pengguna dan pengujian untuk memahami kebutuhan pengguna dan meningkatkan antarmuka pengguna agar lebih intuitif dan ramah.

### 4. Integrasi Fitur Baru 
   Kami akan terus menambahkan fitur baru (termasuk fitur yang belum sempat dibuat) yang relevan berdasarkan umpan balik pengguna untuk memenuhi kebutuhan pasar yang terus berkembang.



## Roadmap

Kami memiliki rencana yang jelas untuk pengembangan PYK ke depan. Berikut adalah langkah-langkah yang akan kami ambil :

### Fase 1: Desain Responsif
- Mengembangkan antarmuka pengguna yang responsif untuk memastikan pengalaman yang optimal di berbagai perangkat, termasuk desktop, tablet, dan ponsel.

### Fase 2: Fitur CRUD
- Membangun fitur CRUD (Create, Read, Update, Delete) untuk memudahkan pengguna dalam mengelola profil mereka, termasuk membuat dan mengedit proyek serta mengelola tawaran.

### Fase 3: Integrasi Escrow dan Pembayaran
- Menambahkan fitur escrow untuk keamanan transaksi antara klien dan freelancer, serta mengimplementasikan sistem pembayaran yang efisien menggunakan kontrak pintar untuk memastikan semua transaksi dilakukan dengan aman dan transparan.

### Fase 4: Peningkatan Keamanan
- Menerapkan langkah-langkah keamanan tambahan seperti autentikasi dua faktor (2FA) dan enkripsi data untuk melindungi informasi pengguna dan transaksi.

### Fase 5: Fitur Penilaian dan Ulasan
- Mengembangkan sistem penilaian dan ulasan untuk membangun reputasi freelancer dan membantu klien dalam memilih penyedia layanan terbaik.

### Fase 6: Integrasi API
- Membangun dan mengintegrasikan API lanjutan dalam membangun layanan tambahan pada platform PYK.


## Screenshot Fitur Website

#### Get all items

| Landing Page | Dashboard     |
| :-------- | :------- |
| ![Image 1](src/dummy_project_frontend/public/img/readme/image1.png) | ![Image 2](src/dummy_project_frontend/public/img/readme/image2.png) |

| Discover Jobs | Create a Jobs     |
| :-------- | :------- |
| ![Image 3](src/dummy_project_frontend/public/img/readme/image3.png) | ![Image 4](src/dummy_project_frontend/public/img/readme/image4.png) |

| My Proposal | See Active Jobs     |
| :-------- | :------- |
| ![Image 5](src/dummy_project_frontend/public/img/readme/image5.png) | ![Image 6](src/dummy_project_frontend/public/img/readme/image6.png) |


## Referensi

 - [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual)

