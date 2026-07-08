document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#catalogue-filter');
  const list = document.querySelector('[data-filter-list]');
  if (!input || !list) return;

  const items = [...list.querySelectorAll('.filter-item')];
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    for (const item of items) {
      item.hidden = query && !item.textContent.toLowerCase().includes(query);
    }
  });
});
