<template>
  <h5> {{ info }}</h5>
  <div class="mb-3 row">

    <label for="barCode" class="col-sm-2 col-form-label">Habitación asignada</label>
      <select name="barCode" id="barCode">
        <option value="101A">101A</option>
        <option value="101B">101B</option>
        <option value="201A">201A</option>
        <option value="201B">201B</option>
      </select>

    <label for="inputPassword" class="col-sm-2 col-form-label">Nombre del paciente</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword" :value="(this.patientName != '' || this.patientName != null || this.patientName != undefined) ? this.patientName : this.novalor">
    </div>

  </div>
</template>

<script>
    export default {
        props: {
          barCode: String,
          patientName: String
        },
        data() {
            return {
              novalor: "No hay valor",
                info: "Digite la información del paciente:"
            };
        }
    };
</script>