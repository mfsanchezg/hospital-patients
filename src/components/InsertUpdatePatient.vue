<template>
  <h5> Digite la información del paciente </h5>
<div class="d-inline-flex p-2 bd-highlight">
  <form @submit.prevent="generateHash">
    
      <div class="mb-3">
        <label for="barCode" class="form-label">Habitación asignada:</label>
        <select v-model="itemBarCode" class="form-select" name="barCode" id="barCode">
          <option value="0">Seleccione habitación...</option>
          <option value="101A">101A</option>
          <option value="101B">101B</option>
          <option value="201A">201A</option>
          <option value="201B">201B</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="inputName" class="form-label">Nombre:</label>
        <input v-model.trim="itemName" type="text" placeholder="Nombre completo del paciente" class="form-control" id="inputName">
      </div>

      <div class="mb-3">
        <label for="inputId" class="form-label">Número de identificación:</label>
        <input v-model="goodsNo" type="text" placeholder="Identificación" class="form-control" id="inputId">
      </div>

      <div class="mb-3">
        <label for="inputBrazalete" class="form-label">Brazalete:</label>
        <input v-model="stock" type="text" placeholder="Brazalete" class="form-control" id="inputBrazalete">
      </div>

      <div class="mb-3">
        <label for="inputBirthdate" class="form-label">Fecha de nacimiento:</label>
        <input v-model="manufacture" type="date" class="form-control" id="inputBirthdate">
      </div>

      <div class="mb-3">
        <label for="inputAge" class="form-label">Edad:</label>
        <input v-model="storageCondition" placeholder="Edad" type="number" min=0 class="form-control" id="inputAge">
      </div>
    
      <div class="mb-3">
        <label for="selectSex" class="form-label">Sexo:</label>
        <select v-model="eatMethod" class="form-select" name="selectSex" id="selectSex">
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="selectRH" class="form-label">Grupo y RH:</label>
        <select v-model="itemProductionPlace" class="form-select" name="selectRH" id="selectRH">
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
        <input v-model="license" type="text" placeholder="EPS" class="form-control" id="inputEPS">
      </div>

      <div class="mb-3">
        <label for="inputAlergias" class="form-label">Alergias:</label>
        <input v-model="specifications" type="text" placeholder="Alergias" class="form-control" id="inputAlergias">
      </div>

      <div class="mb-3">
        <label for="selectRiesgoCaida" class="form-label">Riesgo de caida:</label>
        <select v-model="grade" class="form-select" name="selectRiesgoCaida" id="selectRiesgoCaida">
          <option value="Bajo">Bajo</option>
          <option value="Medio">Medio</option>
          <option value="Medio">Alto</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="inputDoctorTratante" class="form-label">Doctor tratante:</label>
        <input v-model="company" type="text" placeholder="Doctor tratante" class="form-control" id="inputDoctorTratante">
      </div>

      <div class="mb-3">
        <label for="inputHistoriaClinica" class="form-label">Link historia clínica:</label>
        <input v-model="itemQrCode" type="text" placeholder="Historia clínica" class="form-control" id="inputHistoriaClinica">
      </div>

      <div class="mb-3">
        <label for="inputEntranceDate" class="form-label">Fecha de ingreso:</label>
        <input v-model="mixture" type="date" class="form-control" id="inputEntranceDate">
      </div>

      <div class="mb-3">
        <label for="inputEntranceTime" class="form-label">Hora de ingreso:</label>
        <input v-model="itemBaseUnit" type="time" class="form-control" id="inputEntranceTime">
      </div>

      <button type="submit" class="btn btn-primary"> Agregar paciente </button>
      
  </form>
</div>
</template>

<script>
    import {md5} from "md5";
    
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
        
          itemBarCode:             '0',
          itemName:                '',
          merchantGoodsId:         this.itemBarCode,
          merchantGoodsCategoryId: this.itemBarCode,
          goodsNo:                 '',
          stock:                   '',
          manufacture:             '',
          storageCondition:        '',
          eatMethod:               '',
          itemProductionPlace:     '',
          license:                 '',
          specifications:          '',
          grade:                   '',
          company:                 '',
          itemQrCode:              '',
          mixture:                 '',
          itemBaseUnit:            '',
          categoryName:            'Paciente'
          
        };
    },

    methods: {
      save(){
        
        fetch('https://sg.yalabi.net/open/saveOrGoods', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            //'veryText': hash1,
            'merchantCode': 'MC1220',
            'type': '1'
        },
        body: JSON.stringify({
          name: this.enteredName,
          rating: this.chosenRating,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // ...
          } else {
            throw new Error('Could not save data!');
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });

      },
      
      generateHash(){
        let hash1 = md5("83C3A53C05553cb");
        console.log(hash1);
      }
    }
  };
</script>