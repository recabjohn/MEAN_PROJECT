import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importing ReactiveFormsModule if you're using reactive forms
import { RouterTestingModule } from '@angular/router/testing'; // Importing RouterTestingModule for routing features if needed

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SignupComponent, // Directly import the standalone component
        ReactiveFormsModule, // Add this if your SignupComponent uses reactive forms
        RouterTestingModule // Add this if you have routing in your component
      ],
    }).compileComponents(); // Ensure components are compiled

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});