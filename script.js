//------------------------------ create new question start here ------------------------------//

var btn = document.getElementById("add-btn");
var un = document.getElementById("list");
var inpt = document.getElementById("add-input");
btn.addEventListener("click", function (e) {
    e.preventDefault();
    var newLi = document.createElement("li");
    newLi.setAttribute("class", "card");
    var input = document.getElementById("add-input").value;
    // console.log(input);
    // var task =inpt.value;
    if (inpt.value != 0) {
        newLi.innerHTML = `<h3>${input}</h3>
        <p><i class="fa fa-pencil-square-o" id="pencil"></i><i class="fa fa-times" id="time"></i></p>`;
        inpt.style.border = "1px solid";    
    }
    else {
        inpt.style.border = "1px solid red";
        // console.log("please Add the Question");
        return ; 
    }

    un.appendChild(newLi);

    inpt.value = "";

    //------------------------------ create new question start here ------------------------------//

    //----------------------------- Edit Script  Start here -----------------------------//

    var edit = document.querySelectorAll(".fa-pencil-square-o");
    // var clear = document.getElementById("remove");

    for (var i = 0; i < edit.length; i++) {
        edit[i].addEventListener("click", function () {

            var para = this.parentElement;
            if (para.nextElementSibling == null) {
                var EditText = document.createElement("input");
                EditText.setAttribute("placeHolder", "Edit your note");

                EditText.classList.add("edit-note")
                var text = this.parentElement.parentElement;

                text.appendChild(EditText);

            }
            else {
                // console.log("no");
            }


            document.querySelector(".edit-note").addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    var focus = document.querySelector(".edit-note").value;
                    var textPrint = this.previousElementSibling.previousElementSibling;
                    console.log(textPrint);
                    textPrint.innerHTML = focus;
                    EditText.parentElement.removeChild(EditText);
                }
            });

        });
    }

    //----------------------------- Edit Script End here-----------------------------//

    //------------------------ Delete script Start here ------------------------//

    var erase = document.querySelectorAll(".fa-times");

    for (var i = 0; i < erase.length; i++) {
        erase[i].addEventListener("click", function () {
            // console.log("hello");
            var del = this.parentElement.parentElement;
            del.parentElement.removeChild(del);
            // console.log(del);
        });
    }

    //------------------------ Delete script End here ------------------------//

    //------------------------- hide logic Start here -------------------------//


    var hide = document.getElementById("hide");
    var noteList = document.querySelector(".note-list");
    var hideList = document.querySelector("#hide-list label");
    var NoteHide = noteList.querySelector('#list');
    var noteUnhide = NoteHide.getElementsByTagName('li');
    // console.log(hideList);
    // console.log(NoteHide);
    console.log(noteUnhide);
    hideList.onclick = function () {
        if (hide.checked) {
            noteList.style.display = "none";
            hideList.innerHTML = "Expand Notes";

        }
        else {
            noteList.style.display = "block";
            hideList.innerHTML = "Hide Notes";
        }
    }

    if (noteUnhide.length == 0) {
        var New = document.createElement("h4");
        // console.log(New);
        var Text = document.createTextNode("Create Your Notes...");
        // console.log(Text);
        var NewText = New.appendChild(Text);
        // console.log(New);
        noteList.appendChild(NewText);
        New.setAttribute("style", "display: block; text-align: center; color: red;");
        // noteList.style.textAlign = "center";
        hideList.style.display = "none";
        console.log("hide");
    }
    else{
        // New.noteList.removeChild(New);
        // noteList.h4.style.display = "none";
        noteList.lastElementChild.style.display = "none";
        // New.setAttribute("style", "display: none");
        console.log("not hide");
        hideList.style.display = "inline-block";
    }

    //------------------------- hide logic End here -------------------------//


    //-------------------------- Search Logic Start here --------------------------//

    var search = document.querySelector("#search-note input");

    search.addEventListener("keyup", function() {
    var inputVal = search.value.toUpperCase();
    // console.log("fire",inputVal);

    var liCards = document.getElementsByClassName('card');
    // console.log(liCards);

    for(var j = 0; j < liCards.length; j++){
        var head = liCards[j].getElementsByTagName('h3')[0].innerHTML;
        // console.log(head);

        // var textValue = head.innerHTML;

        // console.log(textValue);


        if(head.toUpperCase().indexOf(inputVal) > -1) {
        liCards[j].style.display = '';
        }
        else {
        liCards[j].style.display = 'none';
        }

    }

    });
});


//-------------------------- Search Logic End here --------------------------//




//-- Edit Text logic for already element avalible at html gstart here --//

var edit = document.querySelectorAll(".fa-pencil-square-o");
var clear = document.getElementById("remove");

for (var i = 0; i < edit.length; i++) {
    edit[i].addEventListener("click", function () {
        var para = this.parentElement;
        if (para.nextElementSibling == null) {
            var EditText = document.createElement("input");
            EditText.setAttribute("placeHolder", "Edit your note");

            EditText.classList.add("edit-note")
            var text = this.parentElement.parentElement;

            text.appendChild(EditText);

        }
        else {
            // console.log("no");
        }


        document.querySelector(".edit-note").addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                var focus = document.querySelector(".edit-note").value;
                var textPrint = this.previousElementSibling.previousElementSibling;
                // console.log(textPrint);
                textPrint.innerHTML = focus;
                EditText.parentElement.removeChild(EditText);
            }
        });

    });
}

//-- Edit Text logic for already element avalible at html  End here --//


//-- delete Text logic for already element avalible at html Start here --//

var erase = document.querySelectorAll(".fa-times");

for (var i = 0; i < erase.length; i++) {
    erase[i].addEventListener("click", function () {
        // console.log("hello");
        var del = this.parentElement.parentElement;
        del.parentElement.removeChild(del);
        // console.log(del);
    });
}


//-- Edit Text logic for already element avalible at html end here --//

//------------------------- hide logic Start here -------------------------//

var hide = document.getElementById("hide");
var noteList = document.querySelector(".note-list");
var hideList = document.querySelector("#hide-list label");
var NoteHide = noteList.querySelector('#list');
var noteUnhide = NoteHide.getElementsByTagName('li');
// console.log(hideList);
// console.log(NoteHide);
// console.log(noteUnhide);
hideList.onclick = function () {
    if (hide.checked) {
        noteList.style.display = "none";
        hideList.innerHTML = "Expand Notes";

    }
    else {
        noteList.style.display = "block";
        hideList.innerHTML = "Hide Notes";
    }
}

//------------------------- hide logic for no li founded then it will disapper the hide label -------------------------//

// var disapper = document.getElementsByClassName(".fa-times");
// console.log(disapper);

// disapper.addEventListener("unload",function() {

    if (noteUnhide.length == 0) {
        var New = document.createElement("h4");
        // console.log(New);
        var Text = document.createTextNode("Create Your Notes...");
        // console.log(Text);
        New.appendChild(Text);
        // console.log(New);
        noteList.appendChild(New);
        New.setAttribute("style", "display: block; text-align: center; font-size: 24px");
        // noteList.style.textAlign = "center";
        hideList.style.display = "none";
        // console.log("hide");
    }
    else {
        // noteList.h3.style.display = "none"
        // New.querySelectorAll(".note-list").removeChild(New);  
        // New.setAttribute("style", "display: none");
        noteList.lastElementChild.style.display = "none";
        // console.log("not hide");
        hideList.style.display = "inline-block";
    }
    
// });
//------------------------- hide logic End here -------------------------//


//-------------------------- Search Logic Start here--------------------------//

var search = document.querySelector("#search-note input");

search.addEventListener("keyup", function() {
    var inputVal = search.value.toUpperCase();
    // console.log("fire",inputVal);

    var liCards = document.getElementsByClassName('card');
    // console.log(liCards);

    for(var j = 0; j < liCards.length; j++){
        var head = liCards[j].getElementsByTagName('h3')[0].innerHTML;
        // console.log(head);

        // var textValue = head.innerHTML;

        // console.log(textValue);


        if(head.toUpperCase().indexOf(inputVal) > -1) {
            liCards[j].style.display = '';
        }
        else {
            liCards[j].style.display = 'none';
        }

    }

});



// var search = document.querySelector("#search-note input");
// search.addEventListener("input", function(){
    
//     var inputVal = search.value.toUpperCase();
//     console.log("fire",inputVal);

//     var liCards = document.getElementsByClassName('card');
//     Array.from(liCards).forEach(function(liCards){
//     var cardTxt = liCards.getElementsByTagName("h3")[0].innerText;
//     // console.log(cardTxt);
//         if(cardTxt.toUpperCase().includes(inputVal)){
//             liCards.style.display = "block";
//         }
//         else {
//                   liCards.style.display = "none";
//               }
//               // console.log(cardTxt);
//     });
// });

    
// ----------------------------------- Search Logic End here---------------------------------//