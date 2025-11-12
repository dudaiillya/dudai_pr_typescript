interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const modal: HTMLElement | null = document.getElementById('myModal');
const openBtn: HTMLElement | null = document.getElementById('openModalBtn');
const closeBtn: HTMLElement | null = document.getElementById('closeModalBtn');

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

// Close modal when clicking outside of it
window.addEventListener('click', (event: MouseEvent) => {
  if (event.target === modal && modal) {
    modal.style.display = 'none';
  }
});

// Change header style on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header') as HTMLElement;
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

async function fetchPosts(): Promise<void> {
  try {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await response.json();
    const postsContainer: HTMLElement | null = document.getElementById('posts');
    if (postsContainer) {
      postsContainer.innerHTML = '';
      data.slice(0, 5).forEach((post: Post) => {
        const div: HTMLDivElement = document.createElement('div');
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
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchPosts();
});
