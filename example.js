/**
 * Created by mansikhemka on 12/18/16.
 */



$(document).ready(()=>{
    $('#get-data').click(()=>{
        var showData = $('#show-data');

        $.getJSON('example.json',(data)=>{
            console.log(data);

            var items = data.items.map((item)=>{
                return item.key +":"+ item.value;
            })

            showData.empty();

            if(items.length){
                var content = "<li>"+ items.join('</li><li>') + "</li>";
                var list = $('<ul />').html(content);
                showData.append(list);
            }
        });
        showData.text("Loading Json File");
    });

});