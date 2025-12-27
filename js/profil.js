/* =========================
   DATA 34 SISWA
   ========================= */
const dataSiswa = [
  { id:1, nama:"Aditya Saputra", jk:"Laki-laki", status:"Pelajar" },
  { id:2, nama:"Adzhan Abizar Arya Rangga", jk:"Laki-laki", status:"Pelajar" },
  { id:3, nama:"Alfian Khoer Ramadan", jk:"Laki-laki", status:"Pelajar" },
  { id:4, nama:"Al Fira Az Zahwa", jk:"Perempuan", status:"Pelajar" },
  { id:5, nama:"Anita Rohmah", jk:"Perempuan", status:"Pelajar" },
  { id:6, nama:"Ayesha Aghitstya Alema", jk:"Perempuan", status:"Pelajar" },
  { id:7, nama:"Ayu Anastasya", jk:"Perempuan", status:"Pelajar" },
  { id:8, nama:"Bunga Citra Lestari", jk:"Perempuan", status:"Pelajar" },
  { id:9, nama:"Citra Airin Listiani", jk:"Perempuan", status:"Pelajar" },
  { id:10, nama:"Dewi Nayla Anastasya", jk:"Perempuan", status:"Pelajar" },
  { id:11, nama:"Fajar Almahri", jk:"Laki-laki", status:"Pelajar" },
  { id:12, nama:"Fiqri Ramadhan", jk:"Laki-laki", status:"Pelajar" },
  { id:13, nama:"Harpa Sanda Upa Paguling", jk:"Laki-laki", status:"Pelajar" },
  { id:14, nama:"Heni Mulyani", jk:"Perempuan", status:"Pelajar" },
  { id:15, nama:"Hera", jk:"Perempuan", status:"Pelajar" },
  { id:16, nama:"Jihan Febrianti", jk:"Perempuan", status:"Pelajar" },
  { id:17, nama:"Lulu Suraya", jk:"Perempuan", status:"Pelajar" },
  { id:18, nama:"Maulana Maliq Ibrahim", jk:"Laki-laki", status:"Pelajar" },
  { id:19, nama:"Mio Regina Aprilia Putri", jk:"Perempuan", status:"Pelajar" },
  { id:20, nama:"Muhamad Bintang Syifatul Huda", jk:"Laki-laki", status:"Pelajar" },
  { id:21, nama:"Muhamad Erlangga", jk:"Laki-laki", status:"Pelajar" },
  { id:22, nama:"Muhamad Madan", jk:"Laki-laki", status:"Pelajar" },
  { id:23, nama:"Nazwa Khoirunnizma", jk:"Perempuan", status:"Pelajar" },
  { id:24, nama:"Raditya Maulana Ibrahim", jk:"Laki-laki", status:"Pelajar" },
  { id:25, nama:"Rara Atyla Habsari", jk:"Perempuan", status:"Pelajar" },
  { id:26, nama:"Rumsih Amanda", jk:"Perempuan", status:"Pelajar" },
  { id:27, nama:"Sahrini Aprianti", jk:"Perempuan", status:"Pelajar" },
  { id:28, nama:"Shaluna Oktavia Suci", jk:"Perempuan", status:"Pelajar" },
  { id:29, nama:"Sri Rahayu (Apink)", jk:"Perempuan", status:"Pelajar" },
  { id:30, nama:"Sri Rahayu (Mano)", jk:"Perempuan", status:"Pelajar" },
  { id:31, nama:"Susi Melyani", jk:"Perempuan", status:"Pelajar" },
  { id:32, nama:"Upit Nurhidayah", jk:"Perempuan", status:"Pelajar" },
  { id:33, nama:"Vira Puspa Nirmala", jk:"Perempuan", status:"Pelajar" },
  { id:34, nama:"Yuni Aura Putri", jk:"Perempuan", status:"Pelajar" }
];

/* =========================
   AMBIL ID DARI URL
   ========================= */
const params = new URLSearchParams(window.location.search);
const idSiswa = parseInt(params.get("id"));
const siswa = dataSiswa.find(s => s.id === idSiswa);

/* =========================
   LOADING & SCAN
   ========================= */
window.addEventListener("load", () => {

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("scan").style.display = "flex";

    setTimeout(() => {
      document.getElementById("scan").style.display = "none";
      document.getElementById("profil").classList.remove("hidden");

      tampilkanProfil();
    }, 8000);

  }, 2000);
});

/* =========================
   TAMPILKAN PROFIL SISWA
   ========================= */
function tampilkanProfil(){
  if(!siswa) return;

  document.getElementById("nama").innerText = siswa.nama;
  document.getElementById("kelas").innerText = "X TKJT 1";
  document.getElementById("status").innerText = siswa.status;
  document.getElementById("jk").innerText = siswa.jk;

  const foto = document.getElementById("foto");
  foto.src = `fotoprofil/${siswa.id}.jpg`;
  foto.onerror = () => {
    foto.src = "fotoprofil/default.jpg";
  };
}

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const scan = document.getElementById("scan");
  const profil = document.getElementById("profil");

  const scanAudio = document.getElementById("scanAudio");

  // mainkan audio saat scan muncul
  scanAudio.play().catch(() => {
    console.log("Audio autoplay diblokir, klik halaman untuk memainkannya");
  });

  // tampilkan loading dulu 7 detik
  setTimeout(() => {
    loading.classList.add("hidden");
    scan.classList.remove("hidden");

    // scan berlangsung 7 detik, setelah itu berhenti audio
    setTimeout(() => {
      scan.classList.add("hidden");
      profil.classList.remove("hidden");

      // hentikan audio scanning
      scanAudio.pause();
      scanAudio.currentTime = 0;
    }, 12000); // 7 detik scanning
  }, 5); // bisa sesuaikan delay awal jika perlu
});



