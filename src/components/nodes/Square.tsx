import { NodeResizer } from "@reactflow/node-resizer";
import { Handle, NodeProps, Position } from "reactflow";

import "@reactflow/node-resizer/dist/style.css";

export function Square({ selected }: NodeProps) {
  return (
    <div className="bg-violet-500 rounded h-full w-full min-w-[200px] min-h-[200px]">
      <NodeResizer
        minWidth={200}
        minHeight={200}
        lineClassName="border-blue-400"
        handleClassName="h-2 w-2 bg-white border-2 rounded border-blue-400"
        isVisible={selected}
      />

      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 w-3 h-3 border-2 bg-transparent border-blue-400"
      />
      <Handle
        id="left"
        type="source"
        position={Position.Left}
        className="-left-5 w-3 h-3 border-2 bg-transparent border-blue-400"
      />
      <Handle
        id="top"
        type="source"
        position={Position.Top}
        className="-top-5 w-3 h-3 border-2 bg-transparent border-blue-400"
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        className="-bottom-5 w-3 h-3 border-2 bg-transparent border-blue-400"
      />
    </div>
  );
}
