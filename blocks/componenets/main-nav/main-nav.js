export default function renderBlock(cmp) {
  const items = [...cmp.children];

  const logoImg = items[0].querySelector('img')?.src;

  const nav = document.createElement('nav');
  nav.className = 'nav-bar';

  const logo = document.createElement('img');
  logo.src = logoImg;
  logo.className = 'logo';

  const links = document.createElement('ul');

  items.slice(1).forEach((div) => {
    const a = div.querySelector('a');
    const li = document.createElement('li');
    li.append(a.cloneNode(true));
    links.append(li);
  });

  nav.append(logo, links);

  cmp.innerHTML = '';
  cmp.append(nav);
}
