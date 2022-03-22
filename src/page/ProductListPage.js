import { getData } from "../API.js";
import ProductList from "../components/ProductList.js";

export default function ProductListPage({ $target }) {
  console.log("ProductListPage.js");

  const $page = document.createElement("div");
  $page.className = "product-list-page";
  $page.innerHTML = "<header><h1>Vanilla JS SPA Shopping Mall</h1></header>";

  const $main = document.createElement("main");
  $page.appendChild($main);

  this.setProductsState = (nextProductsState) => {
    this.productsState = nextProductsState;
    this.render();
  };

  const fetchProducts = async () => {
    const products = await getData("mall");
    this.setProductsState(products);
    console.log(this.productsState);
  };

  fetchProducts();

  // const $modal = document.createElement("div");
  // $modal.className = "product-detail";
  // $modal.innerHTML = `<h2>상품 상세 정보 모달</h2>`;
  // $modal.style.display = "none";

  this.render = () => {
    $target.appendChild($page);
    new ProductList({ $target: $main, initialState: this.productsState });
    // $target.appendChild($modal);
  };
}
