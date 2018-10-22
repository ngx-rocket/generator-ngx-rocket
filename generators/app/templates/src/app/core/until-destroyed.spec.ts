import { Subject, Subscription } from 'rxjs';

import { untilDestroyed } from './until-destroyed';

function createObserver() {
  return {
    next: jasmine.createSpy(),
    error: jasmine.createSpy(),
    complete: jasmine.createSpy(),
  };
}

describe('untilDestroyed', () => {
  it('should not destroy other instances', () => {
    // Arrange
    const spy = createObserver();
    const spy2 = createObserver();

    class Test {
      obs: Subscription;

      ngOnDestroy() {}

      subscribe(spy: any) {
        this.obs = new Subject().pipe(untilDestroyed(this)).subscribe(spy);
      }
    }

    // Act
    const component1 = new Test();
    const component2 = new Test();
    component1.subscribe(spy);
    component2.subscribe(spy2);
    component1.ngOnDestroy();

    // Assert
    expect(spy.complete).toHaveBeenCalledTimes(1);
    expect(spy2.complete).not.toHaveBeenCalled();
    component2.ngOnDestroy();
    expect(spy2.complete).toHaveBeenCalledTimes(1);
  });

  it('should work with multiple observables', () => {
    // Arrange
    const spy = createObserver();
    const spy2 = createObserver();
    const spy3 = createObserver();

    class Test {
      obs = new Subject().pipe(untilDestroyed(this)).subscribe(spy);
      obs2 = new Subject().pipe(untilDestroyed(this)).subscribe(spy2);
      obs3 = new Subject().pipe(untilDestroyed(this)).subscribe(spy3);

      ngOnDestroy() {}
    }

    // Act
    const instance = new Test();
    instance.ngOnDestroy();

    // Assert
    expect(spy.complete).toHaveBeenCalledTimes(1);
    expect(spy2.complete).toHaveBeenCalledTimes(1);
    expect(spy3.complete).toHaveBeenCalledTimes(1);
  });

  it('should work with classes that are not components', () => {
    // Arrange
    const spy = createObserver();

    // Act
    class Test {
      obs = new Subject().pipe(untilDestroyed(this, 'destroy')).subscribe(spy);

      destroy() {}
    }

    // Assert
    const instance = new Test();
    instance.destroy();
    expect(spy.complete).toHaveBeenCalledTimes(1);
  });

  it('should unsubscribe from anywhere', () => {
    // Arrange
    const spy = createObserver();
    const spy2 = createObserver();
    const spy3 = createObserver();

    class LoginComponent {
      dummy = new Subject().pipe(untilDestroyed(this)).subscribe(spy);

      constructor() {
        new Subject().pipe(untilDestroyed(this)).subscribe(spy2);
      }

      ngOnInit() {
        new Subject().pipe(untilDestroyed(this)).subscribe(spy3);
      }

      ngOnDestroy() {}
    }

    // Act
    const instance = new LoginComponent();
    instance.ngOnInit();
    instance.ngOnDestroy();

    // Assert
    expect(spy.complete).toHaveBeenCalledTimes(1);
    expect(spy2.complete).toHaveBeenCalledTimes(1);
    expect(spy3.complete).toHaveBeenCalledTimes(1);
  });

  it('should throw when destroy method doesnt exist', () => {
    // Arrange
    const spy = createObserver();

    class LoginComponent {
      dummy = new Subject().pipe(untilDestroyed(this)).subscribe(spy);
    }

    // Assert
    expect(() => new LoginComponent()).toThrow();
  });

  it('should not throw when destroy method is implemented on super class', () => {
    // Arrange
    const spy = createObserver();

    class LoginComponent {
      dummy = new Subject().pipe(untilDestroyed(this)).subscribe(spy);
    }

    class A {
      ngOnDestroy() {}
    }

    class B extends A {
      dummy = new Subject().pipe(untilDestroyed(this)).subscribe(spy);
    }

    // Assert
    expect(() => new B()).not.toThrow();
  });

  it('should work with subclass', () => {
    // Arrange
    const spy = createObserver();

    class Parent {
      ngOnDestroy() {}
    }

    class Child extends Parent {
      constructor() { super();}
      obs = new Subject().pipe(untilDestroyed(this)).subscribe(spy);
    }

    // Assert
    const instance = new Child();
    instance.ngOnDestroy();
    expect(spy.complete).toHaveBeenCalledTimes(1);
  });
});
