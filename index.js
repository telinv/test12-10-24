let products = document.querySelectorAll('.product');
let trolley = document.querySelector('.img__trolley');

products.forEach((product) => {
  product.onmousedown = function(event) {
    let shiftX = event.clientX - product.getBoundingClientRect().left;
    let shiftY = event.clientY - product.getBoundingClientRect().top;

    product.style.position = 'absolute';
    document.body.append(product);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      product.style.left = pageX - shiftX + 'px';
      product.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    product.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      product.onmouseup = null;
    };
  };

  let productRect = product.getBoundingClientRect();
  let trolleyRect = trolley.getBoundingClientRect();

  if (
    productRect.right > productRect.left &&
    productRect.left > productRect.right &&
    productRect.bottom > trolleyRect.top &&
    productRect.top < trolleyRect.bottom   
  ){
    product.style.position = 'absolute';
    product.style.left = trolleyRect.left + 10 + 'px';
    product.style.top = trolleyRect.top + 10 + 'px'; 
    trolley.appendChild(product);
  }


  product.ondragstart = function() {
    return false;
  };
});

