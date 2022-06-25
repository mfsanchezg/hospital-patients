<template>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <!-- Logo IQ Spaces-->
            <img src="../../public/images/hospitalSanIgnacioLogo.jpg"
                    alt="Logo" title="Hospital San Ignacio" width="55" height="50" />
            <a class="navbar-brand" href="#">{{ brand }} - {{ title }}</a>
            <!--button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button-->
            
        </div>
    </nav> 
    <nav class="navbar navbar-expand-lg navbar-light mb-3" style="background-color: #e3f2fd;">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" >
                    <router-link class="nav-link" to="/insertpatient">
                        <span class="bi-clipboard-check"></span> Insertar hab./cama
                    </router-link>
                </li>

                <li class="nav-item" >
                    <router-link class="nav-link" to="/searchbed">
                        <span class="bi-search"></span> Consultar hab./cama
                    </router-link>
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