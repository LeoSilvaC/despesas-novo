let personId = 0;

function addPerson() {
  personId++;
  const personDiv = document.createElement("div");
  personDiv.classList.add("person");
  personDiv.id = `person-${personId}`;

  const submitInput = document.querySelector("#form-input").value;

  personDiv.innerHTML = `
            <h3>${submitInput} <button class="remove" onclick="removePerson(${personId})">Remover Pessoa</button></h3>
            <div class="product-list" id="product-list-${personId}">
                <ul></ul>
            </div>
            <input type="text" id="product-name-${personId}" placeholder="Nome do Produto">
            <input type="number" id="product-value-${personId}" placeholder="Valor do Produto">
            <button onclick="addProduct(${personId})">Adicionar Produto</button>
        `;

  document.getElementById("person-list").appendChild(personDiv);
}

function removePerson(id) {
  document.getElementById(`person-${id}`).remove();
}

function addProduct(personId) {
  const productName = document.getElementById(`product-name-${personId}`).value;
  const productValue = document.getElementById(
    `product-value-${personId}`
  ).value;

  if (productName && productValue) {
    const productList = document
      .getElementById(`product-list-${personId}`)
      .querySelector("ul");
    const li = document.createElement("li");

    li.innerHTML = `${productName} - R$ ${productValue} <button class="remove" onclick="removeProduct(this)">Remover Produto</button>`;
    productList.appendChild(li);

    document.getElementById(`product-name-${personId}`).value = "";
    document.getElementById(`product-value-${personId}`).value = "";
  }
}

function removeProduct(element) {
  element.parentElement.remove();
}
