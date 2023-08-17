$(document).ready(function () {
    const btnAgregarResultadoEstres = $("#btnAgregarResultadoEstres");
  
    let contador = 1;
  
    btnAgregarResultadoEstres.click(function () {
      contador++;
  
      const newRow = `
        <div class="row">
            <div class="col-md-3">
                <h6>Resultados</h6>
                <textarea id="resultadoestres${contador}" class="form-control" rows="3" style="color: black;" placeholder="Ingrese los resultados"></textarea>
                <input type="file" class="btn btn-secondary" style="padding: 1px; font-size: 12px;" id="graficoresultadoestres${contador}">
            </div>
            <div class="col-md-3">
                <h6>Tiempo promedio respuesta</h6>
                <textarea id="promedioestres${contador}" class="form-control" rows="3" style="color: black;" placeholder="Ingrese los resultados"></textarea>
                <input type="file" class="btn btn-secondary" style="padding: 1px; font-size: 12px;" id="graficopromedioestres${contador}">
            </div>
            <div class="col-md-3">
                <h6>Rango tiempo respuesta</h6>
                <textarea id="rangoestres${contador}" class="form-control" rows="3" style="color: black;" placeholder="Ingrese los resultados"></textarea>
                <input type="file" class="btn btn-secondary" style="padding: 1px; font-size: 12px;" id="graficorangoestres${contador}">
            </div>
            <div class="col-md-3">
                <h6>TPS por minuto</h6>
                <textarea id="tpsestres${contador}" class="form-control" rows="3" style="color: black;" placeholder="Ingrese los resultados"></textarea>
                <input type="file" class="btn btn-secondary" style="padding: 1px; font-size: 12px;" id="graficotpsestres${contador}">
            </div>
        </div>
      `;
  
      const btnRow = btnAgregarResultadoEstres.closest(".row");
      $(newRow).insertBefore(btnRow);
    });
  });