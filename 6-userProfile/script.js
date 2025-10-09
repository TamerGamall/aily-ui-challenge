function showProfileModal(src) {
    document.getElementById("profileModalImg").src = src;
    const modal = new bootstrap.Modal(document.getElementById('profileModal'));
    modal.show();
}
