// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
   indicators: false,
   height: 500,
   transition: 500,
   interval: 6000,
});

// Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

('use strict');

document.addEventListener('DOMContentLoaded', init);

function init() {
   document.querySelector('#send').addEventListener('click', submitMsg);
}

function submitMsg(e) {
   e.preventDefault();

   let name = document.querySelector('#name').value;
   let email = document.querySelector('#email').value;
   let phone = document.querySelector('#phone').value;
   let msg = document.querySelector('#msg').value;
   let token = '9c6ac4d2-f4f3-4d8e-8f5c-ed1853ae960a';
   let dest = 'gratis.issues2@gmail.com';

   Email.send({
      SecureToken: token,
      To: dest,
      From: email,
      Subject: 'New message from ' + name,
      Body:
         'Hi , ' +
         '<br>' +
         'Naam: ' +
         name +
         '<br>' +
         'Email: ' +
         email +
         '<br>' +
         'Phone: ' +
         phone +
         '<br>' +
         'Bericht: ' +
         msg +
         '<br>' +
         '<br>' +
         '<br>' +
         'Met vriendelijke groeten,' +
         '<br>' +
         '<br>' +
         'Mijn boerderijs ',
   }).then(console.log('msg send'));

   document.querySelector('.showSuccess').classList.remove('d-none');
}
