import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const angularMaterialModules = [MatProgressSpinnerModule, MatCardModule];

@NgModule({
	imports: [angularMaterialModules],
	exports: [angularMaterialModules]
})
export class AngularMaterialModules {}
