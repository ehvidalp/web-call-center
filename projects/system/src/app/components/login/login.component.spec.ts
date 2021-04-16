import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('login component', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule]
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent((LoginComponent));
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  describe('When component is initializated', () => {
    it('should create the form login', () => {
      expect(Object.keys(component.loginForm.controls)).toEqual(['user', 'password'])
    })
  })

  describe('When authentication is executed', () => {

    it('should authentication success', () => {
      component.lf.user.setValue('user');
      component.lf.password.setValue('password')
      component.loading = true
      expect(component.loading).toBe(true, 'is authenticate')
      expect(component.loginForm.valid).toBe(true, 'is logged')
      component.authentication()
    })

    it('should authentication failed', () => {
      expect(component.loginForm.valid).toBe(false, 'form invalid')
      expect(component.loading).toBe(false, 'not authenticate')
      component.authentication()
    })

  })

})
