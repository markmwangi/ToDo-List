$(document).ready(function() {
    let symbol = '<span class="symbol">></span>';

    //Enter key listener
    $('#list-item').on('keydown', function(event){
        event.which == 13? update() : false;
    });

    //Button listener for the add button
    $('#add-btn').click(function(){
        update();
    });

    //Validates input and adds it to container
    function update(){
        let listItem = $('#list-item').val();
        listItem = listItem.replace(/<(|\/|[^>\/bi]|\/[^>bi]|[^\/>][^>]+|\/[^>][^>]+)>/g, '');
        if(listItem.trim() != ''){
            let add = `<span class="items">${symbol}${listItem}</span>`;
            add = $(add).hide();
            $('.container').append(add);
            $('.container .items').show(400);
            $("#list-item").val('');
        }
    }
    
    //Remove the selected span on click
    $(document).on('click', '.items',  function(){
        let listItem = $(this);

        $(listItem).hide(300, function(){
            $(listItem).remove();
            console.log('deleted');
        });
    });

    //Updates list-items when hovered 
    $(document).on('mouseover', '.items', function(event){
        let item = $(event.target).get(0);
        let symbol = $(item).find('.symbol').get(0);
        $(item).hover(function(e){
            $(symbol).css('color', 'red');
            $(symbol).text('-');
        }, function(){
            $(symbol).css('color', 'black');
            $(symbol).text('>');
        });
    });
});