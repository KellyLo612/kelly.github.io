var btn = document.getElementById("btn");
var title = document.getElementById("title");
var context = document.getElementById("context");
var list = document.getElementById("list");

btn.addEventListener("click", function () {
    list.innerHTML = list.innerHTML + `
    <div class="article">
        <h2>${title.value}</h2>
        <p>${context.value}</p>
    </div>
    `
    title.value = "";
    context.value = "";
}
)