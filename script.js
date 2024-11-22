console.log('Hello :3/');
// submit button
const submitbtn = document.querySelector('#submit_btn');
// personInf
const nameInp = document.querySelector('#name');
const surname = document.querySelector('#surname')
// land
const land =document.querySelector('#country')


function submit(event) {
    event.preventDefault();
    const nameS = nameInp.value
    const surnameS = surname.value
    const countryS = land.value

    console.log(nameS);console.log(surnameS);console.log(countryS)
}
submitbtn.addEventListener('click', submit);

