import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  myFormGroup: FormGroup;

  constructor(private myFormBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm() {

    this.myFormGroup = this.myFormBuilder.group({

      id: [ '', [] ],
      title: [ '', [] ],
      imageUrl: [ '', [] ],
      price: [ '', [] ]
    });
  }

  onSubmit() {

  }

}
