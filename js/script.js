let username = prompt("Enter your name please ?");
document.write(`<p class="question" style="color: rgba(255, 255, 255);background-color: rgb(0, 132, 255);font-size:24px;"> Enter your name please ? </p>`);
console.log("Enter your name please ?")
alert("Welcome " + username + " to my site ");
document.write(`<p class="ans" style="color: rgba(255, 0, 0, 0.507);background-color: #eee;"> Welcome  ${username} to my site </p>`);
console.log(` Welcome  ${username} to my site `)


let age = parseInt(prompt("Enter your age please?"));
document.write(`<p class="question" style="color: #FDD2FF;background-color: rgb(184, 99, 2);font-size:24px;"> Enter your age please ?</p>`);
console.log("Enter your age please ?")

alert("WOW !! The world was a different place, In " + (2021 - age));
document.write(`<p class="ans" style="color: rgb(6, 124, 6);background-color: #eee;">WOW !! The world was a different place, In ${(2021 - age)}</p>`);
console.log(`WOW !! The world was a different place, In ${(2021 - age)}`)


let nationality = prompt("Enter your nationality please ?");
document.write(`<p class="question" style="color: #3AFFBE;background-color: rgba(255, 0, 0, 0.507);font-size:24px;"> Enter your nationality please ?</p>`);
console.log("Enter your nationality please ?")

alert("I know it as always you are " + nationality);
document.write(`<p class="ans" style="color: rgb(0, 132, 255);background-color: #eee;"> I know it as always you are  ${nationality}</p>`);
console.log(`I know it as always you are  ${nationality}`)


let education = prompt("Enter your highest education please ?");
document.write(`<p class="question" style="color:#FFCD00;background-color:  rgb(6, 124, 6);font-size:24px;">Enter your highest education please ?</p>`);
console.log("Enter your highest education please ?")

alert("I am impressed with your qualifications, How you got a " + education + " and you are only " + age + " ?");
document.write(`<p class="ans" style="color: rgb(184, 99, 2);background-color: #eee;">I am impressed with your qualifications, How you got a  ${education}  and you are only  ${age}  ?</p>`);
console.log(`I am impressed with your qualifications, How you got a  ${education}  and you are only  ${age} ?`)

