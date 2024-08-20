const tickets = [
    {
        id: '12345',
        user: 'Akmal Sidki Razaka',
        title: 'Masalah Login',
        category: 'Login',
        status: { text: 'New Tiket', class: 'new' },
        date: 'Senin, 01 Januari 2024',
        description: 'Ketika saya mengakses tune, terjadi gangguan saat saya menggunakan akses tune tersebut.',
        image: 'screenshot.jpg'
    },
    {
        id: '23456',
        user: 'Akmal Sidki Razaka',
        title: 'Masalah Sistem',
        category: 'Sistem',
        status: { text: 'Assigned', class: 'assigned' },
        date: 'Rabu, 18 Januari 2024',
        description: 'Sistem tidak dapat diakses oleh pengguna.',
        image: 'screenshot.jpg'
    },
    {
        id: '34567',
        user: 'Akmal Sidki Razaka',
        title: 'Masalah Jaringan',
        category: 'Jaringan',
        status: { text: 'In Progres', class: 'in-progress' },
        date: 'Rabu, 18 Januari 2024',
        description: 'Jaringan sering terputus saat digunakan.',
        image: 'screenshot.jpg'
    },
    {
        id: '45678',
        user: 'Akmal Sidki Razaka',
        title: 'Masalah Email',
        category: 'Email',
        status: { text: 'Resolve', class: 'resolve' },
        date: 'Rabu, 18 Januari 2024',
        description: 'Email tidak dapat dikirim.',
        image: 'screenshot.jpg'
    },
    {
        id: '56789',
        user: 'Akmal Sidki Razaka',
        title: 'Masalah Printer',
        category: 'Hardware',
        status: { text: 'Confirmation', class: 'confirmation' },
        date: 'Rabu, 18 Januari 2024',
        description: 'Printer tidak terdeteksi oleh komputer.',
        image: 'screenshot.jpg'
    },
    {
        id: '67890',
        user: 'Akmal Sidki Razaka',
        title: 'Masalah Software',
        category: 'Software',
        status: { text: 'On Hold', class: 'on-hold' },
        date: 'Rabu, 18 Januari 2024',
        description: 'Aplikasi sering mengalami crash.',
        image: 'screenshot.jpg'
    },
    {
        id: '78901',
        user: 'Akmal Sidki Razaka',
        title: "Masalah Jaringan",
        category: "IT",
        startDate: "Kamis, 08 agustus 2024",
        endDate: "Jumat, 09 agustus 2024",
        status: { class: "close", name: "Close" },
        description: 'Aplikasi sering mengalami crash.',
        image: 'screenshot.jpg'
    },
    {
        id: '89012',
        user: 'Akmal Sidki Razaka',
        title: "Masalah Status",
        category: "Software",
        startDate: "Jumat, 09 agustus 2024",
        endDate: "Sabtu, 10 agustus 2024",
        status: { class: "close", name: "Close" },
        description: 'Jumlah Cuti berkurang padahal belum di ambil.',
        image: 'screenshot.jpg'
    },
    {
        id: '90123',
        user: 'Akmal Sidki Razaka',
        title: "Masalah Tanda Tangan",
        category: "System",
        startDate: "Sabtu, 10 agustus 2024",
        endDate: "Senin, 11 agustus 20242",
        status: { class: "close", name: "Close" },
        description: 'Tanda Tangan tidak bisa di input.',
        image: 'screenshot.jpg'
    },
];

function getTicketById(ticketId) {
    return tickets.find(ticket => ticket.id === ticketId);
}
