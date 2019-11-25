import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {NgZone, Type} from '@angular/core';

interface QueryHelpers {
  getBy: (selector: string) => any;
  byTestId: (testId: string) => any;
}

export interface RenderResults<ComponentType> {
  instance: ComponentType;
  fixture: ComponentFixture<ComponentType>;
  navigate: (path: string) => Promise<void>;
  query: QueryHelpers;
  populateForm: (selector: string, fields: {}) => void;
}

function buildHelpers(element: any): QueryHelpers {
  const getBy = (selector) => element.querySelector(selector);
  const byTestId = (testId) => element.querySelector(`[data-qa=${ testId }]`);

  return {getBy, byTestId};
}

export async function render<ComponentType>(
  component: Type<ComponentType>,
  options): Promise<RenderResults<ComponentType>> {

  TestBed.configureTestingModule({
    imports: [...options.imports],
    declarations: [...options.declarations],
    providers: [...options.providers]
  });

  await TestBed.compileComponents();

  const router = TestBed.get(Router);
  const zone = TestBed.get(NgZone);
  const fixture = TestBed.createComponent(component);
  const instance = fixture.componentInstance;

  if (options.detectChanges === undefined || options.detectChanges) {
    fixture.detectChanges();
  }

  const navigate = async (path: string) => {
    await zone.run(() => router.navigate([path]));
    fixture.detectChanges();
  };

  const populateForm = (selector, fields) => {
    const form = fixture.debugElement.nativeElement.querySelector(selector);
    const keys = Object.keys( fields );

    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0; i < keys.length; i++ ) {
      const key = keys[ i ];
      const fieldElement = form.querySelector( `[ng-reflect-name="${ key }"]` );
      fieldElement.value = fields[key];
      fieldElement.dispatchEvent(new Event('input'));
    }

    fixture.detectChanges();
  };

  return {
    instance,
    fixture,
    navigate,
    query: buildHelpers(fixture.debugElement.nativeElement),
    populateForm
  };
}
