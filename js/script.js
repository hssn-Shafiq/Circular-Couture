  
        const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



// Get the "New In" link and the content wrapper
const newInLink = document.querySelector('.new-menu-hover');
const contentWrapper = document.querySelector('.links-content-wrapper');

// Flag to check if the link has been clicked
let linkClicked = false;

// Function to show the content wrapper
function showContentWrapper() {
    contentWrapper.classList.remove('d-none');
}

// Function to hide the content wrapper
function hideContentWrapper() {
    contentWrapper.classList.add('d-none');
}

// Function to handle link click
function handleLinkClick() {
    linkClicked = true;
    // Redirect to the next page after 2 seconds
    setTimeout(function () {
        if (linkClicked) {
            // Redirect to the next page
            window.location.href = newInLink.getAttribute('href');
        } else {
            // Hide the content wrapper if the link wasn't clicked during the 2 seconds
            hideContentWrapper();
        }
    }, 5000);
}

// Add event listeners for mouseenter and mouseleave
newInLink.addEventListener('mouseenter', showContentWrapper);

newInLink.addEventListener('mouseleave', function () {
    if (!linkClicked) {
        // Hide the content wrapper only if the link wasn't clicked
        hideContentWrapper();
    }
});

// Add click event listener to handle link click
newInLink.addEventListener('click', function (event) {
    // Prevent the default link behavior
    event.preventDefault();
    handleLinkClick();
});

// Add event listener to handle content wrapper click (redirect if clicked during the 2 seconds)
contentWrapper.addEventListener('click', function () {
    if (!linkClicked) {
        // Redirect to the next page if the link wasn't clicked yet
        window.location.href = newInLink.getAttribute('href');
    }
});


// top header
document.getElementById('closeButton').addEventListener('click', function () {
    // Remove the content when the close button is clicked
    var contentToRemove = document.getElementById('content');
    contentToRemove.parentNode.removeChild(contentToRemove);
});

document.addEventListener("DOMContentLoaded", function () {
    // Find the element with the class "closer"
    var closerElement = document.querySelector('.closer');

    // Add a click event listener to the link inside the "closer" element
    closerElement.querySelector('a').addEventListener('click', function (event) {
        // Prevent the default behavior of the link (e.g., navigating to a URL)
        event.preventDefault();

        // Call the closeAllModals function or perform your desired action here
        mobileNav.closeAllModals(); // Replace with your actual function or action
    });
});



$(document).ready(function () {
    $('.dropdown').on('show.bs.dropdown', function () {
        // Calculate the position of the dropdown based on the icon
        var dropdownMenu = $(this).find('.dropdown-menu');
        var iconOffset = $(this).offset().left;
        dropdownMenu.css('left', iconOffset - dropdownMenu.width() + 'px');
    });

    // Automatically close the dropdown on scroll
    $(window).on('scroll', function () {
        $('.dropdown.show').dropdown('toggle');
    });
});