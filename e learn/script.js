// script.js

// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the form data to a server or API
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);

    // Clear the form fields
    document.getElementById('contactForm').reset();
});
// Array to hold completed courses
let completedCourses = [];

// Function to track a course
function trackCourse(courseName) {
    // Check if the course is already completed
    if (!completedCourses.includes(courseName)) {
        completedCourses.push(courseName); // Add course to completed list
        updateCompletedCoursesList(); // Update the displayed list
        alert(courseName + " has been marked as completed!"); // Alert the user
    } else {
        alert(courseName + " is already marked as completed."); // Alert if already completed
    }
}

// Function to update the completed courses list in the DOM
function updateCompletedCoursesList() {
    const list = document.getElementById('completed-courses-list');
    list.innerHTML = ''; // Clear the current list
    completedCourses.forEach(course => {
        const listItem = document.createElement('li');
        listItem.textContent = course; // Set the text of the list item
        list.appendChild(listItem); // Append the list item to the list
    });
}