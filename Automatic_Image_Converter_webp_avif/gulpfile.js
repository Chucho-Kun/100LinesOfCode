const { src, dest, watch, series, parallel } = require('gulp');

// Plugins
const webp = require('gulp-webp');
const avif = require('gulp-avif');
const opciones = { quality: 50 };

// --- img Folder ---
function imgWebp() {
    return src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));
}
function imgAvif() {
    return src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));
}

// --- gallery Folder ---
function galleryWebp() {
    return src('src/gallery/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/gallery'));
}
function galleryAvif() {
    return src('src/gallery/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/gallery'));
}

// --- DEV ---
function dev() {
    // Carpeta img
    watch('src/img/**/*.{png,jpg}', imgWebp);
    watch('src/img/**/*.{png,jpg}', imgAvif);

    // Carpeta gallery
    watch('src/gallery/**/*.{png,jpg}', galleryWebp);
    watch('src/gallery/**/*.{png,jpg}', galleryAvif);
}

// Exports
exports.dev = dev;
exports.imgWebp = imgWebp;
exports.imgAvif = imgAvif;
exports.galleryWebp = galleryWebp;
exports.galleryAvif = galleryAvif;
exports.default = series( parallel(imgWebp, imgAvif, galleryWebp, galleryAvif), dev );