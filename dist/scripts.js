"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
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
// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal && modal) {
        modal.style.display = 'none';
    }
});
// Change header style on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
});
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
            const data = yield response.json();
            const postsContainer = document.getElementById('posts');
            if (postsContainer) {
                postsContainer.innerHTML = '';
                data.slice(0, 5).forEach((post) => {
                    const div = document.createElement('div');
                    div.className = 'post';
                    div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                    postsContainer.appendChild(div);
                });
                // Animate posts appearance
                setTimeout(() => {
                    const postElements = document.querySelectorAll('.post');
                    postElements.forEach(el => el.classList.add('visible'));
                }, 100);
            }
        }
        catch (error) {
            console.error('Error fetching posts:', error);
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    fetchPosts();
});
