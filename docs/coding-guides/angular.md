# Introduction to Angular

[Angular](https://angular.io) (aka Angular 2) is a new framework completely rewritten from the ground up, replacing the
famous [AngularJS](https://angularjs.org) framework (aka Angular 1.x).

More that just a framework, Angular should now be considered as a whole *platform* which comes with a complete set of
tools, like its own [CLI](https://github.com/angular/angular-cli), [debug utilities](https://augury.angular.io) or
[performance tools](https://github.com/angular/angular/tree/master/modules/%40angular/benchpress).

## Getting started

#### Newcomer

If you're new to Angular you may feel overwhelmed by the quantity of new concepts to apprehend, so before digging in
this project you may want to start with [this progressive tutorial](https://angular.io/docs/ts/latest/tutorial/) that
will guide you step by step into building a complete Angular application.

#### Angular 1 veteran

If you come from Angular 1 and want to dig straight in the new version, you may want to take a look at the
[Angular 1 vs 2 quick reference](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html).

## Style guide

This project follows the standard [Angular style guide](https://angular.io/styleguide).

More that just coding rules, this style guide also gives advices and best pratices for a good application architecture
and is an **essential reading** for starters. 

## Cheatsheet

Until you know the full Angular API by heart, you may want to keep this
[cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html) that resumes the syntax and features on a single
page at hand.

## Going deeper

Even though they are not mandatory, Angular was designed for the use of design patterns you may not be accustomed to,
like [reactive programming](#reactive-programming), [unidirectional data flow](#unidirectional-data-flow) and
[centralized state management](#centralized-state-management).

These concepts are difficult to resume in a few words, and despite being tightly related to each other they concern
specific parts of an application flow, each being quite deep to learn on its own.

You will essentially find here a list of good starting points to learn more on these subjects. 

#### Reactive programming

Angular uses [RxJS](http://reactivex.io/rxjs/) to implement the *Observable* pattern. An *Observable* is a stream of
asynchronous events that can be processed with array-like operators.

##### From promises to observables

While Angular 1 used to rely heavily on [*Promises*](https://docs.angularjs.org/api/ng/service/$q) to handle
asynchronous events, *Observables* are now used instead in this new Angular version. Even though in specific cases
like for HTTP requests, an *Observable* can be converted into a *Promise*, it is recommended to embrace the new
paradigm as it can a lot more than *Promises*, with way less code. This transition is also explained in the
[Angular tutorial](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html#!#observables).

##### Learning references
 
- [What is reactive programming?](http://paulstovell.com/blog/reactive-programming), explained nicely through a simple
  imaged story *(5 min)*

- [The introduction to reactive programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754),
  the title says it all *(30 min)*

- [Functional reactive programming for Angular 2 developers](http://blog.angular-university.io/functional-reactive-programming-for-angular-2-developers-rxjs-and-observables/),
  see the functional reactive programming principles in practice with Angular *(15 min)*

- [RxMarbles](http://rxmarbles.com), a graphical representation of Rx operators

#### Unidirectional data flow

In opposition with Angular 1 where one of its selling points was two-way data binding, Angular now enforces
unidirectional data flow. What does it means? Said with other words, it means that change detection cannot cause cycles,
which was one of Angular 1 problematic points. It also helps to maintain simpler and more predictable data flows in
applications, along with substantial performance improvements.

*Wait, then why the Angular documentation have mention of a
[two-way binding syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#binding-syntax)?*

If you look closely, the new two-way binding syntax is just syntactic sugar to combine two *one-way* bindings (a
*property* and *event* binding), keeping the data flow unidirectional.

This change is really important, as it was often the cause of performance issues with Angular 1, and it one of the
pillars enabling better performance in new Angular apps.

While Angular tries to stay *pattern-agnostic* and can be used with conventional MV* patterns, it was designed with
reactive programming in mind and really shines when used with reactive data flow patterns like
[Redux](http://redux.js.org/docs/basics/DataFlow.html),
[Flux](https://facebook.github.io/flux/docs/in-depth-overview.html#content) or
[MVI](http://futurice.com/blog/reactive-mvc-and-the-virtual-dom).

#### Centralized state management

As applications grow in size, keeping track of the all its individual components state and data flows can become
tedious, and tend to be difficult to manage and debug.

The main goal of using a centralized state management is to make state changes *predictable* by imposing certain
restrictions on how and when updates can happen, using *unidirectional data flow*. This approach was first popularized
with React with introduction of the [Flux](https://facebook.github.io/flux/docs/in-depth-overview.html#content)
architecture. Many libraries emerged then trying to adapt and refine the original concept, and one of these gained
massive popularity by providing a simpler, elegant alternative: [Redux](http://redux.js.org/docs/basics/DataFlow.html).
Redux is at the same time a library (with the big *R*) and a design pattern (with the little *r*), the latter being
framework-agnostic and working very well with Angular.

The *redux* design pattern is based on these [3 principles](http://redux.js.org/docs/introduction/ThreePrinciples.html):

- The application state is a *single immutable* data structure
- A state change is triggered by an *action*, an object describing what happened
- Pure functions called *reducers* take the previous state and the next action to compute the new state

The core concepts behind these principles are nicely explained in
[this example](http://redux.js.org/docs/introduction/CoreConcepts.html) *(3 min)*.

##### Which library to use?

You can make Angular work with any state management library you like, but your best bet would be to use
[@ngrx/store](https://github.com/ngrx/store). It works the same as the popular [Redux](http://redux.js.org) library,
but with a tight integration with Angular and [RxJS](http://reactivex.io/rxjs/), with some nice additional developer
utilities.

Here are some resources to get started:

- [Build a better Angular 2 application with redux and ngrx](http://onehungrymind.com/build-better-angular-2-application-redux-ngrx/),
  a nice tutorial for @ngrx/store *(30 min)*

- [Comprehensive introduction to @ngrx/store](https://gist.github.com/btroncone/a6e4347326749f938510), an in-depth
  walkthrough to this library usage in Angular *(60 min)*

##### When to use it?

You may have noticed that the starter template does not include a centralized state management system out of the box.
Why is that? Well, while there is many benefits from using this pattern, the choice is ultimately up to your team and
what you want to achieve with your app.

Keep in mind that using a single centralized state for your app introduces a new layer a complexity
[that might not be needed](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367), depending of your
goal.
