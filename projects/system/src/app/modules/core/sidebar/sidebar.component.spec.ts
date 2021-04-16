import { SidebarComponent } from './sidebar.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('sidebar component', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent((SidebarComponent));
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })

})
