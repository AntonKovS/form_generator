import {Component, OnInit} from '@angular/core';
import {FormStructureService} from "../../../shared/services/form-structure.service";
import {FileStructureType} from "../../../../types/file-structure.type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChoicesType} from "../../../../types/choices.type";

// import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent implements OnInit {
  formStructure: FileStructureType[] = [];

  testForm!: FormGroup;

  constructor(private formStructureService: FormStructureService) {
    this.formStructure = this.formStructureService.getFormData();
  }

  ngOnInit(): void {
    this.testForm = this.toFormGroup(this.formStructure);
  }

  toFormGroup(fields: FileStructureType[]): FormGroup<any> {
    const group: any = {};
    fields.forEach((field: FileStructureType): void => {
      if (field.inputType === 'checkbox') {
        field.choices.forEach((option: ChoicesType): void => {
          group[field.id.toString() + '/' + option.value] = field.required
            ? new FormControl<string | null>('', [Validators.required])
            : new FormControl<string | null>('');
        });
      } else if ((field.inputType === 'input') && (field.viewType === 'double')) {
        group[field.id.toString() + '/' + '0'] = field.required
            ? new FormControl<string | null>('', Validators.required)
            : new FormControl<string | null>('');
      } else {
        group[field.id.toString()] = field.required
          ? new FormControl<string | null>('', Validators.required)
          : new FormControl<string | null>('');
      }
    });
    return new FormGroup(group);
  }

  submitForm(): void {
    (<any>Object).values(this.testForm.controls).forEach((control: any): void => {
      // control.markAsDirty();
      control.markAsTouched();
    });

    if (this.testForm.valid) {
      this.formStructureService.sendForm(this.testForm.value)
      // .subscribe({
      //   next: () => {
      //     // if ((data).error !== undefined) {
      //     //   throw new Error((data).message);
      //     // }
      //     //perform any code
      //     //popup "Ваша форма успешно отправлена"
      //   },
      //   error: (errorResponse: HttpErrorResponse) => {
      //     if (errorResponse.error && errorResponse.error.message) {
      //       alert('Ошибка отправки формы');
      //     }
      //   }
      // });
    }
  }
}
