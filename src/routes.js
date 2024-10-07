import {createWebHistory,createRouter} from "vue-router";
import MainCompo from "./MainCompo.vue";
import FruitsCompo from "./components/FruitsCompo.vue";
import VegeCompo from "./components/VegeCompo.vue";

const routes=[
    {
        name:"MainCompo",
        path:"/",
        component:MainCompo
    },
    {
        name:"FruitsCompo",
        path:"/Fruits",
        component:FruitsCompo
    },
    {
        name:"VegeCompo",
        path:"/Vege",
        component:VegeCompo
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;