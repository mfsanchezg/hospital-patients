<template>
  <h5> {{ info }}</h5>
<div class="d-inline-flex p-2 bd-highlight">
  <form @submit.prevent="save">
    
      <div class="mb-3">
        <label for="barCode" class="form-label">Habitación asignada:</label>
        <select v-model="room" class="form-select" name="barCode" id="barCode">
          <option value="101A">101A</option>
          <option value="101B">101B</option>
          <option value="201A">201A</option>
          <option value="201B">201B</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="inputName" class="form-label">Nombre:</label>
        <input v-model.trim="inputPatientName" type="text" placeholder="Nombre completo del paciente" class="form-control" id="inputName">
      </div>

      <div class="mb-3">
        <label for="inputId" class="form-label">Número de identificación:</label>
        <input type="text" placeholder="Identificación" class="form-control" id="inputId">
      </div>

      <div class="mb-3">
        <label for="inputBrazalete" class="form-label">Brazalete:</label>
        <input type="text" placeholder="Brazalete" class="form-control" id="inputBrazalete">
      </div>

      <div class="mb-3">
        <label for="inputBirthdate" class="form-label">Fecha de nacimiento:</label>
        <input type="date" class="form-control" id="inputBirthdate">
      </div>

      <div class="mb-3">
        <label for="inputAge" class="form-label">Edad:</label>
        <input v-model="age" type="number" min=0 class="form-control" id="inputAge">
      </div>
    
    
    
      <div class="mb-3">
        <label for="selectSex" class="form-label">Sexo:</label>
        <select class="form-select" name="selectSex" id="selectSex">
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="selectRH" class="form-label">Grupo y RH:</label>
        <select class="form-select" name="selectRH" id="selectRH">
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="inputEPS" class="form-label">EPS:</label>
        <input type="text" placeholder="EPS" class="form-control" id="inputEPS">
      </div>

      <div class="mb-3">
        <label for="inputAlergias" class="form-label">Alergias:</label>
        <input type="text" placeholder="Alergias" class="form-control" id="inputAlergias">
      </div>

      <div class="mb-3">
        <label for="selectRiesgoCaida" class="form-label">Riesgo de caida:</label>
        <select class="form-select" name="selectRiesgoCaida" id="selectRiesgoCaida">
          <option value="Bajo">Bajo</option>
          <option value="Medio">Medio</option>
          <option value="Medio">Alto</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="inputDoctorTratante" class="form-label">Doctor tratante:</label>
        <input type="text" placeholder="Doctor tratante" class="form-control" id="inputDoctorTratante">
      </div>

      <div class="mb-3">
        <label for="inputHistoriaClinica" class="form-label">Link historia clínica:</label>
        <input type="text" placeholder="Historia clínica" class="form-control" id="inputHistoriaClinica">
      </div>

      <div class="mb-3">
        <label for="inputEntranceDate" class="form-label">Fecha de ingreso:</label>
        <input type="date" class="form-control" id="inputEntranceDate">
      </div>

      <div class="mb-3">
        <label for="inputEntranceTime" class="form-label">Hora de ingreso:</label>
        <input type="time" class="form-control" id="inputEntranceTime">
      </div>

      <button type="submit" class="btn btn-primary"> Agregar paciente </button>
      
  </form>
</div>
</template>

<script>
    export default {
        props: {
          barCode: {
            type: String,
            required: true
          },
          patientName: {
            type: String,
            required: true
          }
        },
        data() {
            return {
              info: "Digite la información del paciente:",
              
              room: '101A',
              inputPatientName: '',
              age: null
              
            };
        },
        methods: {
          save(){

          console.log("Name: " + this.inputPatientName)
          this.inputPatientName = '';

            //this.$emit('add-bed')
          },


        }
    };
</script>