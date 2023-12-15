

import { createStore } from "vuex";
import exchange from "./modules/exchange";
import user from "./modules/user";
import toast from "./modules/toast";
import users from "./modules/users"
import newuser from "./modules/newuser";
import checkin from "./modules/checkin"
import history from "./modules/history";
export default createStore({
    modules: {
        exchange,
        user,
        toast, users, newuser, checkin, history
    }
})