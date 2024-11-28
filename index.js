// function createProductCard(productName, price, imageUrl) {
//   const productCard = document.createElement("div");
//   productCard.classList.add("product-card");

//   const image = document.createElement("img");
//   image.src = imageUrl;
//   image.alt = productName;
//   productCard.appendChild(image);

//   const name = document.createElement("h3");
//   name.textContent = productName;
//   productCard.appendChild(name);

//   const priceElement = document.createElement("p");
//   priceElement.textContent = `Price: ${price}`;
//   productCard.appendChild(priceElement);

//   return productCard;
// }

// function createCommentMessage(author, message, timestamp) {
//   const commentMessage = document.createElement("div");
//   commentMessage.classList.add("comment-message");

//   const authorElement = document.createElement("h4");
//   authorElement.textContent = author;
//   commentMessage.appendChild(authorElement);

//   const msgElement = document.createElement("p");
//   msgElement.textContent = message;
//   commentMessage.appendChild(msgElement);

//   const timestampElement = document.createElement("span");
//   timestampElement.textContent = timestamp;
//   commentMessage.appendChild(timestampElement);

//   return commentMessage;
// }

// function createMenuItem(name, price, description) {
//   const menuItem = document.createElement("div");
//   menuItem.classList.add("menu-item");

//   const nameElem = document.createElement("h3");
//   nameElem.textContent = name;
//   menuItem.appendChild(nameElem);

//   const priceElem = document.createElement("p");
//   priceElem.textContent = `Price: ${price}`;
//   menuItem.appendChild(priceElem);

//   const descriptionElem = document.createElement("p");
//   descriptionElem.textContent = description;
//   menuItem.appendChild(descriptionElem);

//   return menuItem;
// }

// const product = createProductCard(
//   "Iphone 14 Pro",
//   "2200azn",
//   "https://image.shutterstock.com/image-photo/madrid-spain-september-21-2022-newly-260nw-2212939541.jpg"
// );
// document.body.appendChild(product);

// const comment = createCommentMessage(
//   "Orxan Mamedov",
//   "Mehsul eladir!Tovsuye eleyirem",
//   "2024-11-26 15:30"
// );
// document.getElementById("comments-container").appendChild(comment);

// const menuItem = createMenuItem("Airpods pro", "750 azn", "Novaya model");
// document.getElementById("menu-container").appendChild(menuItem);

// ///////////////////////////////////////////////////////////////////////////
// /////////////////TASK2////////////////////
