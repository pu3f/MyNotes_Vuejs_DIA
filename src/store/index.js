import { createStore } from "vuex";
import notes from "./modules/notes";

const store = createStore({
    //core for save value or data
    state: () => ({
        title: 'Belajar Vue 3',
        name: 'Note'
    }),
    //core for collect multiple state into one value 
    getters: {
        getTitle(state) {
            return `${state.title} ${state.name}`;
        }
    },
    //core for change state value or logic
    mutations: {
        SET_TITLE: (state, data) => {
            state.title = data;
        }
    },
    //core call API
    actions: {
        //actions
    },
    modules: {
        notes
    }
});

export default store;