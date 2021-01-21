import displayPeople from "./components/displayPeople.vue";
import HelloWorld from "./components/addReader";
import updatePerson from "@/components/update/updatePerson";
import updateAdmin from "@/components/update/updateAdmin";
import updateEmployee from "@/components/update/updateEmployee";

export default [
    {
        path: '/',
        component: displayPeople
    },
    {
        path: '/add',
        component: HelloWorld
    },
    {
        path: '/updatePreviewOnly',
        component: updatePerson
    },
    {
        path: '/updateEmployees',
        component: updateEmployee
    },
    {
        path: '/updateAdmins',
        component: updateAdmin
    }

]