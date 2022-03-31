const domElements = (() => {
  const $table = document.getElementById("tableData");
  const $tBody = $table.children[1];

  const _createRow = (id, name, descripcion, mamalona) => {
    const $tr = document.createElement("tr");
    const $tdId = document.createElement("td");
    const $tdName = document.createElement("td");
    const $tdDescripcion = document.createElement("td");
    const $tdMamalona = document.createElement("td");
    const $tdAcciones = document.createElement("td");



    const $buttonEdit = document.createElement("button");
    $buttonEdit.innerText = "Picale y ya";

    $tdId.innerText = id;
    $tdName.innerText = name;
    $tdDescripcion.innerText = descripcion;
    $tdMamalona.innerText = mamalona;
    $tdAcciones.appendChild($buttonEdit);


    $tr.appendChild($tdId);
    $tr.appendChild($tdName);
    $tr.appendChild($tdDescripcion);
    $tr.appendChild($tdAcciones);
    $tr.appendChild($tdMamalona);
    $tBody.appendChild($tr);
  };

  _createRow(1, "Cangrejo","Tacaño","mam");
  _createRow(2, "Patricio","Divertido","mam");
  _createRow(3, "Arenita","Fuerte","mam");
  _createRow(4,"Manuel","xD","mam");
  _createRow(5,"islas","el master");
})();
