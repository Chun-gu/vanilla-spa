import ProductCard from "./ProductCard.js";

export default function ProductList({ $target, initialState }) {
  const $productList = document.createElement("ul");
  $target.appendChild($productList);

  this.productState = initialState;

  this.setProductState = (nextProductState) => {
    this.productState = nextProductState;
    this.render();
  };

  this.render = () => {
    if (!this.productState) {
      return;
    }
    $productList.innerHTML = `${this.productState
      .map((product) => ProductCard(product))
      .join("")}`;
  };

  this.render();

  $productList.addEventListener("click", (e) => {
    const $li = e.target.closest("LI");
    console.log($li);
    // const likeButton = e.target.closest("BUTTON");
    // const heart = likeButton.childElement;
    // const svgDoc = heart.contentDocument;
    // svgDoc.getElementsByClassName('.icon-heart');
    // svgDoc.fill = "#EB5757";
  });
}
