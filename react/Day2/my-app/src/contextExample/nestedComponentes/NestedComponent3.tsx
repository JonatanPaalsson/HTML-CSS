import { NestedComponentType } from "./NestedComponent1";
import NestedComponent4 from "./NestedComponent4";

const NestedComponent3 = (props: NestedComponentType) => {
  console.log("NestedComponent3");
  return <NestedComponent4 {...props}></NestedComponent4>;
};

export default NestedComponent3;
