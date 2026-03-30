// script.js for Biodiversity Website

// Filter functionality by category
const filterItems = (category) => {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (item.dataset.category === category || category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};

// Image modal/lightbox functionality
const openModal = (src) => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = src;
};

const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
};

// Smooth scrolling functionality
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

// Interactive features
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', (e) => {
        filterItems(e.target.dataset.category);
    });
});

document.querySelectorAll('.image-item').forEach(item => {
    item.addEventListener('click', () => {
        openModal(item.src);
    });
});

document.getElementById('close-modal').addEventListener('click', closeModal);