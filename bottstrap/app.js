const skill=document.querySelector('#myskill');
const experience=document.querySelector('#myexperience');
const education=document.querySelector('#myeducation');
const container=document.getElementsByClassName('grid')
const hamburger=document.querySelector('#hamburger');
const menu=document.querySelector('.menu');

skills=()=>{
    skill.style.display="block";
    experience.style.display="none";
    education.style.display="none";

}
exp=()=>{
    experience.style.display="block";
    skill.style.display="none";
    education.style.display="none";
}
educations=()=>{
    education.style.display="block";
    skill.style.display="none";
    experience.style.display="none";
}
hamburger.addEventListener('click',()=>{
    menu.classList.toggle('active')
})