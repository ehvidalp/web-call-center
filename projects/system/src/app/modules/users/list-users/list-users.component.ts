import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { GridLanguage, PagerLanguage } from '../../../models/syncfusion-language';
import { User } from '../../../models/user';
import { SyncfusionLanguageService } from '../../../services/syncfusion-language.service';
import { UserService } from '../../../services/user.service';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { MatchPasswordService } from '../../../services/match-password.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  usersData!: User[]
  userForm!: FormGroup
  loading = false
  hiddenPassword = true;
  disabledForm = true;
  //syncfusion
  @ViewChild('users') gridUsers!: GridComponent
  pageSettings!: PageSettingsModel;
  toolbarOptions!: ToolbarItems[];
  locale: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private languageService: SyncfusionLanguageService,
    private matchPassword: MatchPasswordService
  ) { }

  ngOnInit(): void {
    this.initConfigSyncfusion()
    this.getUsers()
    this.builderForm()
  }

  getUser(userId: string) {
    this.userService.get(userId).subscribe(data => {
      this.userForm.patchValue(data)
      this.disabledForm = false
      this.uf.names.enable()
      this.uf.surnames.enable()
      this.uf.user.enable()
      this.uf.newPassword.enable()
      this.uf.confirmPassword.enable()
    })

  }

  editUser() {
    if (!this.userForm!.valid) {
      this.userForm!.markAllAsTouched()
      return
    }
    this.loading = true
    this.userService.update(this.userForm.value).subscribe(res => {
      this.loading = false
      this.resetForm();
      this.getUsers();
      this.gridUsers.refresh()
    })
  }

  getUsers() {
    this.userService.getAll().subscribe(data => {
      this.usersData! = data
    })
  }

  initConfigSyncfusion() {
    const gridLanguage: GridLanguage = this.languageService.gridLanguage
    const pagerLanguage: PagerLanguage = this.languageService.pagerLanguage

    this.pageSettings = { pageSize: 5 };
    this.toolbarOptions = ['Search'];
    this.locale = setCulture('es-ES');

    L10n.load({
      'es-ES': {
        grid: gridLanguage,
        pager: pagerLanguage,
      },
    });
  }

  resetForm() {
    this.disabledForm = true;
    this.userForm.reset()
    this.uf.names.disable()
    this.uf.surnames.disable()
    this.uf.user.disable()
    this.uf.newPassword.disable()
    this.uf.confirmPassword.disable()
  }

  builderForm() {
    this.userForm = this.formBuilder.group({
      id: [''],
      names: [{ value: '', disabled: true }, Validators.required],
      surnames: [{ value: '', disabled: true }, Validators.required],
      user: [{ value: '', disabled: true }, Validators.required],
      newPassword: [{ value: '', disabled: true }],
      confirmPassword: [{ value: '', disabled: true }],
    },
      {
        validator: this.matchPassword.MatchPassword(
          'newPassword',
          'confirmPassword'
        ),
      })

  }

  get uf() {
    return this.userForm!.controls
  }

}
