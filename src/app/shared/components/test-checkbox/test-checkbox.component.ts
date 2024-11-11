import {Component, Input, OnInit} from '@angular/core';
import {FileStructureType} from "../../../../types/file-structure.type";
import {FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {ChoicesType} from "../../../../types/choices.type";
import {TestFormComponent} from "../../../view/components/test-form/test-form.component";

@Component({
  selector: 'test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent implements OnInit {
  @Input() field!: FileStructureType;
  chBoxForm!: FormGroup;
  fieldIdString: string = '';
  chosenOptions: ChoicesType[] = [];

  constructor(public parentForm: FormGroupDirective, private testFormComponent: TestFormComponent) {
  }

  ngOnInit(): void {
    this.fieldIdString = this.field.id.toString();
    this.chBoxForm = this.parentForm.form;

    if (this.field.choices && this.field.choices.length > 0) {
      this.chosenOptions = this.field.choices;
      const isSelectAll: ChoicesType | undefined = this.chosenOptions.find((all: ChoicesType): boolean => all.value === 'select-all' && all.checked);
      if (isSelectAll) {
        this.chosenOptions.forEach((item: ChoicesType): void => {
          item.checked = true;
          this.testFormComponent.testForm.controls[this.fieldIdString + '/' + item.value].setValue(item.value);
        });
      } else {
        this.chosenOptions.forEach((item: ChoicesType): void => {
          this.testFormComponent.testForm.controls[this.fieldIdString + '/' + item.value].setValue(item.checked ? item.value : '');
        });
      }
      setTimeout((): void => {
        this.testFormComponent.testForm.controls[this.fieldIdString + '/' + this.chosenOptions[1].value].markAsTouched();
        this.testFormComponent.testForm.controls[this.fieldIdString + '/' + this.chosenOptions[1].value].markAsDirty();
      }, 0);
    }
  }

  setValueInChoices(i: number): void {
    if (this.chosenOptions[i].value === 'select-all') {
      this.chosenOptions.forEach((item: ChoicesType): void => {
        item.checked = !this.chosenOptions[i].checked;
        this.testFormComponent.testForm.controls[this.fieldIdString + '/' + item.value].setValue(this.chosenOptions[i].checked ? '' : item.value);
      });
    } else {
      this.chosenOptions[i].checked = !this.chosenOptions[i].checked;
    }
    this.testFormComponent.testForm.controls[this.fieldIdString + '/' + this.chosenOptions[i].value].setValue(this.chosenOptions[i].checked ? this.chosenOptions[i].value : '');

    if (this.chosenOptions && this.chosenOptions.length > 0 && this.field.required) {
      const isChecked: ChoicesType | undefined = this.chosenOptions.find((item: ChoicesType) => item.checked);
      if (isChecked) {
        this.chosenOptions.forEach((item: ChoicesType): void => {
          this.testFormComponent.testForm.get(this.fieldIdString + '/' + item.value)?.setValidators([]);
          this.testFormComponent.testForm.get(this.fieldIdString + '/' + item.value)?.updateValueAndValidity();
        });
      } else {
        this.chosenOptions.forEach((item: ChoicesType): void => {
          this.testFormComponent.testForm.get(this.fieldIdString + '/' + item.value)?.setValidators([Validators.required]);
          this.testFormComponent.testForm.get(this.fieldIdString + '/' + item.value)?.updateValueAndValidity();
        });
      }
    }
  }

}
