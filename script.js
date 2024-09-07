
function toggleDescription() {
    var moreContent = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "inline";
        btnText.innerHTML = "Read less";
    } else {
        moreContent.style.display = "none";
        btnText.innerHTML = "Read more";
    }
}
