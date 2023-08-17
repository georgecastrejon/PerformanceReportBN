$(document).ready(function () {
    const btnAgregarResultadoCarga = $("#btnAgregarResultadoCarga");
  
    let contador = 1;
  
    btnAgregarResultadoCarga.click(function () {
      contador++;
  
      const newRow = `
        <div class="row">
            <div class="col-md-3">
                <h6>Resultados</h6>
                <textarea id="resultadocarga${contador}" class="form-control" rows="3" style="color: black;" placeholder="Ingrese los resultados"></textarea>
                <input type="file" class="btn btn-secondary" style="padding: 1px; font-size: 12px;" id="graficoresultadocarga${contador}">
            </div>
            <div class="col-md-3">
                <h6>Tiempo promedio respuesta</h6>
                <textarea id="promediocarga${contador}" class="form-control" rows="3" style="color: black;" placeholder="Ingrese los resultados"></textarea>
                <input type="file" class="btn btn-secondary" style="padding: 1px; font-size: 12px;" id="graficopromediocarga${contador}">
            </div>
            <div class="col-md-3">
                <h6>Rango tiempo respuesta</h6>
                <textarea id="rangocarga${contador}" class="form-control" rows="3" style="color: black;" placeholder="Ingrese los resultados"></textarea>
                <input type="file" class="btn btn-secondary" style="padding: 1px; font-size: 12px;" id="graficorangocarga${contador}">
            </div>
            <div class="col-md-3">
                <h6>TPS por minuto</h6>
                <textarea id="tpscarga${contador}" class="form-control" rows="3" style="color: black;" placeholder="Ingrese los resultados"></textarea>
                <input type="file" class="btn btn-secondary" style="padding: 1px; font-size: 12px;" id="graficotpscarga${contador}">
            </div>
        </div>
      `;
  
      const btnRow = btnAgregarResultadoCarga.closest(".row");
      $(newRow).insertBefore(btnRow);
    });
  });