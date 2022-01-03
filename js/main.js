let scrollpos = window.scrollY
const heading = document.querySelector(".top-heading")
const heading_height = heading.offsetHeight

const add_class_on_scroll = () => heading.classList.add("fade-in")
const remove_class_on_scroll = () => heading.classList.remove("fade-in")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= heading_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

  console.log(scrollpos)
})