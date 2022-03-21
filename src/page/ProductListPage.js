import { getData } from "../API.js";

export default function ProductListPage({ $target }) {
  console.log("ProductListPage.js");
  const $page = document.createElement("div");
  $page.className = "product-list-page";
  $page.innerHTML = "<h1>바닐라 SPA 쇼핑몰</h1>";

  const $main = document.createElement('main');
  

  this.setState = function (nextState) {
    this.state = nextState;
  };

  const fetchProducts = async () => {
    const products = await getData("mall");
    this.setState(products);
    console.log(this.state)
  };

  fetchProducts();

  const $modal = document.createElement("div");
  $modal.className = "product-detail";
  $modal.innerHTML = `<h2>상품 상세 정보 모달</h2>`;
  $modal.style.display = "none";

  this.render = () => {
    $target.appendChild($page);
    $target.appendChild($modal);
  };
}
