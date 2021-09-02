fetch('https://randomuser.me/api/?results=150')
.then(response => response.json())
.then(data => {

    const user = data.results[0];
    const userContainer = document.getElementById('user');
    const userDiv = document.createElement('div');
    userDiv.classList.add('text-center');
    userDiv.innerHTML = `
        <img src="${user.picture.large}" class="img-fluid rounded-circle border border-secondary border-3">
        <div id="dynamic-div">
            <p class="text-secondary fs-5">Hi, My name is<p>
            <h3>${user.name.first} ${user.name.last}</h3>
        </div>
        <div class="mt-4">
        
            <a onmouseover="user('${user.name.first}','${user.name.last}')" style="margin-right: 20px"><i class="fas fa-user fa-2x user-hover"></i></a>
            <a onmouseover="email('${user.email}')" style="margin-right: 20px"><i class="far fa-envelope-open fa-2x email-hover"></i></a>
            <a onmouseover="dob('${user.dob.date}')" style="margin-right: 20px"><i class="far fa-calendar-alt fa-2x date-hover"></i></a>
            <a onmouseover="maps('${user.location.country}','${user.location.city}')" style="margin-right: 20px"><i class="fas fa-search-location fa-2x location-hover"></i></a>
            <a onmouseover="phone('${user.phone}')" style="margin-right: 20px"><i class="fas fa-phone-alt fa-2x phone-hover"></i></a>
        </div>

    `;
    userContainer.appendChild(userDiv);
    console.log(data.results[0]);
})
//user
const user= (first,last) =>{
    const dynamicDiv = document.getElementById('dynamic-div');
    dynamicDiv.textContent = ' ';
    dynamicDiv.innerHTML = `
        <p class="text-secondary fs-5">Hi, My name is<p>
        <h3>${first} ${last}</h3>
    `
}

//email
const email= (email) =>{
    const dynamicDiv = document.getElementById('dynamic-div');
    dynamicDiv.textContent = ' ';
    dynamicDiv.innerHTML = `
        <p class="text-secondary fs-5">My Email address is:<p>
        <h3>${email}</h3>
    `
}

//dob
const dob= (dob) =>{
    const dynamicDiv = document.getElementById('dynamic-div');
    dynamicDiv.textContent = ' ';
    dynamicDiv.innerHTML = `
        <p class="text-secondary fs-5">My Date Of Birth is:<p>
        <h3>${dob.slice(0,10)}</h3>
    `
}

//location
const maps= (country,city) =>{
    const dynamicDiv = document.getElementById('dynamic-div');
    dynamicDiv.textContent = ' ';
    dynamicDiv.innerHTML = `
        <p class="text-secondary fs-5">My Location is:<p>
        <h3>${city},${country}</h3>
    `
}

//phone
const phone= (number) =>{
    const dynamicDiv = document.getElementById('dynamic-div');
    dynamicDiv.textContent = ' ';
    dynamicDiv.innerHTML = `
        <p class="text-secondary fs-5">My Phone Number is:<p>
        <h3>${number}</h3>
    `
}