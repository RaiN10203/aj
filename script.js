const toggleButton = document.getElementsByClassName('toggle-button')[0]
const links = document.getElementsByClassName('top-left')[0]

toggleButton.addEventListener('click', () =>{
    links.classList.toggle('active')
})




  // Get a reference to the "Explore" link
  const exploreLink = document.getElementById('explore-link');

  // Add a click event listener to scroll to the "Title" element
  exploreLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Scroll smoothly to the element with class "Title"
      const titleElement = document.querySelector('.Title');
      titleElement.scrollIntoView({
          behavior: 'smooth',
      });
  });