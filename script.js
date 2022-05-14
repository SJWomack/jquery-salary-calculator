$(readyNow)

function readyNow(){
  $(document).on('click', '.button', appendDom)
}

function appendDom(){
    let empFirstName = $('#emp-first-name').val()
    let empLastName = $('#emp-last-name').val()
    let empId = $('#id').val()
    let empTitle = $('#job-title').val()
    let empSalary= $('#annual-sal').val()

    $('#salary-calc-table').append(`
    <tr>
        <td>${empFirstName}</td>
        <td>${empLastName}</td>
        <td>${empId}</td>
        <td>${empTitle}</td>
        <td>${empSalary}</td>
        
        <td>
            <button class="delete-btn">
                Delete
            </button>
        </td>
    </tr>  
`);
  
}