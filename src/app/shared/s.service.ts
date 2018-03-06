import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core';


@Injectable()
export class SharedService {
	@Output() fire: EventEmitter<any> = new EventEmitter();

	constructor() {
		console.log('shared service started');
	}

	change(col) {
	console.log('change started');
		this.fire.emit(col);
	}

	getEmittedValue() {
		return this.fire;
	}

} 