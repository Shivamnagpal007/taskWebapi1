var dataTable;
$(document).ready(function () {
    loadDataTable();
})
function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "Designation/GetAll"
        },
        "columns": [
            { "data": "dsgname", "width": "40%" },     
            {
                "data": "dsgId",
                "render": function (data) {
                    return `
                       <div>
                     <a class="btn btn-info" href="Designation/Upsert/${data}">
                     <i class="fas fa-edit"></i>
                     </a>
                     <a class="btn btn-danger" onclick=Delete("Designation/Delete/${data}")>
                     <i class="far fa-trash-alt"></i>
                     </a>
                      </div>
                    `;

                }
            }

        ]
    })
}
function Delete(url) {
    swal({
        title: "want to delete data?",
        buttons: true,
        text: "Delete Information!!",
        icon: "warning",
        dangermodel: true

    }).then((willdelete) => {
        if (willdelete) {
            $.ajax({
                url: url,
                type: "DELETE",
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        dataTable.ajax.reload();

                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            })
        }
    })
}