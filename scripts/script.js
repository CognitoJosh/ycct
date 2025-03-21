document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); 
        window.location.href = "view.html"; 
    });
}); 
document.addEventListener("DOMContentLoaded", function () {
    let celebrateDiv = document.getElementById("celebrate");
    let text = celebrateDiv.innerText.trim(); 
    let words = text.split(/\s+/); 
    
    let pyramidText = "";
    let rows = Math.floor(Math.sqrt(2 * words.length)); 
    let index = 0;
    
    for (let i = rows; i > 0 && index < words.length; i--) {
        pyramidText += words.slice(index, index + i).join(" ") + "\n"; 
        index += i; 
    }

    celebrateDiv.innerText = pyramidText; 
});