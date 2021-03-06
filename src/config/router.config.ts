import { UIRouter } from "@uirouter/core";
import { visualizer } from "@uirouter/visualizer";
import { Injector, Injectable } from "@angular/core";
import { PeopleService } from "../services/people";

/** UIRouter Config Function  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  // Configure the initial state
  // If the browser URL doesn't matches any state when the router starts,
  // go to the `hello` state by default
  router.urlService.rules.initial({ state: "hello" });

  // Use @uirouter/visualizer to show the states and transitions
  visualizer(router);
}
