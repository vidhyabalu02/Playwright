let marks = 80
let grade 

if(marks>=95) {grade="S"}
else if (marks>=90)  {grade = "A+"}
else if (marks>=80) {grade ="A"}
else if (marks>=60) {grade = "B"}
else if (marks>=50) {grade = "C"}
else if (marks<50) {grade="Fail"}


function evaluateGrade(grade) {


    switch(grade) {
        case "S":
        console.log("Grade S")
        break;
        case "A+":
        console.log("Grade A+")
        break;
        case "A":
        console.log("Grade A")
        break;
        case "B":
        console.log("Grade B")
        break;
        case "C" :
        console.log("Grade C")
        break;
        case "Fail":
        console.log("Fail")
        break;
        default:
            console.log("Enter Valid marks")

    }


}

evaluateGrade(gradde)