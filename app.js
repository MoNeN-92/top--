// const carousel = [
//     {
//         id: 1,
//         name: 'Beqa Vepxvadze1',
//         job: 'Geodez1',
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84yMDOtLMpe1EZzCxmJr4Uk_pyh6TgGD0_Q&s',
//         text: `1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat facilis consequatur omnis? Ducimus amet maxime debitis placeat`
//     },
//     {
//         id: 2,
//         name: 'Beqa Vepxvadze2',
//         job: 'Geodez2',
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTff16F3aldD9IrjTLHZs-ozzx9PoSa59iBSw&s',
//         text: `2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat facilis consequatur omnis? Ducimus amet maxime debitis placeat`
//     },
//     {
//         id: 3,
//         name: 'Beqa Vepxvadze3',
//         job: 'Geodez3',
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzfYXfjwVjRaCe7yGj7jXRhSMKN2lSpyx_w&s',
//         text: `3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat facilis consequatur omnis? Ducimus amet maxime debitis placeat`
//     },
//     {
//         id: 4,
//         name: 'Beqa Vepxvadze4',
//         job: 'Geodez4',
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCUVtWDMQJgAkH_tV1rp6TqigtMCe8yzZIbeWVe6ucQ&s',
//         text: `3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat facilis consequatur omnis? Ducimus amet maxime debitis placeat`
//     },
//     {
//         id: 5,
//         name: 'Beqa Vepxvadze5',
//         job: 'Geodez4',
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCUVtWDMQJgAkH_tV1rp6TqigtMCe8yzZIbeWVe6ucQ&s',
//         text: `3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat facilis consequatur omnis? Ducimus amet maxime debitis placeat`
//     },
// ];

// const img = document.getElementById("imgSlider");
// const names = document.getElementById("name");
// const text = document.getElementById("text");
// let index = 0;

// window.addEventListener("DOMContentLoaded", function() {
//     showData();
//     setInterval(showNextImage, 5000); 
// });

// function showData() {
//     const item = carousel[index];
//     img.src = item.img;
//     names.textContent = item.name;
//     text.textContent = item.text;
// }

// function showNextImage() {
//     index = (index + 1) % carousel.length;
//     showData();
// }


// function openMessenger() {
//     var userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     // Check if the user agent is iOS or Android
//     if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//         // iOS
//         window.location.href = 'fb-messenger://user-thread/{61557384877437}';
//     } else if (/android/i.test(userAgent)) {
//         // Android
//         window.location.href = 'intent://user-thread/{61557384877437}#Intent;package=com.facebook.orca;scheme=fb-messenger;end';
//     } else {
//         // If neither iOS nor Android, open in browser
//         window.open('https://www.messenger.com/t/{61557384877437}');
//     }
// }