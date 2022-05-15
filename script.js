$(readyNow);

function readyNow() {

    $(document).on('click', '#add-button', appendArray);
    $(document).on('click', '.delete-btn', deleteButton);
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

function appendArray() {
    firstName = $('#emp-first-name').val();
    lastName = $('#emp-last-name').val();
    idNumber = $('#id').val();
    jobTitle = $('#job-title').val();
    annualSalary = $('#annual-sal').val();

    if (!firstName || !lastName || !idNumber || !jobTitle || annualSalary === '') {     // tried to utilize if inputField == null but it doesnt work?
        alert('Please fill in all input fields.');
        return false;
    }

    newEmployee(firstName, lastName, idNumber, jobTitle, annualSalary);
    console.log(newEmployeeArray);



    $('.employee-input').val('');

    appendDom()
}

function appendDom() {
    $('#calc-table-body').empty();

    for (let i = 0; i < newEmployeeArray.length; i ++) {
        
        $('#calc-table-body').append(`
        <tr>
            <td>${newEmployeeArray[i].first}</td>
            <td>${newEmployeeArray[i].last}</td>
            <td>${newEmployeeArray[i].id}</td>
            <td>${newEmployeeArray[i].title}</td>
            <td>${newEmployeeArray[i].salary}</td>
        
            <td>
            <button class="delete-btn" id = "${i}">
                Delete Line
            </button>
            </td>
        </tr>`  
        );
       ;
       // $(`#${i}`).data(`${newEmployeeArray[i].id}, ${i}`);  // fuck u .data()
       
    }
    displayTotal()
}

function deleteButton() {
    let index = $(this).attr('id')
    
    newEmployeeArray.splice(index, 1)
    appendDom();

}


function displayTotal() {
    let yearlySumSpending = 0;
    for (let employees of newEmployeeArray) {
        yearlySumSpending += Number(employees.salary);
    }
    $('#monthly-total-salary').empty();
    $('#monthly-total-salary').append((yearlySumSpending / 12).toFixed(2));
    if (Number(yearlySumSpending / 12) > 20000) {
        let line = $('#total-monthly');
        line.addClass('background-color-red');
    }
}

