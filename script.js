// Function to generate seasonal elements dynamically
function generateSeasonalElements(className, imageUrl, count) {
  const container = document.querySelector('.background-animation');
  
  // Clear existing seasonal elements
  container.innerHTML = '';
  console.log('Container cleared');

  // Create a temporary wrapper for fading in/out
  const tempWrapper = document.createElement('div');
  tempWrapper.className = 'seasonal-wrapper';
  tempWrapper.style.opacity = 0;

  // Create the elements
  for (let i = 0; i < count; i++) {
    const element = document.createElement('div');
    element.className = className;

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = className;

    // Randomize position and animation delay
    element.style.left = `${Math.random() * 100}vw`;
    element.style.top = `${Math.random() * 100}vh`;
    const animationDelay = Math.random() * 5; // Random delay between 0 and 5 seconds
    element.style.animationDelay = `${animationDelay}s`;

    // Add click event to trigger burst effect
    element.addEventListener('click', () => {
      console.log('Element clicked!');
      
      // Add 'bursting' class to trigger burst animation
      element.classList.add('bursting');
      
      // Ensure it stays on the screen until the burst animation ends
      setTimeout(() => {
        element.classList.remove('bursting'); // Remove burst effect
        element.remove(); // Remove the element after the burst animation
        console.log('Bursting class removed and element removed');
      }, 500); // Match the animation duration (500ms)
    });

    // Append the image to the element, and then append the element to the wrapper
    element.appendChild(img);
    tempWrapper.appendChild(element);
  }

  // Append the wrapper with new seasonal elements to the container
  container.appendChild(tempWrapper);
  console.log('Elements added to container');

  // Fade in the new elements with a delay
  setTimeout(() => {
    tempWrapper.style.opacity = 0.5;
  }, 100);
}

// Simulate the current month and trigger the appropriate seasonal animation
let month = -1;
function updateSeasonalAnimation() {
  month = (month + 3) % 12; // Change seasons every 3 months

  if (month >= 2 && month <= 4) {
    // Spring
    generateSeasonalElements(
      'spring-petals',
      'https://www.freeiconspng.com/thumbs/flowers-icon-png/free-flower-material-cherry--pictures-of-clipart-and-graphic-design--20.png',
      20
    );
  } else if (month >= 5 && month <= 7) {
    // Summer
    generateSeasonalElements(
      'summer-rays',
      'https://img.pikbest.com/png-images/20240518/a-green-single-leaf-summer-object-with-monstera_10570110.png!sw800',
      15
    );
  } else if (month >= 8 && month <= 10) {
    // Autumn
    generateSeasonalElements(
      'autumn-leaves',
      'https://png.pngtree.com/png-vector/20230801/ourmid/pngtree-free-autumn-leave-clipart-vector-png-image_6862917.png',
      25
    );
  } else {
    // Winter
    generateSeasonalElements(
      'winter-snowflakes',
      'https://cdn-icons-png.flaticon.com/256/2530/2530064.png',
      30
    );
  }
}

// Call on page load to start with the correct season
window.addEventListener('load', updateSeasonalAnimation);

// Update the season every 10 seconds
setInterval(updateSeasonalAnimation, 10000);












