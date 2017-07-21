const section_one = document.getElementById('section_one');
const heading = document.querySelector('.title');
const colors = ['#6E65AD', '#93CA68', '#7BD3F7', '#F0586F'];

heading.style.color = "#000";
    section_one.addEventListener('mouseover', () => {
        let i = Math.floor(Math.random() * colors.length);
        heading.style.color = colors[i];
    });
