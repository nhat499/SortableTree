import { ReactNode } from "react";
import { RenderNodeDisplayProps, SortableTreeNodeProps } from "./SortableTreeNode";
import { FoundNode } from "./utils";
import React from "react";
export interface TreeDataProps<TData> {
    data: TData;
    id: string;
    children: Array<TreeDataProps<TData>>;
}
export interface SortableTreeProps<TData extends object> {
    /** Whether the tree should allow nesting of tree nodes. */
    allowNesting?: boolean;
    /** Whether the tree is in an editable state or read-only state. */
    editMode: boolean;
    /** The data representing the current state of the tree. */
    treeData: TreeDataProps<TData>;
    /** The React DND item type: https://react-dnd.github.io/react-dnd/docs/overview#items-and-types */
    group: SortableTreeNodeProps<TData>["itemTypes"];
    /** Callback that is fired when an item is dropped. */
    onDrop?: SortableTreeNodeProps<TData>["onDrop"];
    /**  Callback that is fired when a drag is cancelled (a drag ends over an undroppable position). */
    onDragCancel?: SortableTreeNodeProps<TData>["onDragCancel"];
    /** Callback that is fired when a node is hovered over another node in the tree. */
    onMoveNode?: (dragNode: FoundNode<TData>, hoverNode: FoundNode<TData>) => void;
    /** Callback that is fired when a node is nested inside of another node. */
    onNestedNode?: (dragNode: FoundNode<TData>, hoverNode: FoundNode<TData>) => void;
    /** A state setting function to update the tree. */
    setTreeData: React.Dispatch<React.SetStateAction<TreeDataProps<TData>>>;
    /** A render prop used to render each individual node in the tree. */
    RenderNodeDisplay: (props: NodeDisplayProps<TData>) => ReactNode;
    /** Custom styling applied to a node as it is being dragged. */
    dragStyle?: SortableTreeNodeProps<TData>["dragStyle"];
    /** An array of keys corresponding to keys in the tree data that should be used for memoization. */
    memoKeys?: TreeNodeProps<TData>["memoKeys"];
}
declare const SortableTree: <TData extends object>({ allowNesting, group, editMode, treeData, onDrop, onMoveNode, setTreeData, onNestedNode, RenderNodeDisplay, onDragCancel, dragStyle, memoKeys, }: SortableTreeProps<TData>) => React.JSX.Element;
export default SortableTree;
export interface NodeDisplayProps<TData> extends RenderNodeDisplayProps {
    node: TreeDataProps<TData>;
    index: number;
    parentId: string;
    editMode: boolean;
    numChildren: number;
    isShowChildren: boolean;
    setIsShowChildren: (value: boolean) => void;
}
export interface TreeNodeProps<TData extends object> {
    index: number;
    parentId: string;
    editMode: boolean;
    numChildren: number;
    node: SortableTreeNodeProps<TData>["node"];
    children: SortableTreeNodeProps<TData>["children"];
    itemTypes: SortableTreeNodeProps<TData>["itemTypes"];
    findNodePlacement: SortableTreeNodeProps<TData>["findNodePlacement"];
    nest: SortableTreeNodeProps<TData>["isNestable"];
    nestNode: SortableTreeNodeProps<TData>["nestNode"];
    moveNode?: SortableTreeNodeProps<TData>["moveNode"];
    onDrop?: SortableTreeNodeProps<TData>["onDrop"];
    onDragCancel?: SortableTreeNodeProps<TData>["onDragCancel"];
    RenderNodeDisplay: SortableTreeProps<TData>["RenderNodeDisplay"];
    dragStyle: SortableTreeNodeProps<TData>["dragStyle"];
    memoKeys?: Array<keyof TData>;
}
