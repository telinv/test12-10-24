let product = document.getElementById('product');

product.onmousedown = function(e) { // 1. отследить нажатие

  // подготовить к перемещению
  // 2. разместить на том же месте, но в абсолютных координатах
  product.style.position = 'absolute';
  moveAt(e);
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(product);

  product.style.zIndex = 1; // показывать мяч над другими элементами

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    product.style.left = e.pageX - product.offsetWidth / 2 + 'px';
    product.style.top = e.pageY - product.offsetHeight / 2 + 'px';
  }

  // 3, перемещать по экрану
  document.onmousemove = function(e) {
    moveAt(e);
  }

  // 4. отследить окончание переноса
  product.onmouseup = function() {
    document.onmousemove = null;
    product.onmouseup = null;
  }
}