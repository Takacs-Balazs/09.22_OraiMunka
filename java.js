
const cellaMeret = document.getElementById('cellaMeret').value;
function keszitTabla() {
    const cellaSzam = document.getElementById('cellaSzam').value;
    const tablaKontener = document.getElementById('tablaKontener');

  let tablaHTML = '<table border="1">';
  for (let i = 0; i < cellaSzam; i++) {
    tablaHTML += '<tr>';
    for (let j = 0; j < cellaSzam; j++) {

      if ((i + j) % 2 === 0) {
        tablaHTML += `<td class="feher" onclick="pirosraValt(this)"></td>`;

      } else {
        tablaHTML += `<td class="fekete" onclick="zoldreValt(this)"></td>`;
      }
    }
    tablaHTML += '</tr>';
  }
  tablaHTML += '</table>';
  tablaKontener.innerHTML = tablaHTML;

}
function zoldreValt(elem) {

  elem.classList.add('zold');
  elem.classList.remove('piros');

}
function pirosraValt(elem) {
  elem.classList.add('piros');
  elem.classList.remove('zold');
}

function updateCellaMeret(cellaMeret) {
  const cellak = document.querySelectorAll('.feher, .fekete');
  
  cellak.forEach(cell => {
    cell.style.width = `${cellaMeret}px`;
    cell.style.height = `${cellaMeret}px`;

  }
  );

}