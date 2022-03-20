export default function ErrorPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "error-page";

  $page.innerHTML = `<h1 class="error-page-header">Error</h1><p class="error-page-message">잘못된 경로입니다.</p>`;

  this.render = () => {
    $target.appendChild($page);
  };
}
