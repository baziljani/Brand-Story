// document.addEventListener('DOMContentLoaded', function() {
//     const dropdownToggle = document.querySelector('.dropdown-toggle');
//     const dropdownMenu = document.querySelector('.dropdown-menu');

//     // Toggle the dropdown menu on click
//     dropdownToggle.addEventListener('click', function(event) {
//         event.stopPropagation(); // Prevent the click from bubbling up
//         dropdownMenu.classList.toggle('show');
//     });

//     // Close the dropdown if the user clicks outside of it
//     window.addEventListener('click', function(event) {
//         if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
//             dropdownMenu.classList.remove('show');
//         }
//     });
// });



document.querySelector('.image-scroll').addEventListener('wheel', (e) => {
    e.preventDefault();
    e.currentTarget.scrollLeft += e.deltaY;
});


// let currentIndex = 0;

// function moveToSlide(index) {
//     const slides = document.querySelectorAll(".slide");
//     const dots = document.querySelectorAll(".dot");

//     // Update transform property to shift slides
//     document.querySelector('.slider-container').style.transform = `translateX(-${index * 100}%)`;

//     // Update active dot
//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[index].classList.add("active");

//     currentIndex = index;
// }




// document.querySelectorAll('.faq-item').forEach(item => {
//     item.addEventListener('click', () => {
//         const answer = item.querySelector('.faq-answer');
//         const icon = item.querySelector('.faq-icon');

//         answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
//         icon.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0)';
//     });
// });

