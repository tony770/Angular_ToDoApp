import { Routes } from '@angular/router';
import { ListContainerComponent } from './list-container/list-container.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'folder/:folderId',
        component: ListContainerComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
