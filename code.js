// Inline SVG for Favorites Icon
const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
star.setAttribute('width', '24');
star.setAttribute('height', '24');
star.setAttribute('viewBox', '0 0 24 24');
star.setAttribute('fill', 'none');
star.setAttribute('stroke', 'currentColor');
star.setAttribute('stroke-width', '2');
star.setAttribute('stroke-linecap', 'round');
star.setAttribute('stroke-linejoin', 'round');
star.setAttribute('class', 'icon star');
const starPolygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
starPolygon.setAttribute('points', "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2");
star.appendChild(starPolygon);

//Inline SVG for Eye Open Icon
const eyeOn = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
eyeOn.setAttribute('width', '24');
eyeOn.setAttribute('height', '24');
eyeOn.setAttribute('viewBox', '0 0 24 24');
eyeOn.setAttribute('fill', 'none');
eyeOn.setAttribute('stroke', 'currentColor');
eyeOn.setAttribute('stroke-width', '2');
eyeOn.setAttribute('stroke-linecap', 'round');
eyeOn.setAttribute('stroke-linejoin', 'round');
eyeOn.setAttribute('class', 'icon eyeOn');
const eyeOnPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
eyeOnPath.setAttribute('d', "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z");
eyeOn.appendChild(eyeOnPath);
const eyeOnCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
eyeOnCircle.setAttribute('cx', "12");
eyeOnCircle.setAttribute('cy', "12");
eyeOnCircle.setAttribute('r', "3");
eyeOn.appendChild(eyeOnCircle);

// Inline SVG for Eye closed Icon
const eyeOff = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
eyeOff.setAttribute('width', '24');
eyeOff.setAttribute('height', '24');
eyeOff.setAttribute('viewBox', '0 0 24 24');
eyeOff.setAttribute('fill', 'none');
eyeOff.setAttribute('stroke', 'currentColor');
eyeOff.setAttribute('stroke-width', '2');
eyeOff.setAttribute('stroke-linecap', 'round');
eyeOff.setAttribute('stroke-linejoin', 'round');
eyeOff.setAttribute('class', 'icon eyeOff');
const eyeOffPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
eyeOffPath.setAttribute('d', "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24");
eyeOff.appendChild(eyeOffPath);
const eyeOffLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
eyeOffLine.setAttribute('x1', '1');
eyeOffLine.setAttribute('y1', '1');
eyeOffLine.setAttribute('x2', '23');
eyeOffLine.setAttribute('y2', '23');
eyeOff.appendChild(eyeOffLine);

// Inline SVG for share icon
const share = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
share.setAttribute('width', '24');
share.setAttribute('height', '24');
share.setAttribute('viewBox', '0 0 24 24');
share.setAttribute('fill', 'none');
share.setAttribute('stroke', 'currentColor');
share.setAttribute('stroke-width', '2');
share.setAttribute('stroke-linecap', 'round');
share.setAttribute('stroke-linejoin', 'round');
share.setAttribute('class', 'icon share');
const shareCircle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
shareCircle1.setAttribute('cx', "18");
shareCircle1.setAttribute('cy', "5");
shareCircle1.setAttribute('r', "3");
share.appendChild(shareCircle1);
const shareCircle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
shareCircle2.setAttribute('cx', "6");
shareCircle2.setAttribute('cy', "12");
shareCircle2.setAttribute('r', "3");
share.appendChild(shareCircle2);
const shareCircle3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
shareCircle3.setAttribute('cx', "18");
shareCircle3.setAttribute('cy', "19");
shareCircle3.setAttribute('r', "3");
share.appendChild(shareCircle3);
const shareLine1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
shareLine1.setAttribute('x1', '8.59');
shareLine1.setAttribute('y1', '13.51');
shareLine1.setAttribute('x2', '15.42');
shareLine1.setAttribute('y2', '17.49');
share.appendChild(shareLine1);
const shareLine2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
shareLine2.setAttribute('x1', '15.41');
shareLine2.setAttribute('y1', '6.51');
shareLine2.setAttribute('x2', '8.59');
shareLine2.setAttribute('y2', '10.49');
share.appendChild(shareLine2);


const cards = document.querySelectorAll('.project-item');
cards.forEach((card)=> {
    const paraWrapper = document.createElement('div');
    paraWrapper.classList.add('paraWrapper');

    const content = document.createElement('p');
    content.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus mollitia explicabo, illum ratione blanditiis deleniti molestiae praesentium sequi a iure nostrum eius doloremque aperiam esse et repudiandae voluptates accusantium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus mollitia explicabo, illum ratione blanditiis deleniti molestiae praesentium sequi a iure nostrum eius doloremque aperiam esse et repudiandae voluptates accusantium!'
    paraWrapper.appendChild(content);
    card.appendChild(paraWrapper);


    const wrapper = document.createElement('div');
    wrapper.classList.add('icon-wrapper');
    wrapper.appendChild(star.cloneNode(true));
    wrapper.appendChild(eyeOn.cloneNode(true));
    wrapper.appendChild(eyeOff.cloneNode(true));
    wrapper.appendChild(share.cloneNode(true));
    card.appendChild(wrapper);
})

const iconWrappers = document.querySelectorAll('.icon-wrapper');
const closedEyes = document.querySelectorAll('.eyeOff');

closedEyes.forEach((eye) => {
    eye.style.display = 'none';
})


iconWrappers.forEach((iconWrapper) => {
  const eyeOn = iconWrapper.querySelector('.eyeOn');
  const eyeOff = iconWrapper.querySelector('.eyeOff');

  eyeOn.addEventListener('click', () => {
    eyeOn.style.display = 'none';
    eyeOff.style.display = 'block';
  });

  eyeOff.addEventListener('click', () => {
    eyeOff.style.display = 'none';
    eyeOn.style.display = 'block';
  });
});