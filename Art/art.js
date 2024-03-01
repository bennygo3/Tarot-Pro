//unnecessary way to hide a link, lol
const artURL = window.location.href;

if(artURL.includes("art.html")) {
  console.log("Running on art page");
  const artLink = document.getElementById("artLink");
  artLink.style.display = "none";
}

// below is for the modals on the art page:

const captions = {
  'artFrame': 'El Burro',
  'blackFrame': 'My most recent collage',
  'goldFrame': 'The Motherboard'
}

const frames = document.querySelectorAll('.art');

frames.forEach(frame => {
  frame.addEventListener('click', () => {
  const modal = document.getElementById('modalContainer');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('caption');
  const backgroundImage = getComputedStyle(frame).backgroundImage;
    // const src = *removes url and other parts of the backgroundImage string. Returns only the image path.
    // .replace removes the double quotes and replaces with an empty string. This is then used to 
    // set the src attribute of modalImg 
  const src = backgroundImage.slice(4, -1).replace(/"/g, "");
  const frameId = frame.getAttribute('id');
  const frameCaption = captions[frameId];

  modal.style.display = 'block';
  modalImg.src = src;
  caption.innerHTML = frameCaption;
  });
});

const closeModal = document.querySelector(".close");
closeModal.onclick = function() {
    modalContainer.style.display = "none";
};

