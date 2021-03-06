import { Component, OnInit } from '@angular/core';
import { MessageConstants } from './../core/common/message.constants';
import { UrlConstants } from './../core/common/url.constants';
import { NotificationService } from './../core/services/notification.service';
import { AuthService } from './../core/services/auth.service';
import { UtilityService } from './../core/services/utility.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loading: boolean = false;
	model: any = {}
	returnUrl: string;

	constructor(
		private _authService: AuthService,
		private _notificationService: NotificationService,
		private _utilityService: UtilityService
	) { }

	ngOnInit() {
	}

	login() {
		this.loading = true;
		this._authService.login(this.model.username, this.model.password).subscribe(data => {
			this._utilityService.navigate(UrlConstants.HOME);
		}, error => {
			this._notificationService.printErrorMessage(MessageConstants.SYSTEM_ERROR_MSG);
			this.loading = false;
		});
	}

}
