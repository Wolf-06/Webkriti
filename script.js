const modal = document.getElementById("authModal");
const loginSignupBtn = document.getElementById("loginSignupBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

loginSignupBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        event.preventDefault();
    });
});

const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.display = 'none';
});

const manageDishesSection = document.getElementById('manageDishes');
const manageOrdersSection = document.getElementById('manageOrders');

sidebarLinks[0].addEventListener('click', () => {
    sections.forEach(section => section.style.display = 'none');
    manageDishesSection.style.display = 'block';
});

sidebarLinks[1].addEventListener('click', () => {
    sections.forEach(section => section.style.display = 'none');
    manageOrdersSection.style.display = 'block';
});