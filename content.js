function addTrendingLink() {
  const container = document.querySelector('.AppHeader-search');
  if (container) {
    const trendingHtml = `
      <a href="https://github.com/trending"
         class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted"
         aria-label="Trending repositories" style="margin-right: 0.5rem;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-graph Button-visual">
          <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"/>
        </svg>
      </a>
    `;

    container.insertAdjacentHTML('afterbegin', trendingHtml);
  }
}

addTrendingLink();
