document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');

    const products = [
        { id: 1, name: 'Hijab A', price: '$20', image: 'hijab-a.jpg', description: 'Beautiful hijab A' },
        { id: 2, name: 'Hijab B', price: '$25', image: 'hijab-b.jpg', description: 'Elegant hijab B' },
        { id: 3, name: 'Hijab C', price: '$30', image: 'hijab-c.jpg', description: 'Stylish hijab C' },
        { id: 4, name: 'Hijab D', price: '$35', image: 'hijab-d.jpg', description: 'Modern hijab D' },
        { id: 5, name: 'Hijab E', price: '$40', image: 'hijab-e.jpg', description: 'Classic hijab E' },
        { id: 6, name: 'Hijab F', price: '$45', image: 'hijab-f.jpg', description: 'Fancy hijab F' },
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        `;

        productList.appendChild(productItem);
    });
});
