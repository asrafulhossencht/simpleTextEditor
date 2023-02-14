// ===================================
//         Utilities Function
// ===================================
function fontStyle(targetId, targetStyleClass, eventEle, eventBgClass, eventColorClass) {
    const targetEle = document.getElementById(targetId);
    targetEle.classList.toggle(targetStyleClass);
    
    eventEle.classList.toggle(eventBgClass);
    eventEle.classList.toggle(eventColorClass);
    
    targetEle.focus();
}


function styleByClass(targetClass, targetStyleClassArr, eventBgClass, eventColorClass) {
    const targetItems = [...document.getElementsByClassName(targetClass)];

    if (Array.isArray(targetStyleClassArr) == false) {
        console.log("Error: Invalid style class"); return false;
    }

    for(item of targetItems) {
        const itemStyle = targetStyleClassArr[targetItems.indexOf(item)];
        item.addEventListener("click", (event) => {
            const eventElement = event.target,
                textEditor = document.getElementById("text-editor");

            for (targetStyleClass of targetStyleClassArr) {
                if (textEditor.classList.contains(targetStyleClass)) {
                    textEditor.classList.remove(targetStyleClass);
                }

                const targetItem = targetItems[targetStyleClassArr.indexOf(targetStyleClass)];
                if (targetItem.children.length == 1) {
                    targetItem.children[0].classList.remove(eventBgClass);
                    targetItem.children[0].classList.remove(eventColorClass);
                } else {
                    targetItem.classList.remove(eventBgClass);
                    targetItem.classList.remove(eventColorClass);
                }
            }
            eventElement.classList.add("bg-blue-700");
            eventElement.classList.add("text-white");
            textEditor.classList.add(itemStyle);
            textEditor.focus();
        })
    }


}


// ===================================
//          Font Style Event
// ===================================
document.getElementById("bold-btn").addEventListener("click", (event) => {
    const eventElement = event.target;
    fontStyle("text-editor", "font-bold", eventElement, "bg-blue-700", "text-white");
});

document.getElementById("italic-btn").addEventListener("click", (event) => {
    const eventElement = event.target;
    fontStyle("text-editor", "italic", eventElement, "bg-blue-700", "text-white");
});

document.getElementById("underline-btn").addEventListener("click", (event) => {
    const eventElement = event.target;
    fontStyle("text-editor", "underline", eventElement, "bg-blue-700", "text-white");
});



// ===================================
//       Alignment Style Event
// ===================================
styleByClass("alignment", ["text-left", "text-right", "text-center", "text-justify"], "bg-blue-700", "text-white");


// ===================================
//     Text Transformation Event
// ===================================
styleByClass("text-transformation", ["normal-case", "capitalize", "lowercase", "uppercase"], "bg-blue-700", "text-white");


// ===================================
//          Text Font Size
// ===================================
document.getElementById("font-size").addEventListener("change", (event) => {
    const textEditor = document.getElementById("text-editor");
    textEditor.style.fontSize = event.target.value + "px";
    textEditor.focus();
});



// ===================================
//              Text color
// ===================================
document.getElementById("text-color").addEventListener("change", (event) => {
    const textEditor = document.getElementById("text-editor");
    textEditor.style.color = event.target.value;
});