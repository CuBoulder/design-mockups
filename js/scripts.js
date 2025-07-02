window.addEventListener('scroll', function() {
  const element = document.getElementById('header'); // Replace 'your-element-id' with the actual ID
  if (window.scrollY > 200) {
    element.classList.add('fixed'); // Replace 'your-class-name' with the class to add
  } else {
    element.classList.remove('fixed');
  }
});
