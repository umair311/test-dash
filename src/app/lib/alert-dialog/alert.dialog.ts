import { OnInit, Component } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { MainService } from "src/app/services/main.service";


@Component({
	selector: 'alert-dialog',
	templateUrl: './alert.dialog.html'
})
export class AlertDialog implements OnInit 
{
	isLoading: boolean;
	heading: string = '';
	message: string = '';
	type: 'ask' | 'success' | 'error' | 'info';
	cancelButtonText: string;
	submitButtonText: string;
	dataToSubmit: any;
	methodName: any;
	methodType: any;
	showLoading: boolean;
	signup:any=false;

	constructor(protected dialogRef: MatDialogRef<AlertDialog>, protected dialog: MatDialog , public route:Router ) 
	{
		this.isLoading = false;
		this.showLoading  = false;
	}

	ngOnInit() 
	{
	}

	onCancelClick(): void
	{
		this.dialogRef.close(false);

	}

	onSubmitClick(): void
	{
		// this.dialogRef.close(true);
		this.isLoading = true;

		// if(this.methodType == 'get'){
		// 	this.mainApiService.getList(this.methodName)
        //         .then(result => {
		// 			if (result.status === 200)
		// 			{
		// 				// this.gerOrdersList(this.currentPage);
		// 				this.dialogRef.close(true);
		// 				this.isLoading = false;
		// 			}
		// 			else
		// 			{
		// 				this.isLoading = false;
		// 				let dialogRef = this.dialog.open(AlertDialog, { autoFocus: false });
		// 				let cm = dialogRef.componentInstance;
		// 				cm.heading = 'Error';
		// 				cm.message = 'Internal Server Error';
		// 				cm.cancelButtonText = 'Ok';
		// 				cm.type = 'error';
		// 			}
		// 		});
		// }
		// else if(this.methodType == 'delete'){

		// 	this.mainApiService.delete(this.methodName)
        //         .then(result => {
		// 			if (result.status === 200)
		// 			{
		// 				// this.gerOrdersList(this.currentPage);
		// 				this.dialogRef.close(true);
		// 				this.isLoading = false;
		// 			}
		// 			else
		// 			{
		// 				this.isLoading = false;
		// 				let dialogRef = this.dialog.open(AlertDialog, { autoFocus: false });
		// 				let cm = dialogRef.componentInstance;
		// 				cm.heading = 'Error';
		// 				cm.message = 'Internal Server Error';
		// 				cm.cancelButtonText = 'Ok';
		// 				cm.type = 'error';
		// 			}
		// 		});
		// }
		// else if (this.methodType == 'ask') {
		// 	this.dialogRef.close(true);
		// }
		// else if(this.methodType == 'patch'){
		// 	var formData = new FormData()
		// 	this.mainApiService.patch(this.methodName, formData)
        //         .then(result => {
		// 			if (result.status === 200)
		// 			{
		// 				// this.gerOrdersList(this.currentPage);
		// 				this.dialogRef.close(true);
		// 				this.isLoading = false;
		// 			}
		// 			else
		// 			{
		// 				this.isLoading = false;
		// 				let dialogRef = this.dialog.open(AlertDialog, { autoFocus: false });
		// 				let cm = dialogRef.componentInstance;
		// 				cm.heading = 'Error';
		// 				cm.message = 'Internal Server Error';
		// 				cm.cancelButtonText = 'Ok';
		// 				cm.type = 'error';
		// 			}
		// 		});
		// }
		// else{
		// 	this.mainApiService.postData(this.methodName, this.dataToSubmit)
        //         .then(result => {
		// 			if ((result.status === 200 || result.status === 201)  && result.data)
		// 			{
		// 				// this.gerOrdersList(this.currentPage);
		// 				this.dialogRef.close(true);
		// 				this.isLoading = false;
		// 			}
		// 			else
		// 			{
		// 				this.isLoading = false;
		// 				let dialogRef = this.dialog.open(AlertDialog, { autoFocus: false });
		// 				let cm = dialogRef.componentInstance;
		// 				cm.heading = 'Error';
		// 				cm.message = 'Internal Server Error';
		// 				cm.cancelButtonText = 'Ok';
		// 				cm.type = 'error';
		// 			}
		// 		});
		// }
	}
}
