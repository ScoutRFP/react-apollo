import React from 'react';
export declare function getDataFromTree(tree: React.ReactNode, context?: {
    [key: string]: any;
}): Promise<string>;
export declare type GetMarkupFromTreeOptions = {
    tree: React.ReactNode;
    context?: {
        [key: string]: any;
    };
    renderFunction?: (tree: React.ReactElement<any>) => string;
};
export declare function getMarkupFromTree({ tree, context, renderFunction }: GetMarkupFromTreeOptions): Promise<string>;
