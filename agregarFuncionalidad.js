$(document).ready(function () {
    const btnAgregarFuncionalidad = $("#btnAgregarFuncionalidad");
  
    let contador = 1;
  
    btnAgregarFuncionalidad.click(function () {
      contador++;
  
      const newRow = `
        <div class="row">
          <div class="col-md-5">
            <input type="text" id="tipofuncionalidad${contador}" class="form-control" placeholder="Ingrese la funcionalidad">
          </div>
          <div class="form-group col-md-4">
            <select id="tipoprueba${contador}" class="form-control-tipo-prueba">
              <option value="">Tipo de Prueba</option>
              <option value="Carga">Carga</option>
              <option value="Carga y Estrés">Carga y Estrés</option>
            </select>
          </div>

          <div class="col-md-3">
            <a href="#" class="btnDetalle" data-toggle="modal" data-target="#" data-fila="${contador}">Ver detalle</a>
          </div>    

          
        </div>
      `;
  
      const btnRow = btnAgregarFuncionalidad.closest(".row");
      $(newRow).insertBefore(btnRow);
    });


    $(document).on("click", ".btnDetalle", function () {
        const filaNumero = $(this).attr("data-fila");
        const tipoPruebaSeleccionado = $(`#tipoprueba${filaNumero}`).val();

        if (tipoPruebaSeleccionado === "Carga") {
        $("#modalPruebaCarga").modal("show");
        } else if (tipoPruebaSeleccionado === "Carga y Estrés") {
        $("#modalPruebaCargaEstres").modal("show");
        }
    });
  });
  