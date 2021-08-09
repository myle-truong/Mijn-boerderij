'use strict';

document.addEventListener('DOMContentLoaded', init);

function init() {
   document.querySelector('#send').addEventListener('click', submitMsg);
}

function submitMsg(e) {
   e.preventDefault();

   let name = document.querySelector('#name').value;
   let email = document.querySelector('#email').value;
   let msg = document.querySelector('#msg').value;
   let token = '6d8c367a-590e-4660-b951-8c4f7e333795';
   let dest = 'robin@crea-studio.be';

   Email.send({
      SecureToken: token,
      To: dest,
      From: email,
      Subject: 'New message from ' + name,
      Body:
         'Hi Robin, ' +
         '<br>' +
         'Naam: ' +
         name +
         '<br>' +
         'Email: ' +
         email +
         '<br>' +
         'Bericht: ' +
         msg +
         '<br>' +
         '<br>' +
         '<br>' +
         'Met vriendelijke groeten,' +
         '<br>' +
         '<br>' +
         'Crea-Studio MailAgent',
   }).then(console.log('msg send'));

   document.querySelector('.showSuccess').classList.remove('d-none');
}
