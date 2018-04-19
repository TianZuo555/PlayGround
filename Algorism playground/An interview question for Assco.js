//Sample input = Tom, Ian, Technical Lead, 2009 | Ian, NULL, CEO,2007| Fred, Tom, Developer, 2010

//The format is name, supervisor, designation, year of joining
 
//The output should be  
//-Ian CEO 2007
 //	-Tom Technical lead 2009
    //-Fred Developer 2010


 var input = "Tom, Ian, Technical Lead, 2009 | Ian, NULL, CEO,2007| Fred, Tom, Developer, 2010 | Tian,NULL, Consultant,2017 ";

const processString = (str)=>{
  let unformatString = input.split('|');
  //store all ppl in array 
  let pplArray =[];

  unformatString.forEach((person)=>{
    let personStrArr = person.split(',');
    pplArray.push(new Person(personStrArr[0].trim(),personStrArr[2].trim(),personStrArr[3].trim(),personStrArr[1].trim()));
  });

  let formatArr= getFormatedArray(pplArray);

  displayPPL(formatArr);
};

class Person{
  constructor(name,designation,joinYear,supervisor){
    this.name = name;
    this.designation  = designation;
    this.joinYear = joinYear;
    this.supervisor = supervisor;
  }
}

const findChildren = (person, pplArray) =>{
  return pplArray.find(p=>p.supervisor === person.name);
}

const getFormatedArray = (arr) =>{
  let formatArr = []; 
  topLevelPPL = arr.filter(p=>p.supervisor ==="NULL");
  
  topLevelPPL.forEach((person)=>{
    formatArr.push(person);
    var child = person;
    while(findChildren(child,arr))
    {
      child = findChildren(child,arr);
      formatArr.push(child);    
    }
  })

  return formatArr;
}

const displayPPL = (arr) => {
  let levelString="";
  arr.forEach((person)=>{
    person.supervisor === "NULL" ? levelString = "" : levelString += "    ";
    console.log(levelString + "-" + person.name + " " + person.designation + " " + person.joinYear);
  })  
}

processString(input);
