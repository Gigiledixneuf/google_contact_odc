import { Routes } from '@angular/router';
import { SingleComponent } from './single/single.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: "",
        component : LoginComponent
    },
    {
        path: "contact-list",
        component : ContactListComponent
    },
    {
        path: "contact/:id",
        component : SingleComponent
    },
    {
        path : "create-contact",
        component : CreateContactComponent
        
    },
    {
        path : "edit-contact/:id",
        component : EditContactComponent
    },
    {
        path : "user-list",
        component : UserListComponent
    },
    {
        path : "user-single/:id",
        component : UserSingleComponent
    },
    {
        path : "create-user",
        component : CreateUserComponent
    },
    {
        path : "edit-user/:id",
        component : EditUserComponent
    }
];

