export default function renderBlock(cmp) {
  const children = [...cmp.children];

  // heading
  const headingText = children[0].textContent.trim();

  // blog items (next 4)
  const blogItems = children.slice(1, 5);

  // promo section
  const promoImg1 = children[5].querySelector('img')?.src;
  const promoImg2 = children[6].querySelector('img')?.src;
  const promoText = children[7].textContent.trim();
  const promoCta = children[8].textContent.trim();

  const container = document.createElement('div');
  container.classList.add('container');

  const heading = document.createElement('h2');
  heading.textContent = headingText;

  const list = document.createElement('div');
  list.className = 'blogs-list';

  blogItems.forEach((item) => {
    const cols = item.children;

    const title = cols[0].textContent.trim();
    const date = cols[1].textContent.trim();
    const desc = cols[2].textContent.trim();
    const link = cols[3].querySelector('a');

    const card = document.createElement('div');
    card.className = 'blog-card';

    card.innerHTML = `
      <h3>${title}</h3>
      <span class="date">${date}</span>
      <p>${desc}</p>
      <a href="${link.getAttribute('href')}">${link.textContent}</a>
    `;

    list.append(card);
  });

  const promo = document.createElement('div');
  promo.className = 'blogs-promo';

  promo.innerHTML = `
    <div class="promo-images">
      <img src="${promoImg1}" alt="">
      <img src="${promoImg2}" alt="">
    </div>
    <div class="promo-content">
      <h3>${promoText}</h3>
      <button>${promoCta}</button>
    </div>
  `;

  cmp.innerHTML = '';
  cmp.append(container);
  container.append(heading, list, promo);
}
