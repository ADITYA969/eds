export default function decorate(block) {
  if (!block) {
    return;
  }

  var blogsWrapper = document.createElement('div');
  blogsWrapper.className = 'container';

  var blogsList = document.createElement('div');
  blogsList.className = 'blogs-list';

  var blogListItems = block.querySelectorAll('.blogs > div');

  for (var i = 0; i < blogListItems.length; i++) {
    var item = blogListItems[i];

    var blogItem = document.createElement('div');
    blogItem.className = 'blog-item';

    var titleEl = item.querySelector('h3');
    var titleText = titleEl ? titleEl.textContent.replace(/^\s+|\s+$/g, '') : '';

    var paragraphs = item.querySelectorAll('p');
    var dateText = paragraphs.length > 0
      ? paragraphs[0].textContent.replace(/^\s+|\s+$/g, '')
      : '';

    var descText = paragraphs.length > 1
      ? paragraphs[1].textContent.replace(/^\s+|\s+$/g, '')
      : '';

    var detailsDiv = document.createElement('div');
    detailsDiv.className = 'blog-details';

    var h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode(titleText));

    var span = document.createElement('span');
    span.appendChild(document.createTextNode(dateText));

    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(span);

    var descP = document.createElement('p');
    descP.appendChild(document.createTextNode(descText));

    blogItem.appendChild(detailsDiv);
    blogItem.appendChild(descP);

    blogsList.appendChild(blogItem);
  }

  blogsWrapper.appendChild(blogsList);

  block.innerHTML = '';
  block.appendChild(blogsWrapper);
}
