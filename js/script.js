let username = prompt("Enter your name please");
document.write(`<h3 class="question" style="color: rgba(255, 255, 255);background-color: rgb(0, 132, 255);font-size:24px;"> Enter your name please ? </h3>`);
alert("Welcome " + username + " to my site ");
document.write(`<h3 class="ans" style="color: rgba(255, 0, 0, 0.507);background-color: #eee;"> Welcome  ${username} to my site </h3>`);


let age = parseInt(prompt("Enter your age please"));
document.write(`<h3 class="question" style="color: #FDD2FF;background-color: rgb(184, 99, 2);font-size:24px;"> Enter your age please ?</h3>`);
alert("WOW !! The world was a different place, In " + (2021 - age));
document.write(`<h3 class="ans" style="color: rgb(6, 124, 6);background-color: #eee;">WOW !! The world was a different place, In ${(2021 - age)}</h3>`);


let nationality = prompt("Enter your nationality please");
document.write(`<h3 class="question" style="color: #3AFFBE;background-color: rgba(255, 0, 0, 0.507);font-size:24px;"> Enter your nationality please ?</h3>`);
alert("I know it as always you are " + nationality);
document.write(`<h3 class="ans" style="color: rgb(0, 132, 255);background-color: #eee;"> I know it as always you are  ${nationality}</h3>`);


let education = prompt("Enter your highest education please");
document.write(`<h3 class="question" style="color:#FFCD00;background-color:  rgb(6, 124, 6);font-size:24px;">Enter your highest education please ?</h3>`);
alert("I am impressed with your qualifications, How you got a " + education + " and you are only " + age + " ?");
document.write(`<h3 class="ans" style="color: rgb(184, 99, 2);background-color: #eee;">I am impressed with your qualifications, How you got a  ${education}  and you are only  ${age}  ?</h3>`);

