// Fetch employee data
let reviews = [];
fetch('names.json')
  .then((response) => response.json())
  .then((data) => {
    reviews = data.employees.map((employee) => ({
      name: employee.userName || `${employee.firstName} ${employee.lastName}`,
      job: employee.jobTitleName || 'Fullstack Developer',
      img: employee.image,
      text: `Tech Stack: ${employee.techstack.join(', ')}`,
    }));
    showPerson(currentItem);
  });

// Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set starting item
let currentItem = 0;

// Show person based on item
function showPerson(person) {
  if (reviews.length === 0) return;
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show previous person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// Show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
