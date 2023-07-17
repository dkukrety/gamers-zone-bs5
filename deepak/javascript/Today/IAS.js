//IAS student
//Exam Center
//Subject enrolled..

//Country will have x examination center for CAT
//City will have y examination center
//each center will have name, location and capacity
//each center will have some constraint that some examination cannot be done.
//each student will be given 3 choices of center. student can select center
//in that choice and prioritise it....

class ExamCenter
{
    constructor(name,capacity)
    {
        this.name = name;
        this.capacity = capacity;
    }

    isCenterCanbeAllocated(plist)
    {
        if(this.capacity)
        {
            for(let place of plist)
            {
                if(this.name.toLowerCase() == place.toLowerCase())
                {
                    this.capacity--;
                    //console.log(center);
                    return true;
                }
            }
        }

        return false;
    }
}

class Student
{
    constructor(name,age,exam_name,center_priority_list)
    {
        this.name = name;
        this.age = age;
        this.exam_name = exam_name;
        this.center_priority_list = center_priority_list;
        this.exam_center_name = "No Center Allocated";
    }
}

class Country
{
    constructor(name)
    {
        this.centers = [];
        this.students = [];
        this.name = name;
    }


    addCentersFromCountry(centerslist)
    {
        centerslist.forEach(element => {
            this.centers.push(element);
        });
    }


    enrollStudent(studentList)
    {
        studentList.forEach(element => {
        this.students.push(element);
        });

    }

    generateExamAdmitCard(){
        //this.centers.forEach(ele => console.log(ele));
        //this.students.forEach(ele => console.log(ele));
        let centers_list = [];
        centers_list = this.centers;
        this.students.forEach(function(student){
            let plist = student.center_priority_list;
            let center_found = centers_list.find((center) => center.isCenterCanbeAllocated(plist));
            if(center_found)
            {
                student.exam_center_name = center_found.name;
                console.log(`For Student ${student.name} found center ${center_found.name}`);
            }
            else
            {
                console.log(`For Student ${student.name}  ${student.exam_center_name}`);
            }
        });
    }
}

let examCenter1 = new ExamCenter("Delhi",4);
let examCenter2 = new ExamCenter("Bangalore",1);
let examCenter3 = new ExamCenter("Chennai",2);
let examCenter4 = new ExamCenter("Pune",2);
let examCenter5 = new ExamCenter("Mumbai",1);

let country = new Country("India");
country.addCentersFromCountry([examCenter1,examCenter2,examCenter3,examCenter4,examCenter5]);

let student1 = new Student("Amit",24,"CAT",["delhi","bangalore","pune"]);
let student3 = new Student("Jaya",23,"CAT",["Bangalore","Chennai","pune"]);
let student2 = new Student("Bijaya",24,"CAT",["Delhi","Chennai","Pune","Mumbai"]);
let student4 = new Student("Suresh",24,"CAT",["Delhi","Chennai","Pune"]);
let student5 = new Student("Deepak",24,"CAT",["Delhi","Chennai","Pune","Mumbai"]);

country.enrollStudent([student1,student2,student3,student4,student5]);
country.generateExamAdmitCard();

