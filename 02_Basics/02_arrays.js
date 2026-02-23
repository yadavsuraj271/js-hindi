// ================= SURaj EXAMPLE =================

// Suppose Suraj has two skill groups

const suraj_frontend = ["HTML", "CSS", "JavaScript"]
const suraj_backend = ["NodeJS", "Express", "MongoDB"]



// ================= PUSH (Wrong Way to Merge) =================

// suraj_frontend.push(suraj_backend)
// console.log(suraj_frontend)

// Output:
// ["HTML","CSS","JavaScript",["NodeJS","Express","MongoDB"]]

// ✔ push() adds entire array as ONE element
// ✔ Creates nested array
// ❌ Not proper merging



// ================= CONCAT =================

// const allSkills = suraj_frontend.concat(suraj_backend)
// console.log(allSkills)

// Output:
// ["HTML","CSS","JavaScript","NodeJS","Express","MongoDB"]

// ✔ Proper merge
// ✔ Returns new array
// ✔ Original arrays unchanged



// ================= SPREAD (Best Modern Way) =================

const allSkillsModern = [...suraj_frontend, ...suraj_backend]
console.log(allSkillsModern)

// Output:
// ["HTML","CSS","JavaScript","NodeJS","Express","MongoDB"]

// ✔ Clean
// ✔ Most used in React projects
// ✔ Preferred method



// ================= NESTED ARRAY =================

const surajProjects = [
  "Portfolio",
  "E-commerce",
  ["News Website", "PDF Notes Website"],
  ["Chatbot", ["WordPress Plugin"]]
]

const flatProjects = surajProjects.flat(Infinity)
console.log(flatProjects)

// Output:
// ["Portfolio","E-commerce","News Website","PDF Notes Website","Chatbot","WordPress Plugin"]

// ✔ flat(Infinity) removes all nesting



// ================= Array.from =================

console.log(Array.from("Suraj"))

// Output:
// ["S","u","r","a","j"]

// ✔ Converts string into array



// Important Case

console.log(Array.from({name: "Suraj"}))

// Output:
// []

// ✔ Object is not iterable
// ✔ Must specify how to extract values



// ================= Array.of =================

let income1 = 50000
let income2 = 20000
let income3 = 15000

console.log(Array.of(income1, income2, income3))

// Output:
// [50000,20000,15000]

// ✔ Creates array from values