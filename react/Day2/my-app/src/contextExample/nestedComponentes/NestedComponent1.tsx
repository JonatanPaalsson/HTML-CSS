import NestedComponent2 from "./NestedComponent2";
import { Theme } from "../ThemeContext";

export type NestedComponentType = {
  theme: Theme;
  changeTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const NestedComponent1 = (props: NestedComponentType) => {
  console.log("NestedComponent1");
  return <NestedComponent2 {...props}></NestedComponent2>;
};

export default NestedComponent1;
