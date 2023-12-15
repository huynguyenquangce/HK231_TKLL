import { db } from "../../db";
import { getDocs, query, collectionGroup } from "firebase/firestore";


export default {
    namespaced: true,
    state() {
        return {
            items: []
        }
    },
    actions: {

        async getUsers({ commit }) {
            const usersQuery = query(collectionGroup(db, "users"));
            const snapshot = await getDocs(usersQuery);
            const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            commit("setUsers", users);
        },



    },
    mutations: {
        setUsers(state, users) {
            state.items = users;
        }
    }
}