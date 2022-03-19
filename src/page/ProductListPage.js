export default function ProductListPage({ $target }) {
  console.log("ProductListPage.js");
  const $page = document.createElement("div");
  $page.className = "product-list-page";
  $page.innerHTML = "<h1>상품 목록</h1>";

  const $modal = document.createElement("div");
  $modal.className = "product-detail";
  $modal.innerHTML = `<h2>상품 상세 정보</h2>`;

  this.render = () => {
    $target.appendChild($page);
    $target.appendChild($modal);
  };
}
