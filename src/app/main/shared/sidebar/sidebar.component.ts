import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../core/services/data.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	public functions: any[];

	constructor(
		private _dataService: DataService
	) { }

	ngOnInit() {
		this._dataService.get('/api/function/getlisthierarchy').subscribe((response: any[]) => {
			this.functions = response.sort((n1, n2) => {
				if (n1.DisplayOrder > n2.DisplayOrder)
					return 1;
				else if (n1.DisplayOrder < n2.DisplayOrder)
					return -1;
				return 0;
			});
		}, error => this._dataService.handleError(error));
	}

}
