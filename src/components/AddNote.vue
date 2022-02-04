<template>
  <div>
      <input v-model="note" type="text" @input="onInput">
      <button @click="addNote">Add</button>  
  </div>
</template>

<script>
export default {
    name: 'AddNote',
    data() {
      return {
        note: ''
      }
    },
    methods: {
      onInput(event) {
        console.log(event.target.value);
        console.log(this.capitalizeWords(event.target.value));
      },
      async addNote() {
        const payload = {
          id: this.$store.getters.getCountNotes + 1,
          note: this.capitalizeWords(this.note),
          isCompleted: false
        }
        console.log(payload);
        const res = await this.$store.dispatch('addNote', payload);
        if (res){
          this.$moshaToast('Berhasil Menambahkan Note', {
            position: 'bottom-center',
            type: 'success'
          });
          this.note = '';
          //reload page
          setTimeout(() => {
            this.$router.go()
          }, 2000) 
        }
      }
    }
}
</script>

<style>
button {
  margin-inline: 10px;
  background-color: skyblue;
  color: black;
  border: 0;
  max-width: fit-content;
}
</style>