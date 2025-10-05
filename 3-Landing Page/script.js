let value = document.getElementById("floatingInput");
let search_text = document.getElementsByClassName('search-result');
function search() {
    search_text[0].textContent = `You Searched For : ${value.value}`
    console.log(`You Searched For : ${value.value}`);

}