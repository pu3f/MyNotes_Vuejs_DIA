<template>
  <div>
    <!-- slot header -->
    <DashboardLayout> 
      <template #header>
        <header-component 
          :desc-title="description" 
          @hello="getHelloWorld($event)">
        </header-component>
        <!-- Custom component menggunakan slot pada header tanpa mengubah component -->
          <div>
            Shopping List
          </div>
      </template>

      <!-- slot main -->
      <template #main>
        <!-- condisioning input button -->
        <div>
          <button class="btn-tabnote" :class="{ active: tab == 'list-component',  }" @click="changeTab('list-component')">List Note</button>
          <button class="btn-tabnote" :class="{ active: tab == 'add-component' }" @click="changeTab('add-component')">Add Note</button>
        </div>

        <!-- dynamic component, dalam atribut is harus nama component -->
        <keep-alive>
          <component :is="tab"></component>
        </keep-alive>

        <!-- static component -->
        <!-- <list-component v-if="tab === 'list'"></list-component> -->
        <!-- <add-component v-if="tab === 'add'"></add-component> -->
        </template>

      <!-- slot footer -->
      <template #footer>
        Copyright &copy; 2022
      </template>

    </DashboardLayout>
  </div>
</template>


<script>

// local component use for spesific page
import DashboardLayout from '../layouts/Dashboard.vue';
import List from '../components/List.vue';
import AddNote from '../components/AddNote.vue';

import { computed } from 'vue';

export default {
  name: 'Home',
  components: {
  DashboardLayout,
    //change to lowercase
    'list-component': List,
    'add-component' : AddNote
  },
  data() {
    return {
      title: 'My Notes',
      description: 'Catatan Harian',
      tab: 'list-component'
    }
  },
  provide() {
    return {
      titleFromParent: computed(() => this.title) //give data direct to child
    }
  },
  mounted() {
    this.$store.commit('SET_TITLE', 'My');
  },
  methods: {
    getHelloWorld(value) {
      console.log(value)
    },
    changeTab(tabname) {
      this.tab = tabname;
    }
  }
}

</script>

<style scoped>
.btn-tabnote {
  border: 0;
  color: grey;
  background-color: white;
}
.active {
  color: skyblue;
  margin-inline: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid skyblue;
}
</style>