import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.css']
})
export class PlayersInfoComponent implements OnInit {

  //Form group init
  // playersForm = new FormGroup({
  //   player1Name : new FormControl(),
  //   player2Name : new FormControl()
  // });

  public playersForm: FormGroup;
  public playersNames: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private data: DataService
  ) { }

  ngOnInit() {
    this.playersForm = this.formBuilder.group({
      player1Name: ['', Validators.required],
      player2Name: ['', Validators.required]
    });
  }

  public onSubmit() {
    this.playersNames = { 'Player1': this.playersForm.get('player1Name').value, 'Player2': this.playersForm.get('player2Name').value };
    this.data.changeMessage(this.playersNames);
    this.router.navigateByUrl("/game");
  }

  public validateFormMsj(control) {
    if (this.playersForm.controls[control].invalid && this.playersForm.controls[control].dirty && this.playersForm.controls[control].touched) {
      return true;
    }

    return false;
  }

  public ValidateControl(control) {
    return {
      'is-valid': !this.playersForm.controls[control].errors,
      'is-invalid': this.playersForm.controls[control].errors,
      'form-control': true
    };
  }

}
