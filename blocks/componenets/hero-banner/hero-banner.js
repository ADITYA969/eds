function renderBlock(cmp) {
    const divChildrens = cmp.children;

    const titleText = divChildrens[0].textContent.trim();
    const detailsText = divChildrens[1].textContent.trim();
    const imgPath = divChildrens[2].querySelector('img').src;
    const bottomBarText = divChildrens[3].textContent.trim();

    const bannerContainerDiv = document.createElement('div');
    bannerContainerDiv.classList.add('container');
    bannerContainerDiv.innerHTML = `
        <div class="banner-content">
            <h1>${titleText}</h1>
            <p>${detailsText}</p>
        </div>
    `;

    const bottomBarDiv = document.createElement('div');
    bottomBarDiv.classList.add('bottom-bar');
    bottomBarDiv.innerHTML = `
        <div class="container">
            <p>${bottomBarText}</p>
        </div>
    `;

    cmp.innerHTML = '';
    cmp.append(bannerContainerDiv);
    cmp.append(bottomBarDiv);

    // change css custom property
    document.documentElement.style.setProperty("--bg1", `url(${imgPath})`);
}

export default renderBlock;
