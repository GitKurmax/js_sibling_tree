document.body.querySelector('.tree').addEventListener('click', function(event) {
  if (event.target.tagName === "A" && event.target.nextElementSibling) {
    event.target.nextElementSibling.classList.toggle('hidden');
  }
});
