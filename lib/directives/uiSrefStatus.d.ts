import { EventEmitter } from '@angular/core';
import { UISref } from './uiSref';
import { TargetState, UIRouterGlobals } from '@uirouter/core';
import * as i0 from "@angular/core";
/**
 * UISref status emitted from [[UISrefStatus]]
 */
export interface SrefStatus {
    /** The sref's target state (or one of its children) is currently active */
    active: boolean;
    /** The sref's target state is currently active */
    exact: boolean;
    /** A transition is entering the sref's target state */
    entering: boolean;
    /** A transition is exiting the sref's target state */
    exiting: boolean;
    /** The enclosed sref(s) target state(s) */
    targetStates: TargetState[];
}
/**
 * A directive which emits events when a paired [[UISref]] status changes.
 *
 * This directive is primarily used by the [[UISrefActive]] directives to monitor `UISref`(s).
 *
 * This directive shares two attribute selectors with `UISrefActive`:
 *
 * - `[uiSrefActive]`
 * - `[uiSrefActiveEq]`.
 *
 * Thus, whenever a `UISrefActive` directive is created, a `UISrefStatus` directive is also created.
 *
 * Most apps should simply use `UISrefActive`, but some advanced components may want to process the
 * [[SrefStatus]] events directly.
 *
 * ```js
 * <li (uiSrefStatus)="onSrefStatusChanged($event)">
 *   <a uiSref="book" [uiParams]="{ bookId: book.id }">Book {{ book.name }}</a>
 * </li>
 * ```
 *
 * The `uiSrefStatus` event is emitted whenever an enclosed `uiSref`'s status changes.
 * The event emitted is of type [[SrefStatus]], and has boolean values for `active`, `exact`, `entering`, and `exiting`; also has a [[StateOrName]] `identifier`value.
 *
 * The values from this event can be captured and stored on a component (then applied, e.g., using ngClass).
 *
 * ---
 *
 * A single `uiSrefStatus` can enclose multiple `uiSref`.
 * Each status boolean (`active`, `exact`, `entering`, `exiting`) will be true if *any of the enclosed `uiSref` status is true*.
 * In other words, all enclosed `uiSref` statuses  are merged to a single status using `||` (logical or).
 *
 * ```js
 * <li (uiSrefStatus)="onSrefStatus($event)" uiSref="admin">
 *   Home
 *   <ul>
 *     <li> <a uiSref="admin.users">Users</a> </li>
 *     <li> <a uiSref="admin.groups">Groups</a> </li>
 *   </ul>
 * </li>
 * ```
 *
 * In the above example, `$event.active === true` when either `admin.users` or `admin.groups` is active.
 *
 * ---
 *
 * This API is subject to change.
 */
export declare class UISrefStatus {
    /** current statuses of the state/params the uiSref directive is linking to */
    uiSrefStatus: EventEmitter<SrefStatus>;
    /** Monitor all child components for UISref(s) */
    private _srefs;
    /** The current status */
    status: SrefStatus;
    /** @internal */ private _subscription;
    /** @internal */ private _srefChangesSub;
    /** @internal */ private _srefs$;
    /** @internal */ private _globals;
    /** @internal */ private _hostUiSref;
    constructor(_hostUiSref: UISref, _globals: UIRouterGlobals);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private _setStatus;
    static ɵfac: i0.ɵɵFactoryDeclaration<UISrefStatus, [{ optional: true; host: true; self: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UISrefStatus, "[uiSrefStatus],[uiSrefActive],[uiSrefActiveEq]", ["uiSrefStatus"], {}, { "uiSrefStatus": "uiSrefStatus"; }, ["_srefs"], never, false, never>;
}
