import { is, BrowserLocationConfig } from '@uirouter/core';
import { PathLocationStrategy } from '@angular/common';
export class Ng2LocationConfig extends BrowserLocationConfig {
    _locationStrategy;
    constructor(router, _locationStrategy) {
        super(router, is(PathLocationStrategy)(_locationStrategy));
        this._locationStrategy = _locationStrategy;
    }
    baseHref(href) {
        return this._locationStrategy.getBaseHref();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25Db25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbG9jYXRpb24vbG9jYXRpb25Db25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFZLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBb0Isb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RSxNQUFNLE9BQU8saUJBQWtCLFNBQVEscUJBQXFCO0lBQ3BCO0lBQXRDLFlBQVksTUFBZ0IsRUFBVSxpQkFBbUM7UUFDdkUsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFEdkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUV6RSxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQWE7UUFDcEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlSb3V0ZXIsIGlzLCBCcm93c2VyTG9jYXRpb25Db25maWcgfSBmcm9tICdAdWlyb3V0ZXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBOZzJMb2NhdGlvbkNvbmZpZyBleHRlbmRzIEJyb3dzZXJMb2NhdGlvbkNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKHJvdXRlcjogVUlSb3V0ZXIsIHByaXZhdGUgX2xvY2F0aW9uU3RyYXRlZ3k6IExvY2F0aW9uU3RyYXRlZ3kpIHtcbiAgICBzdXBlcihyb3V0ZXIsIGlzKFBhdGhMb2NhdGlvblN0cmF0ZWd5KShfbG9jYXRpb25TdHJhdGVneSkpO1xuICB9XG5cbiAgYmFzZUhyZWYoaHJlZj86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uU3RyYXRlZ3kuZ2V0QmFzZUhyZWYoKTtcbiAgfVxufVxuIl19