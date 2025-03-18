const iframe = document.getElementById('iframe');
const loading = document.getElementById('loading');

loading.style.display = 'flex';

setTimeout(() => {
iframe.src = "home.html";
}, 3000);

iframe.onload = () => {
loading.style.display = 'none';
};
