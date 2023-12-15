import { realtimeDb } from "../../db";
import { ref, get } from "firebase/database";
const realtimeDbRef = ref(realtimeDb, 'history');


export default {
    namespaced: true,
    state() {
        return {
            items: []
        }
    },
    actions: {

        async getUsers({ commit }) {


            get(realtimeDbRef).then((snapshot) => {
                if (snapshot.exists()) {
                    let user = snapshot.val();
                    let userArray = Object.entries(user).map(([date, employee]) => ({ date, employee }));

                    // Đảo ngược thứ tự mảng dựa trên index
                    userArray.reverse();

                    // Chuyển đổi lại mảng thành đối tượng với key ban đầu
                    let reversedUser = {};
                    userArray.forEach(({ date, employee }) => {
                        reversedUser[date] = employee;
                    });

                    commit("setUsers", reversedUser);
                } else {
                    console.log("Không có dữ liệu.");
                }
            }).catch((error) => {
                console.error("Lỗi khi đọc dữ liệu: ", error);
            });

        },

    },
    mutations: {
        setUsers(state, users) {
            state.items = users;
        }
    }
}