// Inicialización del carrito
let cart = [];

// Función para agregar un servicio al carrito
function addToCart(serviceName, price) {
    // Crear un objeto para el servicio
    const service = { name: serviceName, price: price };
    
    // Añadir el servicio al carrito
    cart.push(service);
    
    // Actualizar el contador del carrito y mostrar el contenido
    updateCartCount();
    updateCartContent();
}

// Función para actualizar el contador de artículos en el carrito
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

// Función para actualizar el contenido del carrito
function updateCartContent() {
    const cartContent = document.getElementById('cart-content');
    const totalPrice = document.getElementById('total-price');
    
    // Limpiar el contenido previo
    cartContent.innerHTML = '';
    let total = 0;

    // Mostrar los artículos en el carrito
    cart.forEach((service, index) => {
        total += service.price;
        cartContent.innerHTML += `
            <div class="cart-item">
                <p>${service.name} - $${service.price}</p>
                <button onclick="removeItem(${index})">Eliminar</button>
                <button onclick="editItem(${index})">Editar</button>
            </div>
        `;
    });

    // Mostrar el precio total
    totalPrice.innerHTML = `<p>Total: $${total}</p>`;
}

// Función para eliminar un artículo del carrito
function removeItem(index) {
    // Eliminar el artículo del carrito
    cart.splice(index, 1);
    
    // Actualizar el contador del carrito y el contenido
    updateCartCount();
    updateCartContent();
}

// Función para editar un artículo del carrito
function editItem(index) {
    const newPrice = prompt("Introduce el nuevo precio para este servicio:");
    
    // Si se introduce un precio válido, actualizar el precio
    if (newPrice && !isNaN(newPrice) && newPrice > 0) {
        cart[index].price = parseFloat(newPrice);
        updateCartContent();
    } else {
        alert("Por favor, introduce un precio válido.");
    }
}

