const accounts = [
    {
        username: 'user',
        password: '12345678',
        role: 'user'
    },
    {
        username: 'service',
        password: '12345678',
        role: 'service'
    },
    {
        username: 'admin',
        password: 'admin123',
        role: 'admin'
    }
];

// Simpan data akun ke localStorage saat pertama kali diakses
if (!localStorage.getItem('accounts')) {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}
