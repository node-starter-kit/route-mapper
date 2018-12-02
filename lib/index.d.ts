import { NextFunction, Request, Response, Router } from 'express';
export declare const createRouter: CreateRouter;
export interface Route<R, P> {
    action: (x: P | undefined) => Promise<R>;
    beforeware?: Array<(Request: any, res: Response, next: NextFunction) => void>;
    createParam?: (req: Request) => P;
    method: 'get' | 'post' | 'put' | 'delete';
    path: string;
}
interface PostAsyncHandler<R> {
    (req: Request, res: Response, next: NextFunction): (R: R) => R;
}
interface CreateRouter {
    <R>(routes: Route<R, unknown>[], postAsyncHandlers: PostAsyncHandler<R>[]): Router;
}
export {};
//# sourceMappingURL=index.d.ts.map