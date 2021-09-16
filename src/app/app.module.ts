import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveComponentModule } from '@ngrx/component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@environments/environment';
import { APP_COMPONENTS } from '@constants/app-components';
import { APP_EFFECTS } from '@constants/app-effects';
import { AngularMaterialModules } from '@modules/material.module';
import { appReducer } from '@store/reducers';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent, APP_COMPONENTS],
	imports: [
		BrowserModule,
		HttpClientModule,
		AngularMaterialModules,
		ReactiveComponentModule,
		EffectsModule.forRoot(APP_EFFECTS),
		StoreModule.forRoot(appReducer, {
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true
			}
		}),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
