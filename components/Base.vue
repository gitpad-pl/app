<template>
    <div id="base-tree" class="">
        <div class="">
            <h3>Draggable table</h3>

            <table class="table table-striped">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Sport</th>
                </tr>
                </thead>

                    <tr v-for="item in list" :key="item.name">
                        <td scope="row">{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.sport }}</td>
                    </tr>

            </table>
        </div>

        <rawDisplayer class="" :value="list" title="List" ></rawDisplayer>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "table-example",
        display: "Table",
        order: 8,
        components: {
            draggable
        },
        data() {
            return {
                list: [
                    { id: 1, name: "Abby", sport: "basket" },
                    { id: 2, name: "Brooke", sport: "foot" },
                    { id: 3, name: "Courtenay", sport: "volley" },
                    { id: 4, name: "David", sport: "rugby" }
                ],
                dragging: false
            };
        }
    };
</script>
<style scoped>
    .buttons {
        margin-top: 35px;
    }
    table td {
        background-color: black;
    }
</style>
