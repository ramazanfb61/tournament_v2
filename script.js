

// elementlere ulaş
var div = document.getElementById("grub")
var label = document.getElementById("text")
var input = document.getElementById("char-name")
var character_num = document.getElementById("char-num")
var created = document.getElementById("created") 
// create elements



// element olustur
function create_element(){

    // div olustur
    var get_div = document.createElement("div")
    created.appendChild(get_div)
    get_div.setAttribute("class","created_div")

    // label olustur
    var get_label = document.createElement("label")
    get_div.appendChild(get_label)
    get_label.setAttribute("class","text")
    get_label.innerText = "Katılımcı Gir : "

    // input olustur
    var get_input = document.createElement("input")
    get_div.appendChild(get_input)
    get_input.setAttribute("class","character-name")

}

// element olusturma isini butona click olarak baslat
function run(){
    for(let i = 0; i<character_num.value;i++){
        create_element()
        console.log("working : " + i);
    }
    
}

// Enter basıldığında kod çalısın
$("#char-num").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btn").click();
    }
});

// enter a basıldığında burdaki kod çalışır. btn tikladiginda calisacak kodlar
$("#btn").click(function(){
    var character_num = document.getElementById("char-num")
    alert("Data is : " + character_num.value);
    $("#form-in").hide()
    //$("#grub").show()
    run()
});