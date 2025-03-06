const projects = [
    {
        title:"My Portfolio",
        description: "MyPortfolio is a dynamic and visually engaging project that showcases my skills, experience, and accomplishments, providing a comprehensive overview of my professional journey and creative work.",
        techStack: ["HTML", "JavaScript", "CSS"],
        image: "images/image7.projet3.png",
        codeLink: "#",
        demoLink: "#"
    },
    {
        title: "TASK MASTER",
        description: "Task Master is an intuitive project management tool designed to help users efficiently organize, track, and prioritize their tasks, ensuring seamless productivity and collaboration.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "images/image12.projet3.png",
        codeLink: "#",
        demoLink: "#"
    },
];
const container = document.getElementById("projects-container");
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-stack">
          ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.codeLink}" target="_blank"><i class="iconify" data-icon="bi:github"></i>Code</a>
            <a href="${project.demoLink}" target="_blank"><i class="iconify" data-icon="garden:new-window-fill-12"></i>Live Demo</a>
        </div>
    `;    
    container.appendChild(card);
});

document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('contactForm');
const messageElement = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const number = document.getElementById('phone').value.trim();

  if (!name || !email || !message || !number) {
    showMessage('Please fill in all fields.', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    showMessage('Please enter a valid email address.', 'error');
    return;
  }
  try {
    const response = await sendEmail(name, email, message,number);
    if (response.ok) {
      showMessage('Your message was sent successfully!', 'success');
      form.reset();
    } else {
      showMessage('Failed to send your message. Please try again.', 'error');
    }
  } catch (error) {
    showMessage('An error occurred. Please try again later.', 'error');
  }
});

function showMessage(message, type) {
  messageElement.textContent = message;
  messageElement.style.color = type === 'success' ? 'green' : 'red';
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function sendEmail(name, email, message,number) {
  const serviceID = 'service_i7ystzc';
  const templateID = 'template_9ud6jjp';

  return await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceID,
      template_id: templateID,
      template_params: { name, email, message,number },
    }),
  });
}


});

document.addEventListener('DOMContentLoaded', () => {
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % slideCount; 
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000);
});


