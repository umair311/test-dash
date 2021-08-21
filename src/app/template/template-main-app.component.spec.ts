import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { TranslationService } from 'src/app/lib/translation/translation.service';
import { MaterialModule } from 'src/app/material.module';
import { AuthService } from 'src/app/services/auth.service';
import { MainService } from 'src/app/services/main.service';

import { TemplateMainAppComponent } from './template-main-app.component';

describe('TemplateMainAppComponent', () => {
  let component: TemplateMainAppComponent;
  let fixture: ComponentFixture<TemplateMainAppComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule],
      declarations: [AppComponent],
      providers: [AuthService, HttpClient, HttpHandler, TranslationService, MainService],
    }).compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMainAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
