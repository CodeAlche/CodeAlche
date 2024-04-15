// Dynamic Course and Resource Listings
function displayFeaturedCourses() {
  // Fetch course data from a database or API
  const courses = [
    { title: 'Introduction to Programming', image: 'course1.jpg' },
    { title: 'Web Development Fundamentals', image: 'course2.jpg' },
    { title: 'Data Science for Beginners', image: 'course3.jpg' }
  ];

  const courseGrid = document.querySelector('.course-grid');

  courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');

    const img = document.createElement('img');
    img.src = course.image;
    img.alt = course.title;

    const title = document.createElement('h3');
    title.textContent = course.title;

    const link = document.createElement('a');
    link.href = `course.html?id=${courses.indexOf(course)}`;
    link.classList.add('btn');
    link.textContent = 'Enroll Now';

    courseCard.appendChild(img);
    courseCard.appendChild(title);
    courseCard.appendChild(link);
    courseGrid.appendChild(courseCard);
  });
}

function displayFeaturedResources() {
  // Fetch resource data from a database or API
  const resources = [
    { title: 'Introduction to HTML', image: 'resource1.jpg' },
    { title: 'CSS Basics Tutorial', image: 'resource2.jpg' },
    { title: 'JavaScript for Beginners', image: 'resource3.jpg' }
  ];

  const resourceGrid = document.querySelector('.resource-grid');

  resources.forEach(resource => {
    const resourceCard = document.createElement('div');
    resourceCard.classList.add('resource-card');

    const img = document.createElement('img');
    img.src = resource.image;
    img.alt = resource.title;

    const title = document.createElement('h3');
    title.textContent = resource.title;

    const link = document.createElement('a');
    link.href = `resource.html?id=${resources.indexOf(resource)}`;
    link.classList.add('btn');
    link.textContent = 'Learn More';

    resourceCard.appendChild(img);
    resourceCard.appendChild(title);
    resourceCard.appendChild(link);
    resourceGrid.appendChild(resourceCard);
  });
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
  displayFeaturedCourses();
  displayFeaturedResources();
});