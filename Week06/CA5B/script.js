//Fill in the ??? to complete the function object.
function Singer(name, specialty, power, hitpoints, level, gender) {
  this.name = name;
  this.specialty = specialty;
  this.power = power;
  this.hitPoints = hitpoints;
  this.level = level;
  this.gender = gender;
  this.maxPower = function () {
    return this.power * this.level - this.hitPoints;
  };
  this.singerProfile = function () {
    output = `${this.name} Level ${this.level}, Gender ${
      this.gender
    }, Specialty '${this.specialty}' 
    Power ${this.power}, Hitpoints: ${this.evalHitPoints(this.hitPoints)}`;
    return output;
  };
  this.evalHitPoints = function (hp) {
    if (hp <= 50) return "Weak";
    else if (hp <= 70) return "Strong";
    else if (hp <= 100) return "Amazing";
    else return "NA";
  };
}

//Create the function objects momobae and minabae.
momobae = new Singer("Momobae", "K-Pop", 49, 28, 7, "Female");
//momobae.singerProfile();
minabae = new Singer("Minibae", "Classic", 80, 100, 10, "Male");
//minabae.singerProfile();

// Part (c)
let singers = [momobae, minabae];
for (let i = 0; i < singers.length; i++)
  console.log(singers[i].singerProfile());

//create a new element using javascript
let newDiv1 = document.createElement("div");
//add class to element through javascript
newDiv1.classList.add("mystyle");
// and give it some content
newDiv1.innerHTML = "Momobae's Singer Profile: <br>" + momobae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv1);

//create a new element using javascript
let newDiv2 = document.createElement("div");
//add class to element through javascript
newDiv2.classList.add("mystyle");
// and give it some content
newDiv2.innerHTML = "Minabae's Singer Profile: <br>" + minabae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv2);
