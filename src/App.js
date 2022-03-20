import ProductListPage from "./page/ProductListPage.js";
import CartNPayment from "./page/CartNPayment.js";
import ErrorPage from "./page/ErrorPage.js";

export default function App({ $target }) {
  console.log("App.js");
  this.route = () => {
    const { pathname } = location;
    console.log(pathname);
    $target.innerHTML = "";

    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    } else if (pathname === "/cart") {
      new CartNPayment({ $target }).render();
    } else {
      new ErrorPage({ $target }).render();
    }

    // switch (pathname) {
    //   case "/":
    //     new ProductListPage({ $target }).render();
    //     break;
    //   case "/cart":
    //     new CartNPayment({ $target }).render();
    //     break;
    //   default:
    //     new ErrorPage({ $target }).render();
    //     break;
    // }
  };

  this.route();
}
