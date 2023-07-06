// using function as an object...

function sample()
{
    this.name="game zone";
    this.playGame=function(){console.log("some junk")}
}


var sampleObj = new sample()
sampleObj.playGame();

//IFFE

(function(a,b,c){
    console.log(a+b+c);
})(1,2,3);

/*
(function multiply(a,b,c){
    console.log(a*b*c);
})(1,2,3);

//(function(){})(5,6,7)

(function (){
    var somezone={
        name:"Great zone",
        playZone:function(){
            console.log("welcome to "+this.name)
        }
    };
    somezone.playZone();
})();

//let salary = [20000,30000,20000,30000,20000,40000,20000,30000,20000,30000];
let teamMate =[
    {
        name:"sumanth",
        skills:["java","js","react","html"],
        age:21
    },

    {
        name:"vikas",
        skills:["java","bootstrap","css","html"],
        age:21
    },

    {
        name:"amin",
        skills:["python","js","react","css"],
        age:21
    },

    {
        name:"deepak",
        skills:["c","c++","react","html"],
        age:21
    },

    {
        name:"lakshmi",
        skills:["python","django","ruby","html"],
        age:21
    },
    {
        name:"Jack",
        skills:["python","django","ruby","html","c","c++","js"],
        age:21
    },

];
(function (temp){
    var employee={
        name:"Sam",
        
        compute:function(salary){
            sum = 0;
            for ( let i of salary){
                sum+=i;
            }
            return sum/salary.length;
        },
        averageSalary:function(sal){
            console.log(this.name +" average salary is --> " +this.compute(sal));
        }
    }
    employee.averageSalary(temp);
})(salary);

(function(personSkill,teamList){
    var tp = {
        getSkillPerson:function(talent)
        {
            for(let mem of teamList)
            {
                for(let skill of mem.skills)
                {
                    if(talent === skill)
                        console.log(mem.name + " has " + talent)
                }
            }
        }
    }
    tp.getSkillPerson(personSkill);
})("java",teamMate);

//function also act like object...


// function as a constructor will require new...
//var a = new Player() // here it is creating a object

//generator function

function* generalZone()
{
 yield "first";
 yield "second"
}

// prototype is an object of function...

//Player.prototype.getFullName = getFullName() {this.fname + this.lname}

//method defination in object..

// function as an constructor
//

*/
