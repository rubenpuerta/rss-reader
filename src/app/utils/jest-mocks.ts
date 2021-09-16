import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';

@Injectable()
export class ActionMocks<T> extends Actions {
	public source!: Observable<any>;

	constructor() {
		super(EMPTY);
	}

	public setSource(source: Observable<T>): void {
		this.source = source;
	}
}
