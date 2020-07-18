import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [FormsModule],
      declarations: [ AppComponent
       ],
      //  schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    // component = fixture.debugElement.componentInstance;

    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Test instance of comp. created or not-
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // injector methods handles all operations like add, remove, fetch.
  it('should use the quoteList from the service', () => {
    const quoteService = fixture.debugElement.injector.get(QuoteService);
    fixture.detectChanges();
    expect(quoteService.getQuote()).toEqual(component.quoteList);
  });

  it('should create hgjh', () => {
  const re = component.compute(-1);
  expect(re).toBe(0);
  });


});





Before; detectchanges; method; call; the; component; is; not; rendered.;
After; this; method; call; component; is; rendered.;

Now; initialize; the; value in property; of; component; and; check; whether; they; create; new post; or; not.
it('should create a new post', () => {
    component.quoteText = 'I love this test';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('I love this test');
  });

it('should disable the button when textArea is empty', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

it('should enable button when textArea is not empty', () => {
    component.quoteText = 'I love this test';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
