var MainImg = document.getElementById("MainImg");
 
var x = document.getElementsByClassName("x");

document.addEventListener("DOMContentLoaded", function () {
 
  const products = [
    {
      imgSrc: "/img/product/f1.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: 78,
    },
    {
      imgSrc: "/img/product/f2.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: "$78",
    },
    {
      imgSrc: "/img/product/f3.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: "$78",
    },
    {
      imgSrc: "/img/product/f4.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: "$78",
    },
    {
      imgSrc: "/img/product/f5.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: "$78",
    },
    {
      imgSrc: "/img/product/f7.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: "$78",
    },
    {
      imgSrc: "/img/product/f8.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: "$78",
    },
    {
      imgSrc: "/img/product/f1.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: "$78",
    },
    {
      imgSrc: "/img/product/f1.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: 78,
    },
    {
      imgSrc: "/img/product/f2.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: "$78",
    },
    {
      imgSrc: "/img/product/f3.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: "$78",
    },
    {
      imgSrc: "/img/product/f4.jpg",
      brand: "Adidas",
      name: "Cartoon Astronaut T-shirt",
      stars: 5,
      price: "$78",
    },
  ];

  // Function to create product HTML
  function createProductHTML(product) {
    return `
        <div class="pro">
            <img src="${product.imgSrc}" alt="" />
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.name}</h5>
                <div class="star">
                    ${'<i class="fas fa-star"></i>'.repeat(product.stars)}
                </div>
                <h4>$${product.price}</h4>
                <a href="#"><i class="cart fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
        `;
  }

  // Function to display all products
  // Define the products array

  function displayProducts(products) {
    const productContainer = document.getElementById("productContainer");
    if (productContainer) {
      productContainer.innerHTML = products.map(createProductHTML).join("");
    }
  }

  // Display products when DOM is loaded
  displayProducts(products);

  // Event listener for clicking on product
  const Addcart = document.querySelectorAll(".pro");
  Addcart.forEach((element, index) => {
    element.addEventListener("click", () => {
      console.log(index); // Displaying index number in console
      window.location.href = "sproduct.html"; // Redirect to product page
      MainImg.src = x[index].src;
    });
  });
});
