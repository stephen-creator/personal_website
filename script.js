//Fun facts div toggle
let factsContainer = document.querySelector("#fun_facts")
let btn = document.querySelector("#toggle")


btn.onclick = function () {
    if (factsContainer.style.display !== "none") {
      factsContainer.style.display = "none";
    } else {
      factsContainer.style.display = "block";
    }
};

//Mouseevent for fun facts color
let factsHeader = document.querySelector("#facts_header")
factsHeader.onmouseover = function(){
    factsHeader.style.color = "black"
}
factsHeader.onmouseout = function(){
    factsHeader.style.color = "#617865";
}


