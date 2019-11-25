import {FormGroup} from '@angular/forms';

export function extractFormValues(formGroup: FormGroup) {
  const values = {};

  Object.keys(formGroup.controls).forEach((key) => {
    values[key] = formGroup.controls[key].value;
  });

  return values;
}

