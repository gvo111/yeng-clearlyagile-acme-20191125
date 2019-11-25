import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {By} from '@angular/platform-browser';
import {defer} from 'rxjs';

import { HomeComponent } from './home.component';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    http = TestBed.get(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the home page by default', () => {
    const header = fixture.debugElement.query(By.css('h2'));
    expect(header.nativeElement.textContent).toEqual('Home');
  });

  it('should fetch and display greeting', () => {
    spyOn(http, 'get').and.returnValue(asyncData({error: null, data: {text: 'hello'}}));
    const greeting = fixture.debugElement.query(By.css('p'));
    expect(greeting.nativeElement.textContent).toEqual('hello');
  });
});
