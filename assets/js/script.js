function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    function goHome() {
        showSection('home');
    }
    // Başlangıçta sadece anasayfa görünür
    showSection('home');
    // Galeri Lightbox
    function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
    }
    function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
    }