<template>
    <div class="container">
        <h1 class="mb-4">{{ titulo }}</h1>

        <div class="col-sm-12 col-md-6 mb-4">
            <div class="input-group input-group-sm">
            <div for="barCode" class="input-group-text col-sm-5">Seleccione Hab./cama asignada:</div>
            <select v-model="itemBarCode" class="form-select col-sm-1" name="barCode" id="barCode">
                <option value="0">Seleccione...</option>
                <option value="101A">101A</option>
                <option value="101B">101B</option>
                <option value="201A">201A</option>
                <option value="201B">201B</option>
            </select>
            </div>
        </div>

        <table class="table table-striped table-hover">
            <thead class="table-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            titulo: 'Buscar habitación/cama'
        }
    }
}
</script>