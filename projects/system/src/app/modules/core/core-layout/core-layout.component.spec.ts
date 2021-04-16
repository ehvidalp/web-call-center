import { CoreLayoutComponent } from './core-layout.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';


describe('core layout component', () => {
  let component: CoreLayoutComponent;
  let fixture: ComponentFixture<CoreLayoutComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CoreLayoutComponent],
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent((CoreLayoutComponent));
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  describe('When component is initializated', () => {
    it('value of extend main', () => {
      expect(component.extendedMain).toBe(false)
    })
  })

  describe('when getExtendedMain is executed', () => {
    it('set value extendedMain', () => {
      component.getExtendedMain(true)
    })
  })
})
