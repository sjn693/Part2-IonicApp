import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AudioPage } from './audio.page';

describe('AudioPage', () => {
  let component: AudioPage;
  let fixture: ComponentFixture<AudioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudioPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
