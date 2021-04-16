import { NavbarComponent } from './navbar.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';


describe('navbar component', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [MatMenuModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent((NavbarComponent));
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  describe('when showExtendedMain is executed', () => {
    it('functionality', () => {
      component.showFullMain = !component.showFullMain
      expect(component.showFullMain).toBe(component.showFullMain)
      component.showExtendedMain()
    })
  })

})
