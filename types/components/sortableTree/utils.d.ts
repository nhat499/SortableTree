import { TreeDataProps } from "./SortableTree";
export interface FoundNode<TData> {
    parentNode: TreeDataProps<TData>;
    index: number;
    node: TreeDataProps<TData>;
}
export declare const findNodeRecursion: <TData>(parentNode: TreeDataProps<TData>, currId: string, hoverId: string, treeNode: TreeDataProps<TData>[], result: {
    curr: FoundNode<TData> | undefined;
    hover: FoundNode<TData> | undefined;
}) => {
    curr: FoundNode<TData> | undefined;
    hover: FoundNode<TData> | undefined;
};
export declare const findNode: <TData>(nodeId: string, treeNode: TreeDataProps<TData>) => TreeDataProps<TData> | undefined;
export declare const findNodeIndex: <TData>(nodeId: string, treeNode: TreeDataProps<TData>) => {
    id: string;
    index: number;
} | undefined;
