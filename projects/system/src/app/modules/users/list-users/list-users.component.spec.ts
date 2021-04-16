import { User } from './../../../models/user';
import { ListUsersComponent } from './list-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { SyncfusionLanguageService } from '../../../services/syncfusion-language.service';
import { MatchPasswordService } from '../../../services/match-password.service';
import { of } from 'rxjs';

class userServiceStub {
  users: User[] = []
  user: User[] = []

  getAll(){ return of (this.users)}
  get(userId: string){ return of (this.user)}
  update(user: User) { return of (0)}
}

class syncfusionLanguageServiceStub{
  gridLanguage(){}
  pagerLanguage(){}
}

class matchPasswordStub{
  MatchPassword(newPassword: string, confirmPassword: string){}
}

describe('list user component', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ListUsersComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: UserService, useClass: userServiceStub },
        { provide: SyncfusionLanguageService, useClass: syncfusionLanguageServiceStub },
        { provide: MatchPasswordService, useClass: matchPasswordStub },
      ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent((ListUsersComponent));
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  describe('When component is initializated', () => {
    it('should create the form login', () => {
      expect(Object.keys(component.userForm.controls)).toEqual(['id', 'names', 'surnames', 'user', 'newPassword', 'confirmPassword'])
    })
  })

  describe('When editUser is executed', () => {
    it('shoud edit user success', () => {
      component.uf.names.setValue('test');
      component.uf.surnames.setValue('test')
      component.uf.user.setValue('test')
      component.loading = true
      expect(component.loading).toBe(true)
      expect(component.userForm.valid).toBe(true)
      component.editUser()
      component.resetForm()
      component.getUser('test')
    })


  //  it('should edit user failed', () => {

  //     console.log('este elemento aja aja', component.userForm.valid)
  //     component.userForm.markAllAsTouched()
  //     expect(component.userForm.valid).toBe(true)
  //     expect(component.loading).toBe(false)
  //     component.editUser()

  //     component.resetForm()
  //     component.getUser('test')
  //   })
  });

  describe('When getUser is executed', () => {
    it('should get user data', () => {
      component.disabledForm = false;
      component.getUser('user')
      expect(component.disabledForm).toBe(false)
    })
  });



})
