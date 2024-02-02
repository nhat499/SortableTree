import { BoxProps } from "@mui/material";
import { ReactNode, RefObject } from "react";
import { TreeDataProps } from "./SortableTree";
import React from "react";
export declare const INDENTATION = 40;
export interface RenderNodeDisplayProps {
    isDragging: boolean;
    dragRef: RefObject<HTMLDivElement>;
    dropRef: RefObject<HTMLDivElement>;
}
export interface SortableTreeNodeProps<TData> {
    /** The React DND item type: https://react-dnd.github.io/react-dnd/docs/overview#items-and-types */
    itemTypes: string;
    /** Whether the node is currently allowed to be dragged. */
    draggable: boolean;
    /** Callback fired when a node is dropped onto another node. */
    onDrop?: (
    /** The drag id of the dropped node. */
    dragId: string, 
    /** The id of the node that the dragged node was dropped onto. */
    locationId: string, 
    /** The index of the node that the dragged node was dropped onto. */
    LocationIndex: number) => void;
    /** The data associated with the node. */
    node: TreeDataProps<TData>;
    /** Whether children of this node should be visible. */
    isShowChildren: boolean;
    /** A function that returns the id and index given a node's id. */
    findNodePlacement: (nodeId: string) => {
        id: string;
        index: number;
    } | undefined;
    /** Callback fired when a drag ends over a non-droppable area. */
    onDragCancel?: (id: string, draggedId: string, index?: number) => void;
    /** Whether or not the node supports nesting. */
    isNestable: boolean;
    /** A state setting function for the isShowChildren prop. */
    setIsShowChildren: (value: boolean) => void;
    /** Callback fired when a node is moved. The id of the dragged node and the hovered node are provided as arguments to the handler. */
    moveNode?: (id: string, hoverId: string) => void;
    /** Callback fired when a node is nested. The id of the dragged node and the hovered node are provided as arguments to the handler. */
    nestNode: (id: string, draggedId: string, index?: number) => void;
    /** Render prop used to display the contents of the node. */
    nodeDisplay: (value: RenderNodeDisplayProps) => ReactNode;
    /** Styling applied to the dragged element as it is being moved. */
    dragStyle: BoxProps["sx"];
    children: ReactNode;
}
declare const SortableTreeNode: <TData>({ itemTypes, node, children, isShowChildren, setIsShowChildren, findNodePlacement, onDragCancel, moveNode, nestNode, isNestable, nodeDisplay, onDrop, draggable, dragStyle, }: SortableTreeNodeProps<TData>) => React.JSX.Element;
export default SortableTreeNode;
