
const courses = [
    { title: "Web Development", category: "Development" },
    { title: "Data Science", category: "Data" },
    { title: "Graphic Design", category: "Design" },
    { title: "Machine Learning", category: "Data" },
    { title: "Digital Marketing", category: "Marketing" },
];


function displayCourses(courseList) {
    const courseContainer = document.getElementById('courseList');
    courseContainer.innerHTML = ''; 

    courseList.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.textContent = `${course.title} (${course.category})`;
        courseContainer.appendChild(courseItem);
    });
}


function filterCourses(category) {
    if (category === 'All') {
        displayCourses(courses);
    } else {
        const filteredCourses = courses.filter(course => course.category === category);
        displayCourses(filteredCourses);
    }
}

document.getElementById('categorySelect').addEventListener('change', function() {
    const selectedCategory = this.value;
    filterCourses(selectedCategory);
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
displayCourses(courses);
