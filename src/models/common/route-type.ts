import { ReactNode, ReactElement } from "react";

export type RouteType = {
    path: string,
    element: ReactNode,
    label: string,
    authenticatedBy?: boolean,
    adminOnly?: boolean,
    childRoutes?: RouteType[];
    indexElement?: ReactNode,
    icon?: ReactElement,
};
