const btnPesan = document.getElementById('btnPesan');
const pesanRahasia = document.getElementById('pesanRahasia');
const heartsContainer = document.getElementById('heartsContainer');

// Logika klik tombol untuk memunculkan pesan
btnPesan.addEventListener('click', () => {
    pesanRahasia.classList.toggle('hidden');
    if (!pesanRahasia.classList.contains('hidden')) {
        btnPesan.innerText = 'Tutup Pesan 💖';
        // Mulai bikin efek hujan hati pas pesan dibuka
        setInterval(createHeart, 300);
    } else {
        btnPesan.innerText = 'Buka Pesan ❤️';
    }
});

// Fungsi pembuat animasi hati jatuh
function createHeart() {
    if (pesanRahasia.classList.contains('hidden')) return;

    const heart = document.createElement('div');
    heart.classList.add('heart-fall');
    heart.innerText = '❤️';
    
    // Posisi acak horizontal
    heart.style.left = Math.random() * 100 + 'vw';
    // Ukuran acak
    heart.style.fontSize = Math.random() * 10 + 15 + 'px';
    // Kecepatan jatuh acak
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    // Transparansi acak
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    heartsContainer.appendChild(heart);

    // Hapus element setelah jatuh ke bawah biar gak berat
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
