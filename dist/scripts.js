"use strict";
// Array of example posts in Ukrainian
const posts = [
    {
        title: 'Перший допис',
        body: 'Це перший український допис. Тут ми говоримо про програмування TypeScript.',
    },
    {
        title: 'Другий допис',
        body: 'Це другий український допис. Ми вивчаємо використання модальних вікон та подій scroll.',
    },
    {
        title: 'Третій допис',
        body: 'Це третій український допис. Анімації додають плавності при відображенні елементів.',
    },
    {
        title: 'Четвертий допис',
        body: 'Це четвертий український допис. Навіть без API ми можемо представити цікаву інформацію.',
    },
    {
        title: 'П’ятий допис',
        body: 'Це п’яти́й український допис. Дякуємо, що переглядаєте наш сайт!',
    },
];
// Grab modal and button elements
const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
/**
 * Display posts on the page.
 * Creates DOM elements for each post and reveals them with a slight delay
 * for a simple animation effect.
 */
function displayPosts() {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) {
        return;
    }
    // Clear any existing posts
    postsContainer.innerHTML = '';
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;
        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;
        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
        postsContainer.appendChild(postElement);
        // reveal each post with a delay to create a simple fade-in effect
        setTimeout(() => {
            postElement.classList.add('visible');
        }, 100 * (index + 1));
    });
}
// Event listeners for opening and closing the modal
openBtn === null || openBtn === void 0 ? void 0 : openBtn.addEventListener('click', () => {
    if (modal) {
        modal.style.display = 'block';
    }
});
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', () => {
    if (modal) {
        modal.style.display = 'none';
    }
});
// Close the modal when clicking on the overlay outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        if (modal) {
            modal.style.display = 'none';
        }
    }
});
// Change the header’s appearance when the user scrolls down the page
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) {
        return;
    }
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
});
// When the document is fully loaded, display the posts
document.addEventListener('DOMContentLoaded', () => {
    displayPosts();
});
