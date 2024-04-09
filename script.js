const names = [
  "Ni Kadek Diva Mayrika Sartana",
  "Ni Ketut Ratnamaya Sutra Kenari",
  "Adel",
  "Ni Kadek Dentisia Adianita",
  "I Gusti Ayu Thiwi Prayunita",
  "I Nengah Merta Adi Putra",
];

function generateRandomNameWithDelay() {
  document.getElementById("gen").style.display = "none";
  // Menampilkan countdown dari 10 detik
  let count = 10;
  const countdownInterval = setInterval(() => {
    document.getElementById("countdown").textContent = count;
    count--;
    if (count < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").textContent = ""; // Menghilangkan angka setelah countdown selesai

      setTimeout(generateRandomName, 1500); // Menampilkan nama setelah 1,5 detik
    }
  }, 1500); // Menjalankan setiap 1,5 detik
}

function generateRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  document.getElementById("txt1").textContent = "Selamat Kepada"; // Menampilkan teks "Selamat Kepada"
  document.getElementById("name").textContent = randomName;
  document.getElementById("txt2").textContent =
    "Mendapatkan Hadiah Yang Sangat Menarik";
  document.getElementById("txt3").textContent =
    "Seperti Gagas Pradipta Jatmiko";
}
