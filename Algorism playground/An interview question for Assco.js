var input = "Tom, Ian, Technical Lead, 2009 | Ian, NULL, CEO,2007| Fred, Tom, Developer, 2010";

function getFormatedString(string) {
  let unformatString = input.split("|");
  let pplArray = [];

  unformatString.forEach(element => {
    let ppl = new staff(element);
    pplArray.push(ppl);
  });

  pplArray = pplArray.sort(function (a, b) {
    return a.piority - b.piority;
  })

  let frontText='';

  for(i=0; i<pplArray.length;i ++){
    if (i>0)
      frontText += "          ";
    console.log(frontText + "-" + pplArray[i].getDisplayed());
  }
}

function staff(str) {
  let elements = str.split(',');
  this.firstName = elements[0].trim();
  this.lastName = elements[1].trim();
  this.title = elements[2].trim();
  this.year = elements[3].trim();
  this.piority = piorities[this.title];
}

var piorities = {
  'CEO' : 1,
  'Technical Lead' : 2,
  'Developer' : 3
}

staff.prototype.getDisplayed = function () {
  let displayName;
  this.firstName == null ? displayName = this.lastName : displayName = this.firstName;
  return displayName + ' ' + this.title + ' ' + this.year;
}

getFormatedString(input);
