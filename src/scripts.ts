interface Post {
  title: string;
  body: string;
}

const posts: Post[] = [
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
    body: 'Це п’ятий український допис. Дякуємо, що переглядаєте наш сайт!',
  },
];

const modal: HTMLElement | null = document.getElementById('myModal');
const openBtn: HTMLElement | null = document.getElementById('openModalBtn');
const closeBtn: HTMLElement | null = document.getElementById('closeModalBtn');

function displayPosts(): void {
  const postsContainer = document.getElementById('postsContainer');
  if (!postsContainer) {
    return;
  }
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

    // reveal with slight delay
    setTimeout(() => {
      postElement.classList.add('visible');
    }, 100 * (index + 1));
  });
}

openBtn?.addEventListener('click', () => {
  if (modal) {
    modal.style.display = 'block';
  }
});

closeBtn?.addEventListener('click', () => {
  if (modal) {
    modal.style.display = 'none';
  }
});

window.addEventListener('click', (event: MouseEvent) => {
  if (event.target === modal) {
    if (modal) {
      modal.style.display = 'none';
    }
  }
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (!header) {
    return;
  }
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  displayPosts();
});
