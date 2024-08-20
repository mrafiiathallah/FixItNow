// TicketUser.js
var tickets = [
    {
        id: '12345',
        user: 'Akmal Sidki Razaka',
        title: 'Masalah Login',
        category: 'Login',
        status: 'New Ticket',
        date: 'Kamis, 01 Agustus 2024',
        description: 'Ketika saya mengakses aplikasi, terjadi gangguan saat saya ingin login.',
        image: 'screenshot.jpg'
    },
    {
        id: '23456',
        user: 'Budiman Ahmad',
        title: 'Permintaan Reset Password',
        category: 'Reset Password',
        status: 'New Ticket',
        date: 'Senin, 05 Agustus 2024',
        description: 'Budi membutuhkan reset password untuk akunnya yang terkunci.',
        image: 'screenshot.jpg'
    },
    {
        id: '34567',
        user: 'M Rafi Athallah',
        title: 'Koneksi Database Gagal',
        category: 'Database',
        status: 'New Ticket',
        date: 'Selasa, 06 Agustus 2024',
        description: 'Tidak bisa terhubung ke database saat mencoba menjalankan aplikasi lokal.',
        image: 'screenshot.jpg'
    },
    {
        id: '45678',
        user: 'Wahyu Nata Mahendra',
        title: 'Tidak Bisa Menerima Email',
        category: 'Email',
        status: 'New Ticket',
        date: 'Kamis, 08 Agustus 2024',
        description: 'Akun email saya tidak menerima email masuk sejak kemarin.',
        image: 'screenshot.jpg'
    },
    {
        id: '56789',
        user: 'Brilliant Jordan',
        title: 'Error Aplikasi',
        category: 'Software',
        status: 'New Ticket',
        date: 'Sabtu, 10 Agustus 2024',
        description: 'Aplikasi menutup sendiri saat melakukan proses checkout.',
        image: 'screenshot.jpg'
    },
    {
        id: '67890',
        user: 'Muhammad Dzakiyuddin Haidar',
        title: 'Lupa Password Portal',
        category: 'Akun',
        status: 'New Ticket',
        date: 'Senin, 12 Agustus 2024',
        description: 'Saya lupa password portal kerja dan perlu reset segera.',
        image: 'screenshot.jpg'
    },
    {
        id: '78901',
        user: 'Nadia',
        title: 'tidak bisa mengajukan pinjaman mobil',
        category: 'sistem',
        status: 'New Ticket',
        date: 'Selasa, 13 Agustus 2024',
        description: 'Saya lupa password portal kerja dan perlu reset segera.',
        image: 'screenshot.jpg'
    }
];

// Cek apakah sudah ada tiket di localStorage, jika belum simpan data awal ke localStorage
if (!localStorage.getItem('tickets')) {
    localStorage.setItem('tickets', JSON.stringify(tickets));
} else {
    // Muat data dari localStorage ke dalam array tickets jika sudah ada data
    tickets = JSON.parse(localStorage.getItem('tickets'));
}

function updateTicketStatus(ticketId, newStatus) {
    const index = tickets.findIndex(ticket => ticket.id === ticketId);
    if (index !== -1) {
        tickets[index].status = newStatus;
        localStorage.setItem('tickets', JSON.stringify(tickets));  // Perbarui seluruh array di localStorage
        alert(`Status untuk tiket ${ticketId} telah diperbarui menjadi: ${newStatus}`);
        if (newStatus === 'Closed') {
            window.location.href = 'TiketSelesaiService.html';  // Alihkan ke halaman tiket yang selesai
        } else {
            window.location.reload();  // Muat ulang halaman saat ini untuk mencerminkan pembaruan status
        }
    }
}

function deleteTicket(ticketId) {
    // Hapus tiket dari array dan localStorage
    tickets = tickets.filter(ticket => ticket.id !== ticketId);
    localStorage.setItem('tickets', JSON.stringify(tickets));  // Simpan array yang telah diperbarui ke localStorage
    alert(`Tiket ${ticketId} telah dihapus.`);
    window.location.reload();  // Reload untuk memperbarui tampilan tabel
}