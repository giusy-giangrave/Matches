import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupresultComponent } from './groupresult.component';

describe('GroupresultComponent', () => {
  let component: GroupresultComponent;
  let fixture: ComponentFixture<GroupresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupresultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
