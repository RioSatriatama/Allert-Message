// Menampilkan pesan sukses
function showSuccess() {
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your action was successful.',
        showConfirmButton: false,
        timer: 3000 // Pesan akan otomatis hilang setelah 3 detik
    });
}

// Menampilkan pesan peringatan
function showWarning() {
    Swal.fire({
        icon: 'warning',
        title: 'Warning!',
        text: 'Something went wrong. Please try again.',
        showConfirmButton: false,
        timer: 3000 // Pesan akan otomatis hilang setelah 3 detik
    });
}