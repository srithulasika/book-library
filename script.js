const form=document.querySelector(".myform");
const bookName=document.querySelector("#book");
const pagesInput=document.querySelector("#pages");
const btn=document.querySelector(".add-btn");
const listBooks=document.querySelector("#listbooks");
const error=document.querySelector("#error");
const status=document.querySelector("#stats");

function validate(){
    if(bookName.value===""){
       error.textContent="please enter valid book name"
    }
    else if(pagesInput.value.length >= 10 && pagesInput.value.length <=1500 ){
        error.textContent="please enter a valid page number between 10 - 1500"
    }
}

btn.addEventListener("click",function () 
{
    const list=document.createElement("li");
    list.textContent=bookName;

    const deletebtn = document.createElement("button")
    deletebtn.textContent="Delete";

    deletebtn.addEventListener("click", function (){
        list.remove();
    });

    list.appendChild(deletebtn);

    listBooks.appendChild(list);

    bookName.textContent="";
}
);