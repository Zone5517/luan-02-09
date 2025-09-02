// Seleciona todos os <li> dentro da lista
const listItems = document.querySelectorAll("#style-list li");

// Adiciona evento de clique para cada item
listItems.forEach(item => {
  item.addEventListener("click", (event) => {
    // Garante que o clique sempre atinja o <li>
    const li = event.target.closest("li");

    if (li) {
      // Remove .selected de todos
      listItems.forEach(i => i.classList.remove("selected"));

      // Adiciona .selected no item clicado
      li.classList.add("selected");
    }
  });
});
