import axios from "axios";
//state
const state = () => ({
    listNotes: []
});

//getters
const getters = {
    getListNotes(state){
        return state.listNotes;
    },
    getCountNotes(state) {
        return state.listNotes.length;
    }
};

//mutations
const mutations = {
    SET_LIST_NOTES(state, data) {
        state.listNotes = data;
    }
};

//actions
const actions = {
    async fetchNotes({ commit }) {
        const res = await axios.get('/Sheet1');
        const { data } = res;
        console.log('SET_LIST_NOTES', data);
        // return data
        commit('SET_LIST_NOTES', data)
    },
    async addNote({}, payload) {
        const res = await axios.post('/Sheet1', [{
            id: payload.id,
            note: payload.note,
            isCompleted: payload.isCompleted,
        }]);
        console.log(res);
        if (res) {
            return true; //call back
        }
        return false;
    },
    async updateNotes({commit, dipatch, getters,state}, payload) {
        //update
    },
    async deleteNotes({}, payload) {
        //delete
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}