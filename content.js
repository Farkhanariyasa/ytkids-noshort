
function hideShortsYTKids() {
  // Sembunyikan Shorts di homepage YT Kids
  document.querySelectorAll('[id*="shorts"],      [class*="shorts"]').forEach(el => el.style.display = 'none');

  // Redirect kalau masuk halaman Shorts langsung
  if (window.location.href.includes("/shorts/")) {
    window.location.href = "https://www.youtubekids.com";
  }
}

// Cek & hapus Shorts setiap 1 detik
setInterval(hideShortsYTKids, 1000);

