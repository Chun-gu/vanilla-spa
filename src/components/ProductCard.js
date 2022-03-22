const IMG_URL = "https://test.api.weniv.co.kr/";

export default function ProductCard(product) {
  const { id, thumbnailImg, productName, discountRate, price } = product;
  const currentPrice = (price * ((100 - discountRate) / 100)).toLocaleString();

  return `
  <li class="product" data-product-id="${id}">
    <div class="product-img">
      <img src="${IMG_URL}${thumbnailImg}" alt="${productName}" />
    </div>
    <div class="product-info">
      <p class="product-name">${productName}</p>
      <div class="product-price">
        ${
          discountRate
            ? `
            <span class="current-price">${currentPrice}</span>원
            <span class="original-price">${price.toLocaleString()}원</span>
            <span class="discount-rate">${discountRate}%</span>
            `
            : `
            <span class="current-price">${price.toLocaleString()}</span>원
            `
        }
      </div>
      <button class="like-button">
        <object type="image/svg+xml" data="./asset/icon-heart.svg"></object>
      </button>
    </div>
  </li>`;
}
