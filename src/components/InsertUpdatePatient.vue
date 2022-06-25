<template>
<div class="container mt-4">
  <h5 class="mb-4"> Digite la información del paciente: </h5>
  <form class="row gy-2 gx-3 align-items-center needs-validation mb-4" @submit.prevent="save" novalidate>
       
      <div class="col-sm-12 col-md-6">
        <div class="input-group input-group-sm">
          <div for="barCode" class="input-group-text col-sm-5">Hab./cama asignada:</div>
          <select v-model="itemBarCode" class="form-select col-sm-4" name="barCode" id="barCode">
            <option value="0">Seleccione...</option>
            <option value="101A">101A</option>
            <option value="101B">101B</option>
            <option value="201A">201A</option>
            <option value="201B">201B</option>
          </select>
        </div>
      </div>  

      <div class="col-sm-12 col-md-6">  
        <div class="input-group input-group-sm has-validation">
          <div for="inputId" class="input-group-text">No. de identificación:</div>
          <input v-model="goodsNo" type="text" placeholder="Identificación" class="form-control" id="inputId" required>
          <div class="invalid-feedback">
                Digite el número de identificación.
            </div>
        </div>
      </div>
      
      <div class="col-sm-12 col-md-8">  
        <div class="input-group input-group-sm has-validation">
            <div for="barCode" class="input-group-text">Nombre:</div>
            <input v-model.trim="itemName" type="text" placeholder="Nombre completo del paciente" class="form-control" id="inputName" required>
            <div class="invalid-feedback">
                Escriba un nombre por favor.
            </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4">
        <div class="input-group input-group-sm">
          <div for="inputBrazalete" class="input-group-text">Brazalete:</div>
          <input v-model="stock" type="text" placeholder="Brazalete" class="form-control" id="inputBrazalete">
        </div>
      </div>

      <div class="col-sm-12 col-md-5">
        <div class="input-group input-group-sm">
          <div for="inputBirthdate" class="input-group-text">Fecha de nacimiento:</div>
          <input v-model="manufacture" type="date" class="form-control" id="inputBirthdate">
        </div>
      </div>

      <div class="col-6 col-sm-6 col-md-4">
        <div class="input-group input-group-sm">
          <div for="inputAge" class="input-group-text">Edad:</div>
          <input v-model="storageCondition" placeholder="Edad" type="number" min=0 class="form-control" id="inputAge">
        </div>
      </div>
    
      <div class="col-6 col-sm-6 col-md-3">
        <div class="input-group input-group-sm">
          <div for="selectSex" class="input-group-text">Sexo:</div>
          <select v-model="eatMethod" class="form-select" name="selectSex" id="selectSex">
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
      </div>

      <div class="col-sm-6 col-md-4">
        <div class="input-group input-group-sm">
          <div for="selectRH" class="input-group-text">Grupo y RH:</div>
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
      </div>

      <div class="col-sm-6 col-md-8">
        <div class="input-group input-group-sm">
          <div for="inputEPS" class="input-group-text">EPS:</div>
          <input v-model="license" type="text" placeholder="EPS" class="form-control" id="inputEPS">
        </div>
      </div>  

      <div class="col-sm-6 col-md-8">
        <div class="input-group input-group-sm">
          <div for="inputAlergias" class="input-group-text">Alergias:</div>
          <input v-model="specifications" type="text" placeholder="Alergias" class="form-control" id="inputAlergias">
        </div>
      </div>  

      <div class="col-sm-6 col-md-4">
        <div class="input-group input-group-sm">
          <div for="selectRiesgoCaida" class="input-group-text">Riesgo de caida:</div>
          <select v-model="grade" class="form-select" name="selectRiesgoCaida" id="selectRiesgoCaida">
            <option value="Bajo">Bajo</option>
            <option value="Medio">Medio</option>
            <option value="Medio">Alto</option>
          </select>
        </div>
      </div>

        <div class="col-sm-12">
          <div class="input-group input-group-sm">
            <div for="inputDoctorTratante" class="input-group-text">Doctor tratante:</div>
            <input v-model="company" type="text" placeholder="Doctor tratante" class="form-control" id="inputDoctorTratante">
          </div>
        </div>

        <div class="col-sm-12">
          <div class="input-group input-group-sm">
            <div for="inputHistoriaClinica" class="input-group-text">Link historia clínica:</div>
            <input v-model="itemQrCode" type="text" placeholder="Historia clínica" class="form-control" id="inputHistoriaClinica">
          </div>
        </div>

        <div class="col-sm-6 col-md-6">
          <div class="input-group input-group-sm">
            <div for="inputEntranceDate" class="input-group-text">Fecha de ingreso:</div>
            <input v-model="mixture" type="date" class="form-control" id="inputEntranceDate">
          </div>
        </div>

        <div class="col-sm-6 col-md-6">
          <div class="input-group input-group-sm">
            <div for="inputEntranceTime" class="input-group-text">Hora de ingreso:</div>
            <input v-model="itemBaseUnit" type="time" class="form-control" id="inputEntranceTime">
          </div>
        </div>
        
        <div class="col-lg-12">
            <button type="submit" class="btn btn-primary"> Agregar paciente </button>
        </div>
  </form>
  <div class="alert alert-success" role="alert">
    <span class="bi-check-circle-fill"></span> Habitación {{ itemBarCode }} agregada correctamente.
  </div>
  <div class="alert alert-danger" role="alert">
    <span class="bi-exclamation-triangle-fill"></span> Error al agregar la habitación {{ itemBarCode }}.
  </div>
</div>
</template>

<script>

  // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

  export default {

    inject: ['md5'],

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

        let jsontopost = JSON.stringify([{
          itemBarCode:             this.itemBarCode,
          itemName:                this.itemName,
          merchantGoodsId:         this.itemBarCode,
          merchantGoodsCategoryId: this.itemBarCode,
          goodsNo:                 this.goodsNo,
          stock:                   this.stock,
          manufacture:             this.manufacture,
          storageCondition:        this.storageCondition,
          eatMethod:               this.eatMethod,
          itemProductionPlace:     this.itemProductionPlace,
          license:                 this.license,
          specifications:          this.specifications,
          grade:                   this.grade,
          company:                 this.company,
          itemQrCode:              this.itemQrCode,
          mixture:                 this.mixture,
          itemBaseUnit:            this.itemBaseUnit,
          categoryName:            this.categoryName
        }])

        console.log("JSON to POST -> " + jsontopost);
        
        fetch('https://sg.yalabi.net/open/saveOrGoods', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'veryText': this.generateHash(),
            'merchantCode': 'MC1220',
            'type': '1'
        },
        body: JSON.stringify([{
          itemBarCode:             this.itemBarCode,
          itemName:                this.itemName,
          merchantGoodsId:         this.itemBarCode,
          merchantGoodsCategoryId: this.itemBarCode,
          goodsNo:                 this.goodsNo,
          stock:                   this.stock,
          manufacture:             this.manufacture,
          storageCondition:        this.storageCondition,
          eatMethod:               this.eatMethod,
          itemProductionPlace:     this.itemProductionPlace,
          license:                 this.license,
          specifications:          this.specifications,
          grade:                   this.grade,
          company:                 this.company,
          itemQrCode:              this.itemQrCode,
          mixture:                 this.mixture,
          itemBaseUnit:            this.itemBaseUnit,
          categoryName:            this.categoryName
        }]),
        redirect: 'follow'
      })
        .then((response) => {
          if (response.ok) {
            console.log("RESULT OK :)");
            result => console.log(result.json())
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

        //CALCULO FORMATO FECHA
        var currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 13);
        var today = currentDate.getDate();
        var mesActual = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        if (mesActual < 10) mesActual = '0' + mesActual;
        if (today < 10) today = '0' + today;

        const formatoFecha = year + "-" + mesActual + "-" + today;

        let hash1 = this.md5("83C3A53C05553cb" + formatoFecha);
        console.log(hash1);

        return hash1;
      }
    }
  };
</script>