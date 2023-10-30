//your code here!

const scrollContainer = document.querySelector("#infi-list");
let elementNumber = 1;
function addTenElements(){
    for(let i=1;i<=10;i++){
        const li = document.createElement("li");
        li.innerText = `Item ${
            elementNumber++
        }`;
        scrollContainer.appendChild(li);
    }

}


scrollContainer.addEventListener("scroll",()=>{
    let totalScrollableHeight =scrollContainer.scrollHeight;
    let visibleHeight = scrollContainer.clientHeight;
    let scrolledHeight = scrollContainer.scrollTop;
    let total = totalScrollableHeight-visibleHeight-scrolledHeight;
    if(total<=4){
        addTenElements();
    }
})

addTenElements();