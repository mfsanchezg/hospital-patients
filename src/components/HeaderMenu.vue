<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ brand }} - {{ title }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
        </div>
    </nav> 
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Insertar paciente</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Actualizar cama</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Consultar cama</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        props:[
            'brand',
            'title'
        ],
        data(){
            return {
                
            };
        }        
    }
</script>