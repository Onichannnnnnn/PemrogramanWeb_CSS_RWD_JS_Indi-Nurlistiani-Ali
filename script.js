// Array objek berisi data artikel pencemaran lingkungan
const artikel = [
    {
        judul: "Pencemaran Udara: Ancaman Invisible yang Mematikan",
        deskripsi: "Pencemaran udara adalah kontaminasi atmosfer oleh zat-zat berbahaya, seperti gas dan partikel padat, yang dapat membahayakan kesehatan manusia dan lingkungan. Pencemaran udara terjadi akibat masuknya zat-zat berbahaya seperti karbon monoksida, sulfur dioksida, nitrogen oksida, dan partikel debu ke atmosfer. Sumber utama pencemaran ini adalah emisi kendaraan bermotor, pabrik, dan pembakaran sampah. Udara yang tercemar dapat menyebabkan gangguan pernapasan, penyakit paru-paru, dan mempercepat terjadinya pemanasan global.",
        gambar: "assets/pencemaran udara.jpeg",
        sumber: "https://rri.co.id/kesehatan/693155/pencemaran-udara-bahaya-yang-mengintai-kesehatan",
    },
    {
        judul: "Pencemaran Air: Krisis Global yang Mengancam Kehidupan",
        deskripsi: "Pencemaran air yaitu perubahan keadaan di suatu tempat penampungan air seperti danau, sungai dan lautan disebabkan oleh masuknya limbah rumah tangga, limbah industri, pestisida, dan bahan kimia beracun ke dalam sungai, danau, dan laut. Akibatnya, ekosistem perairan rusak, sumber air menjadi tercemar, dan dapat menimbulkan berbagai penyakit pada manusia seperti diare dan keracunan.",
        gambar: "assets/pencemaran air.jpg",
        sumber: "https://bantul.bantulkab.go.id/first/artikel/353-Pencemaran-Lingkungan-Udara--Air--dan-Tanah",
    },
    {
        judul: "Pencemaran Tanah: Degradasi Lahan yang Menghancurkan Ekosistem",
        deskripsi: "Pencemaran tanah yaitu kondisi di mana tanah rusak disebabkan penumpukan sampah plastik, limbah kimia, pestisida, dan logam berat di dalam tanah. Kondisi ini menyebabkan penurunan kesuburan tanah sehingga sulit untuk bercocok tanam, serta dapat mencemari sumber air tanah yang berdampak buruk bagi kesehatan.",
        gambar: "assets/pencemaran tanah.jpeg",
        sumber: "https://www.gramedia.com/literasi/contoh-pencemaran-tanah/",
    },
    {
        judul: "Pencemaran Suara: Polusi yang Merusak Kesehatan Mental",
        deskripsi: "Pencemaran suara dalah suara berlebihan, mengganggu, atau berbahaya yang dapat memberikan dampak negatif bagi kesehatan manusia dan lingkungan berasal dari aktivitas manusia seperti lalu lintas kendaraan, mesin industri, dan konstruksi. Kebisingan yang berlebihan dapat membuat stres, gangguan tidur, dan menurunkan kualitas hidup manusia.",
        gambar: "assets/pencemaran suara.jpg",
        sumber: "https://eticon.co.id/polusi-suara/",
    },
    {
        judul: "Pencemaran Radioaktif: Bahaya yang Tak Terlihat",
        deskripsi: "Pencemaran radioaktif adalah kontaminasi lingkungan disebabkan oleh limbah radioaktif dari kegiatan nuklir dan medis yang jika tidak dikelola dengan baik dapat menyebabkan kerusakan permanen pada udara, air, tanah, dan organisme hidup, serta meningkatkan risiko kesehatan seperti kanker dan sindrom radiasi akut pada manusia.",
        gambar: "assets/pencemaran radioaktif.jpeg",
        sumber: "https://news.detik.com/dw/d-6807447/iaea-setujui-rencana-jepang-buang-limbah-radioaktif-fukushima-ke-laut",
    },
    {
        judul: "Pencemaran Cahaya: Dampak Tersembunyi Urbanisasi Modern",
        deskripsi: "Pencemaran cahaya adalah kondisi di mana cahaya buatan manusia yang berlebihan atau salah arah mengganggu lingkungan alam. Dampaknya meliputi gangguan pada satwa liar seperti burung dan penyu, gangguan kesehatan pada manusia (seperti insomnia).",
        gambar: "assets/pencemaran cahaya.jpeg",
        sumber: "https://oif.umsu.ac.id/polusi-cahaya-memusnahkan-minat-cinta-astonomi/",
    },
    {
        judul: "Pencemaran Termal: Perubahan Suhu yang Membunuh Ekosistem",
        deskripsi: "Pencemaran termal adalah masuknya limbah panas dari pabrik atau pembangkit listrik ke perairan atau tanah, yang mengubah suhu lingkungan. Suhu yang tidak normal ini dapat mematikan organisme air dan merusak keseimbangan ekosistem.",
        gambar: "assets/pencemaran thermal.jpg",
        sumber: "https://www.perchenergy.com/blog/environment/what-is-thermal-pollution-causes-impact",
    }
];

// Render daftar masalah pencemaran dalam bentuk card (tanpa gambar)
function renderProblems() {
    const container = document.getElementById('problemsList');
    container.innerHTML = '';

    artikel.forEach((problem, index) => {
        const card = document.createElement('div');
        card.className = 'problem-card';
        card.innerHTML = `
            <div class="problem-content">
                <h3 class="problem-title" onclick="toggleProblem(${index})">${problem.judul}</h3>
                <p class="problem-description" id="desc-${index}">${problem.deskripsi}</p>
                <div class="problem-meta" id="meta-${index}"></div>
                <span class="toggle-text" id="toggle-${index}">Klik judul untuk menyembunyikan</span>
            </div>
        `;

        container.appendChild(card);
    });
}

// Tampilan penjelasan (hanya saat judul diklik)
function toggleProblem(index) {
    const deskripsi = document.getElementById(`desc-${index}`);
    const toggleText = document.getElementById(`toggle-${index}`);
    const meta = document.getElementById(`meta-${index}`);

    // Cek apakah deskripsi sedang disembunyikan
    if (deskripsi.classList.contains('hidden')) {
        // dialog konfirmasi untuk menampilkan penjelasan
        const confirm = window.confirm('Apakah Anda ingin menampilkan penjelasan ini?');
        if (confirm) {
            deskripsi.classList.remove('hidden');
            meta.classList.remove('hidden');
            toggleText.textContent = 'Klik judul untuk menyembunyikan';
        }
    } else {
        // Tampilkan dialog konfirmasi untuk menyembunyikan penjelasan
        const confirm = window.confirm('Apakah Anda ingin menyembunyikan penjelasan ini?');
        if (confirm) {
            deskripsi.classList.add('hidden');
            meta.classList.add('hidden');
            toggleText.textContent = 'Klik judul untuk menampilkan';
        }
    }
}

// Set Mode Rapi
function setTidyMode() {
    document.body.classList.remove('messy');
}

// Set Mode Berantakan
function setMessyMode() {
    document.body.classList.add('messy');
}

// Navigasi ke halaman galeri (selalu mode rapi dengan tema PINK)
function goToGalleryPage() {
    document.body.classList.remove('messy'); // Paksa mode rapi di galeri
    document.getElementById('mainPage').classList.remove('active');
    document.getElementById('galleryPage').classList.add('active');
    renderGallery();
}

// Navigasi kembali ke halaman utama
function goToMainPage() {
    document.getElementById('galleryPage').classList.remove('active');
    document.getElementById('mainPage').classList.add('active');
}

// Render galeri gambar (gambar hanya muncul di halamn ke-2)
function renderGallery() {
    const container = document.getElementById('galleryGrid');
    container.innerHTML = '';

    // Looping setiap artikel
    artikel.forEach((problem) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${problem.gambar}" alt="${problem.judul}">
            <div class="gallery-item-content">
                <h3>${problem.judul}</h3>
                <p>Gambar Sumber: ${problem.sumber}</p>
            </div>
        `;
        // Menambahkan item galeri ke dalam container
        container.appendChild(item);
    });
}

// Inisialisasi halaman
window.onload = function() {
    // Panggil fungsi untuk menampilkan daftar masalah pencemaran
    renderProblems();
};


