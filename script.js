$(readyNow);
//modeled this project after the week 6 garage project (idea cred to)
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
// empties table body, loops through newEmployee array and appends tr for each object in array
//each appended button has an id of the index of the object used for the information at that row
//calls display total after exiting loop
function appendDom() {
    $('#calc-table-body').empty();

    for (let i = 0; i < newEmployeeArray.length; i++) {

        $('#calc-table-body').append(
        `<tr>
            <td>${newEmployeeArray[i].first}</td>
            <td>${newEmployeeArray[i].last}</td>
            <td>${newEmployeeArray[i].id}</td>
            <td>${newEmployeeArray[i].title}</td>
            <td>${newEmployeeArray[i].salary}</td>
        
            <td>
                <button class ="delete-btn" id=${i}> Delete </button>
            </td>
        </tr>`
        );
       // $('tr').last().data('employee', newEmployeeArray[i]);  //test
       // console.log($('tr').last().data('employee'), 'wow')    //test
        
       // $(`#${i}`).data(`${newEmployeeArray[i].id}, ${i}`);  // fuck u .data()

    }
    displayTotal()
}
// uses .attr to grab the value of the id of the button clicked uses this value to splice
//the object at said index in the array of new employees
//since the rows are appended on id corresponds with index in the array
function deleteButton() {

    /* console.log('ay')
    let index = $(this).parents('tr').data('employee');
    console.log(index, 'deleted') */
    let index = $(this).attr('id');
    $(this).remove();

    newEmployeeArray.splice(index, 1);
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
        let line = $('#monthly-total-salary');
        line.addClass('background-color-red');
        }
    else{
        let line = $('#monthly-total-salary');
        line.removeClass('background-color-red')
    }
    
}

