console.log('Hello :3/');
// submit button
const submitbtn = document.querySelector('#submit_btn');
// personInf
const nameInp = document.querySelector('#name');
const surname = document.querySelector('#surname');
const land =document.querySelector('#country');
// const konverteringButton = document.querySelector('#konverter-button')




function submit(event) {
    event.preventDefault();
    const nameS = nameInp.value;
    const surnameS = surname.value;
    const countryS = land.value;
    
    console.log(nameS);console.log(surnameS);console.log(countryS);
}
submitbtn.addEventListener('click', submit);


// function konvertering(event2) {
//     event2.preventDefault();
//     konverteringButton.textContent = Math.random() * 10000;
// }
  
// konverteringButton.addEventListener("click", konvertering)