export default function CartNPayment({ $target }) {
  console.log("CartNPayment.js");
  const $page = document.createElement("div");
  $page.className = "cart-page";

  $page.innerHTML = "<h1>장바구니 & 결제</h1>";

  this.render = () => {
    $target.appendChild($page);
  };
}
