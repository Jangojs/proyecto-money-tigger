// /GliceSoap/js/banners.js

let bannerIndex = 1;

function mostrarBanners(index) {
    const banners = document.querySelector('.banners');
    const bannersLength = document.querySelectorAll('.banner').length;

    if (index > bannersLength) {
        bannerIndex = 1;
    }
    if (index < 1) {
        bannerIndex = bannersLength;
    }

    banners.style.transform = `translateX(${-100 * (bannerIndex - 1)}%)`;
}

function cambiarBanner(n) {
    mostrarBanners((bannerIndex += n));
}

// Mostrar el primer banner al cargar la página
mostrarBanners(bannerIndex);