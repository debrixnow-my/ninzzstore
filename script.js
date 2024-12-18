// Inisialisasi AOS
AOS.init({
    duration: 1000,
    once: true
});

// Inisialisasi Swiper
const testimonialSwiper = new Swiper(".testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    },
    autoplay: {
        delay: 3000
    }
});

// Toggle Menu Mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Pergantian Tab
function switchTab(namaTabs) {
    // Sembunyikan semua konten tab
    document.querySelectorAll(".tab-content").forEach(konten => {
        konten.classList.remove("active");
    });

    // Hapus kelas aktif dari semua tombol tab
    document.querySelectorAll(".tab-btn").forEach(tombol => {
        tombol.classList.remove("active");
    });

    // Tampilkan konten tab yang dipilih
    document.getElementById(`${namaTabs}-section`).classList.add("active");

    // Tambahkan kelas aktif ke tombol yang diklik
    event.target.classList.add("active");
}

// Fungsi Pemesanan dengan SweetAlert Lanjutan
function orderNow(tipe, jumlah, harga) {
    const jumlahDiformat = new Intl.NumberFormat().format(jumlah);
    const hargaDiformat = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(harga);

    const pesan =
        `Halo NINZZSTORE! Saya ingin memesan:\n\n` +
        `Layanan: TikTok ${tipe}\n` +
        `Jumlah: ${jumlahDiformat}\n` +
        `Harga: ${hargaDiformat}\n\n` +
        `Tolong bantu saya dengan pesanan ini.`;

    const nomorWhatsApp = "6289676214554";
    const pesanDikodekan = encodeURIComponent(pesan);

    Swal.fire({
        title: "Konfirmasi Pesanan Anda",
        html: `
            <div style="text-align: left; margin: 1rem 0;">
                <p><strong>Layanan:</strong> TikTok ${tipe}</p>
                <p><strong>Jumlah:</strong> ${jumlahDiformat}</p>
                <p><strong>Harga:</strong> ${hargaDiformat}</p>
            </div>
        `,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Pesan via WhatsApp",
        cancelButtonText: "Batal",
        confirmButtonColor: "#88ca63",
        cancelButtonColor: "#dc6969"
    }).then(result => {
        if (result.isConfirmed) {
            window.open(
                `https://wa.me/${nomorWhatsApp}?text=${pesanDikodekan}`,
                "_blank"
            );
        }
    });
}

// Gulir Halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
            // Tutup menu mobile jika terbuka
            navLinks.classList.remove("active");
        }
    });
});

