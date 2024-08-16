const lydiaImage = document.getElementById('lydia-dp');

// Array con todas las posibles imágenes
const imageList = ['lila.jpg', 'lila2.png', 'lila3.png', 'lila4.png'];

// Función para obtener un índice aleatorio
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Obtener un índice aleatorio dentro del array de imágenes
const randomIndex = getRandomIndex(imageList.length);

// Asignar la imagen aleatoria
lydiaImage.src = `img/${imageList[randomIndex]}`;
