import { isFunction } from '@uirouter/core';
import { isDefined } from '@uirouter/core';
export function applyModuleConfig(uiRouter, injector, module = {}) {
    if (isFunction(module.config)) {
        module.config(uiRouter, injector, module);
    }
    const states = module.states || [];
    return states.map((state) => uiRouter.stateRegistry.register(state));
}
export function applyRootModuleConfig(uiRouter, injector, module) {
    isDefined(module.deferIntercept) && uiRouter.urlService.deferIntercept(module.deferIntercept);
    isDefined(module.otherwise) && uiRouter.urlService.rules.otherwise(module.otherwise);
    isDefined(module.initial) && uiRouter.urlService.rules.initial(module.initial);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlSb3V0ZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdWlSb3V0ZXJDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFZLFVBQVUsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBR25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxNQUFNLFVBQVUsaUJBQWlCLENBQUMsUUFBa0IsRUFBRSxRQUFrQixFQUFFLFNBQXVCLEVBQUU7SUFDakcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUNuQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxRQUFrQixFQUFFLFFBQWtCLEVBQUUsTUFBa0I7SUFDOUYsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUYsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JGLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlSb3V0ZXIsIGlzRnVuY3Rpb24sIFN0YXRlT2JqZWN0IH0gZnJvbSAnQHVpcm91dGVyL2NvcmUnO1xuaW1wb3J0IHsgU3RhdGVzTW9kdWxlLCBSb290TW9kdWxlIH0gZnJvbSAnLi91aVJvdXRlck5nTW9kdWxlJztcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0RlZmluZWQgfSBmcm9tICdAdWlyb3V0ZXIvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU1vZHVsZUNvbmZpZyh1aVJvdXRlcjogVUlSb3V0ZXIsIGluamVjdG9yOiBJbmplY3RvciwgbW9kdWxlOiBTdGF0ZXNNb2R1bGUgPSB7fSk6IFN0YXRlT2JqZWN0W10ge1xuICBpZiAoaXNGdW5jdGlvbihtb2R1bGUuY29uZmlnKSkge1xuICAgIG1vZHVsZS5jb25maWcodWlSb3V0ZXIsIGluamVjdG9yLCBtb2R1bGUpO1xuICB9XG5cbiAgY29uc3Qgc3RhdGVzID0gbW9kdWxlLnN0YXRlcyB8fCBbXTtcbiAgcmV0dXJuIHN0YXRlcy5tYXAoKHN0YXRlKSA9PiB1aVJvdXRlci5zdGF0ZVJlZ2lzdHJ5LnJlZ2lzdGVyKHN0YXRlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVJvb3RNb2R1bGVDb25maWcodWlSb3V0ZXI6IFVJUm91dGVyLCBpbmplY3RvcjogSW5qZWN0b3IsIG1vZHVsZTogUm9vdE1vZHVsZSkge1xuICBpc0RlZmluZWQobW9kdWxlLmRlZmVySW50ZXJjZXB0KSAmJiB1aVJvdXRlci51cmxTZXJ2aWNlLmRlZmVySW50ZXJjZXB0KG1vZHVsZS5kZWZlckludGVyY2VwdCk7XG4gIGlzRGVmaW5lZChtb2R1bGUub3RoZXJ3aXNlKSAmJiB1aVJvdXRlci51cmxTZXJ2aWNlLnJ1bGVzLm90aGVyd2lzZShtb2R1bGUub3RoZXJ3aXNlKTtcbiAgaXNEZWZpbmVkKG1vZHVsZS5pbml0aWFsKSAmJiB1aVJvdXRlci51cmxTZXJ2aWNlLnJ1bGVzLmluaXRpYWwobW9kdWxlLmluaXRpYWwpO1xufVxuIl19