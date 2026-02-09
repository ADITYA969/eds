export default function renderBlock(cmp) {
  const items = [...cmp.querySelectorAll('.card-item')];

  const wrapper = document.createElement('div');
  wrapper.className = 'cards-grid';

  items.forEach((item) => {
    const cols = item.children;

    const img = cols[0].querySelector('img')?.src;
    const title = cols[1].textContent.trim();
    const desc = cols[2].textContent.trim();

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${img}" alt="">
      <h3>${title}</h3>
      <p>${desc}</p>
    `;

    wrapper.append(card);
  });

  cmp.innerHTML = '';
  cmp.append(wrapper);
}
