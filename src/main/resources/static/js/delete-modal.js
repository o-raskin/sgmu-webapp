$('#exampleModal').on('show.bs.modal',
    function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var id = button.data('id'); // Extract info from data-* attributes
        var title = button.data('title');
        var date = button.data('date');
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('#title').text(title);
        modal.find('#date').text('Последнее обновление: ' + date);
        document.getElementById("id").value = id;
    })
