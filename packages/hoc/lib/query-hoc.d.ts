import React from 'react';
import { DocumentNode } from 'graphql';
import { OperationOption, DataProps } from './types';
export declare function withQuery<TProps extends TGraphQLVariables | {} = {}, TData = {}, TGraphQLVariables = {}, TChildProps = DataProps<TData, TGraphQLVariables>>(document: DocumentNode, operationOptions?: OperationOption<TProps, TData, TGraphQLVariables, TChildProps>): (WrappedComponent: React.ComponentType<TProps & TChildProps>) => React.ComponentClass<TProps, any>;
