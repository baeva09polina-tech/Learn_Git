let reviews = [];
let currentItem = 0;

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const errorMessage = document.getElementById('error-message');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

function showPerson(index) {
  const person = reviews[index];
  img.src = person.img;
  img.alt = person.name;
  author.textContent = person.name;
  job.textContent = person.job;
  info.textContent = `Tech stack: ${person.techstack.join(', ')} | Email: ${person.email}`;
}

function showLoadError(error) {
  console.error('Unable to load names.json:', error);
  errorMessage.hidden = false;
  errorMessage.textContent = 'Could not load the employee list. Please check names.json and reload the page.';
}

async function loadReviews() {
  try {
    const response = await fetch('names.json');
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (!Array.isArray(data.employees) || data.employees.length === 0) {
      throw new Error('names.json must contain a non-empty employees array');
    }

    reviews = data.employees.map((employee) => ({
      name: employee.userName || `${employee.firstName} ${employee.lastName}`,
      job: employee.jobTitleName || 'Fullstack Developer',
      img: employee.image,
      techstack: employee.techstack,
      email: employee.emailAddress,
    }));

    showPerson(currentItem);
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    randomBtn.disabled = false;
  } catch (error) {
    showLoadError(error);
  }
}

nextBtn.addEventListener('click', function () {
  currentItem = (currentItem + 1) % reviews.length;
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
  currentItem = (currentItem - 1 + reviews.length) % reviews.length;
  showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

loadReviews();