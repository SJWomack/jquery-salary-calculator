$(readyNow);

function readyNow() {
   
    $(document).on('click', '#add-button', appendDom);
}
let newEmployeeArray = []
function newEmployee(firstName,lastName,idNumber, jobTitle, annualSalary){
    const newEmployeeObject = {
        first: firstName,
        last: lastName,
        id: idNumber,
        title: jobTitle,
        salary: annualSalary
    }

    newEmployeeArray.push(newEmployeeObject);
}

function appendDom(){
    firstName = $('#emp-first-name').val()
    lastName = $('#emp-last-name').val()
    idNumber = $('#id').val()
    jobTitle = $('#job-title').val()
    annualSalary = $('#annual-sal').val()

    newEmployee(firstName,lastName,idNumber, jobTitle, annualSalary);
    console.log(newEmployeeArray)
    
    if (!firstName || !lastName|| !idNumber || !jobTitle|| !annualSalary){     // tried to utilize if inputField == null but it doesnt work?
        alert('Please fill in all input fields.')
    }

    $('.employee-input').val('')

   for (let employees of newEmployeeArray){
    $('#employee-calc-table').append(`
    <tr>
        <td>${employees.first}</td>
        <td>${employees.last}</td>
        <td>${employees.id}</td>
        <td>${employees.title}</td>
        <td>${employees.annualSalary}</td>
        
        <td>
                </button>
            <button class="delete-btn">
                Delete Line
            </button>
        </td>
    </tr>  
`);
   }
}

