
const storyCathupDivs = document.querySelectorAll(".story-cathup");

storyCathupDivs.forEach((div) => {
  const shareIcon = div.querySelector(".single-icon");


  shareIcon.addEventListener("click", () => {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
    window.open(facebookUrl, "_blank");
    window.open(twitterUrl, "_blank");
  });
});



const articlessDiv = document.getElementById('articless');


articlessDiv.addEventListener('click', () => {
 
  const storyCathupDivs = document.querySelectorAll('.story-cathup');

  for (let i = 0; i < storyCathupDivs.length; i++) {
    const storyCathupDiv = storyCathupDivs[i];
    if (storyCathupDiv.id === 'articles') {
      storyCathupDiv.style.display = 'block';
    } else {
      storyCathupDiv.style.display = 'none';
    }
  }
});



// get the essays div element
const essaysDiv = document.getElementById('essays');

// add a click event listener to the essays div
essaysDiv.addEventListener('click', () => {
  // get all the story-cathup div elements
  const storyCathupDivs = document.querySelectorAll('.story-cathup');

  // loop over the story-cathup divs and check if they have the ID 'essay'
  for (let i = 0; i < storyCathupDivs.length; i++) {
    const storyCathupDiv = storyCathupDivs[i];
    if (storyCathupDiv.id === 'essay') {
      // display the story-cathup div with the ID 'essay'
      storyCathupDiv.style.display = 'block';
    } else {
      // hide the other story-cathup divs
      storyCathupDiv.style.display = 'none';
    }
  }
});


const poemssDiv = document.getElementById('poemss');

// add a click event listener to the essays div
poemssDiv.addEventListener('click', () => {
  // get all the story-cathup div elements
  const storyCathupDivs = document.querySelectorAll('.story-cathup');

  // loop over the story-cathup divs and check if they have the ID 'essay'
  for (let i = 0; i < storyCathupDivs.length; i++) {
    const storyCathupDiv = storyCathupDivs[i];
    if (storyCathupDiv.id === 'Poems') {
      // display the story-cathup div with the ID 'essay'
      storyCathupDiv.style.display = 'block';
    } else {
      // hide the other story-cathup divs
      storyCathupDiv.style.display = 'none';
    }
  }
});



const storiessDiv = document.getElementById('storiess');

// add a click event listener to the essays div
storiessDiv.addEventListener('click', () => {
  // get all the story-cathup div elements
  const storyCathupDivs = document.querySelectorAll('.story-cathup');

  // loop over the story-cathup divs and check if they have the ID 'essay'
  for (let i = 0; i < storyCathupDivs.length; i++) {
    const storyCathupDiv = storyCathupDivs[i];
    if (storyCathupDiv.id === 'storie') {
      // display the story-cathup div with the ID 'essay'
      storyCathupDiv.style.display = 'block';
    } else {
      // hide the other story-cathup divs
      storyCathupDiv.style.display = 'none';
    }
  }
});
