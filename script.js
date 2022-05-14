$(readyNow);

function readyNow() {

    $(document).on('click', '#add-button', appendDom);
    $(document).on('click', '#delete-btn', deleteButton);
   
}
let newEmployeeArray = []
function newEmployee(firstName, lastName, idNumber, jobTitle, annualSalary) {
    const newEmployeeObject = {
        first: firstName,
        last: lastName,
        id: idNumber,
        title: jobTitle,
        salary: annualSalary
    }

    newEmployeeArray.push(newEmployeeObject);
}

function appendDom() {
    firstName = $('#emp-first-name').val();
    lastName = $('#emp-last-name').val();
    idNumber = $('#id').val();
    jobTitle = $('#job-title').val();
    annualSalary = $('#annual-sal').val();

    newEmployee(firstName, lastName, idNumber, jobTitle, annualSalary);
    console.log(newEmployeeArray);

    if (!firstName || !lastName || !idNumber || !jobTitle || !annualSalary) {     // tried to utilize if inputField == null but it doesnt work?
        alert('Please fill in all input fields.');
    }

    $('.employee-input').val('');

    $('#calc-table-body').empty();

    for (let employees of newEmployeeArray) {
        $('#calc-table-body').append(`
    <tr>
        <td>${employees.first}</td>
        <td>${employees.last}</td>
        <td>${employees.id}</td>
        <td>${employees.title}</td>
        <td>${employees.salary}</td>
        
        <td>
                
            <button id="delete-btn">
                Delete Line
            </button>
        </td>
    </tr>  
`);
    }
    displayTotal()
}

function deleteButton() {
    tr = $(this).parent().parent();

    let empName = tr.first().val();
    //  alert(`Removed ${empName}'s data.`)    not sure how to access name

    tr.remove();
}
let yearlySumSpending = 0
function displayTotal() {
    for (let employees of newEmployeeArray) {
        yearlySumSpending += employees.salary;
    }
    $('#monthly-total-salary').empty()
    $('#monthly-total-salary').append((yearlySumSpending / 12).toFixed(2));
    if (Number(yearlySumSpending/12) > 20000){
        let line = $('#total-monthly');
        line.addClass('background-color-red');
    }
}

