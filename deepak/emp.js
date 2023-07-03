
var emp = [{}];
function AddEmployee(event)
{
    event.preventDefault();
    console.log("Adding emp");
    emp[0].fname = document.getElementById("fname").textContent;
    emp[0].lname = document.getElementById("lname").textContent;

    console.log(emp);
}