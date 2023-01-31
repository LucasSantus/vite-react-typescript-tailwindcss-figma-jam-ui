import ReactFlow, { Background, Controls, Node } from "reactflow";
import "reactflow/dist/style.css";
import { zinc } from "tailwindcss/colors";
import { Square } from "./components/nodes/Square";

const NODE_TYPES = {
  square: Square,
};

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: "square",
    position: {
      x: 200,
      y: 400,
    },
    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: "square",
    position: {
      x: 1000,
      y: 400,
    },
    data: {},
  },
] satisfies Node[];

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodeTypes={NODE_TYPES} nodes={INITIAL_NODES}>
        <Background gap={12} size={2} color={zinc[200]} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;