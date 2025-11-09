document.addEventListener('DOMContentLoaded', ()=>{
const y=new Date().getFullYear();
['year','year-about','year-portfolio','year-contact'].forEach(id=>{
const el=document.getElementById(id);
if(el) el.textContent = y;
});


// Clock
const clock=document.getElementById('clock');
if(clock){
setInterval(()=>{
const now=new Date();
clock.textContent = now.toLocaleString('id-ID', {weekday:'short', day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit', second:'2-digit'});
}, 1000);
}


// Theme toggle
const themeToggle = document.getElementById('themeToggle');
if(themeToggle){
themeToggle.addEventListener('click', ()=>{
document.body.classList.toggle('dark');
// small feedback
themeToggle.textContent = document.body.classList.contains('dark') ? 'Terangkan Tema' : 'Ganti Tema';
});
}


// Contact form submit
const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', (e)=>{
e.preventDefault();
const name = form.name.value.trim();
// Basic validation
if(!name){
alert('Mohon isi nama Anda.');
return;
}
alert('Terima kasih, pesan Anda telah terkirim!');
form.reset();
});
}
});