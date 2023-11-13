const info = ['C1234 - John Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack']

console.log(info.length);

// info.forEach(element =>{
//     const step1 = [element.replace("-",",").split(",")]
//     console.log(step1);
//     const studentNumber = step1[0][0];
//     console.log(studentNumber);
//     const firstName = step1[0][1].trim().split(" ")[0];
//     console.log(firstName);
//     const lastName = step1[0][1].trim().split(" ")[1];
//     console.log(lastName);
//     const city = step1[0][2];
//     console.log(city);
//     const path = step1[0][3];
//     console.log(path);
    
    
//     // const table = document.querySelector("#table-data")
//     const tbody = document.querySelector("tbody")
//     const tr = document.createElement("tr")
//     // const td = document.createElement("td")
//     const student = document.createElement("td")
//     student.textContent = studentNumber
//     const fName = document.createElement("td")
//     fName.textContent = firstName
//     const lName = document.createElement("td")
//     lName.textContent = lastName
//     const address = document.createElement("td")
//     address.textContent = city
//     const department = document.createElement("td")
//     department.textContent = path
    
    
//     tr.appendChild(student)
//     tr.appendChild(fName)
//     tr.appendChild(lName)
//     tr.appendChild(address)
//     tr.appendChild(department)
    
    
//     tbody.appendChild(tr)
    
// })

// info.forEach(element =>{
//     const step1 = [element.replace("-",",").split(",")]
//     console.log(step1);
//     const studentNumber = step1[0][0];
//     console.log(studentNumber);
//     const firstName = step1[0][1].trim().split(" ")[0];
//     console.log(firstName);
//     const lastName = step1[0][1].trim().split(" ")[1];
//     console.log(lastName);
//     const city = step1[0][2];
//     console.log(city);
//     const path = step1[0][3];
//     console.log(path);
    
//     const trHtml = `
    
//     <td>${studentNumber}</td>
//     <td>${firstName}</td>
//     <td>${lastName}</td>
//     <td>${city}</td>
//     <td>${path}</td>
//  `  
  
//     const tbody = document.querySelector("tbody")
//     const tr = document.createElement("tr")
//     tr.innerHTML=trHtml

    
   
//     tbody.appendChild(tr)
    
// })


info.forEach(element =>{
    const step1 = [element.replace("-",",").split(",")]
    console.log(step1);
    const studentNumber = step1[0][0];
    console.log(studentNumber);
    const firstName = step1[0][1].trim().split(" ")[0];
    console.log(firstName);
    const lastName = step1[0][1].trim().split(" ")[1];
    console.log(lastName);
    const city = step1[0][2];
    console.log(city);
    const path = step1[0][3];
    console.log(path);
    
    const trHtml = `
    <tr>
    <td>${studentNumber}</td>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${city}</td>
    <td>${path}</td>
    </tr>
    
    `
    
    const tbody = document.querySelector("tbody")
    
    tbody.insertAdjacentHTML("afterbegin",trHtml)
    
})