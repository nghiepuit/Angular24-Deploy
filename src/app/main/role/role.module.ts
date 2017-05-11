import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';

const userRoutes: Routes = [
	{ path: '', redirectTo: 'index', pathMatch: 'full' },
	{ path: 'index', component: RoleComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(userRoutes)
	],
	providers: [
	],
	declarations: [RoleComponent]
})
export class RoleModule { }
