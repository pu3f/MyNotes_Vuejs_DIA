<template>
    <div class="content">
        <ul v-if="listNotes && listNotes.length > 0">
            <li v-for="list in listNotes" :key="list.id">
                <div>{{ list.id + '. ' + list.note }}</div>
                <div>{{ list.isCompleted }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'List',
    computed: {
        listNotes() {
            return this.$store.getters.getListNotes;
        }
    },
    async mounted() {
        await this.$store.dispatch('fetchNotes');
        // let notes = await this.$store.dispatch('fetchNotes');
        // this.$store.commit('SET_LIST_NOTES', notes)
        //using await
            // const res = await fetch('https://api.steinhq.com/v1/storages/61fa3ab88d29ba2379183488/Sheet1');
            // const data = await res.json();
        //using fetch
            // fetch('https://api.steinhq.com/v1/storages/61fa3ab88d29ba2379183488/Sheet1');
            // .then((response) => {
            //     return response.json();
            // })
            // .then((response) => {
            //     console.log(response);
            // });
    }
}
</script>

<style scoped>
.content {
    display: flex;
    justify-content: center;
}
ul {
    padding: 0;
    margin: 0;
    width: 30%;
    list-style: none;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
}
</style>