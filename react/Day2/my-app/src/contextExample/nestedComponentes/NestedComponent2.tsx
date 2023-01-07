import { NestedComponentType } from "./NestedComponent1";
import NestedComponent3 from "./NestedComponent3";

const NestedComponent2 = (props: NestedComponentType) => {
  console.log("NestedComponent2");
  return <NestedComponent3 {...props}></NestedComponent3>;
};

export default NestedComponent2;
