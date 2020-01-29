const parallax = document.querySelector('.parallax'),
  layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {
  Array.from(layers).forEach(layer => {
    const divider = layer.dataset.speed,
      strafe = wScroll * divider / 10;

    layer.style.transform = `translateY(-${strafe}%)`;

  });
}

window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(wScroll);
});
