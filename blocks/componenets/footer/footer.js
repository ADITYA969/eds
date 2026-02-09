export default function renderBlock(cmp) {
  const children = [...cmp.children];

  const col1 = children[0];
  const col2 = children[1];

  const newsletterTitle = children[2].textContent.trim();
  const newsletterText = children[3].textContent.trim();
  const signupText = children[4].textContent.trim();
  const copyright = children[5].textContent.trim();

  const wrapper = document.createElement('div');
  wrapper.className = 'footer-wrapper';

  const left = document.createElement('div');
  left.className = 'footer-cols';
  left.append(col1.cloneNode(true), col2.cloneNode(true));

  const newsletter = document.createElement('div');
  newsletter.className = 'footer-newsletter';
  newsletter.innerHTML = `
    <h4>${newsletterTitle}</h4>
    <p>${newsletterText}</p>
    <button>${signupText}</button>
  `;

  const copy = document.createElement('div');
  copy.className = 'footer-copy';
  copy.textContent = copyright;

  wrapper.append(left, newsletter, copy);

  cmp.innerHTML = '';
  cmp.append(wrapper);
}
