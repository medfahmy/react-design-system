import React from "react";
import { FontSize } from "@ds.e/foundation";
type TextProps = {
    size?: FontSize;
    children: React.ReactNode;
};
export declare function Text({ size, children }: TextProps): React.JSX.Element;
export {};