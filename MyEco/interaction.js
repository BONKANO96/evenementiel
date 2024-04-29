document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});


// Sélectionnez le bouton "Ajouter au Panier"
var addToCartButton = document.querySelector('.buy_button');

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton "Ajouter au Panier"
addToCartButton.addEventListener('click', function() {
    // Récupérez les valeurs des options d'achat
    var quantity = document.getElementById('quantity').value;
    var size = document.getElementById('size').value;
    var name = document.getElementById('nom_produit').textContent;
    var price = document.getElementById('priceValue').textContent;
    

    // Créez un objet représentant le produit avec les options sélectionnées
    var product = {
        nom: name,
        prix: price,
        quantite: quantity,
        size: size,
    };

    // Ajoutez le produit au panier (vous pouvez implémenter cette fonctionnalité selon votre structure de panier)
    addToCart(product);
});

// Fonction pour ajouter un produit au panier
function addToCart(product) {
    // Ajoutez votre logique pour ajouter le produit au panier ici
    console.log("Produit ajouté au panier:", product);
}

function addToCart(productName, productPrice, productQuantity, productSize) {
    // Créer un nouvel élément de produit
    var newItem = document.createElement('div');
    newItem.classList.add('cart_item');

    // Construire le contenu de l'élément de produit
    newItem.innerHTML = `
        <div class="item-details">
            <h2>${productName}</h2>
            <p>Prix: $${productPrice.toFixed(2)}</p>
            <p>Quantité: ${productQuantity}</p>
            <p>Taille: ${productSize}</p>
        </div>
    `;

    // Ajouter l'élément de produit à la liste des produits dans le panier
    var cartItems = document.querySelector('.cart_items');
    cartItems.appendChild(newItem);
}

document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('promo-title');
    // Applique l'animation avec une durée de 2 secondes
    title.style.animation = "slideDown 51s ease-out";
});