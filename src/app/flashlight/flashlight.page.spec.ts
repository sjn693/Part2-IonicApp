import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FlashlightPage } from './flashlight.page';

describe('FlashlightPage', () => {
  let component: FlashlightPage;
  let fixture: ComponentFixture<FlashlightPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlashlightPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FlashlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
