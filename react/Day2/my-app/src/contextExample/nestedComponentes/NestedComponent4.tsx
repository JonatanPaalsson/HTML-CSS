import { useContext } from "react";
import { NestedComponentType } from "./NestedComponent1";
import { Theme, ThemeContext } from "../ThemeContext";
import { Button } from "../../components";

const NestedComponent4 = ({ theme, changeTheme }: NestedComponentType) => {
  const themeContext = useContext(ThemeContext);

  console.log("NestedComponent4");

  if (!themeContext) return null;

  const getInverseTheme = (theme: Theme) => {
    return theme === "dark" ? "light" : "dark";
  };

  return (
    <div>
      {/* 
        GOOD SOLUTION
        This button will only trigger a rerender of this component. Only console.log("NestedComponent4") will happend 
      */}
      <div>
        <Button
          text="Change theme from context"
          callback={() =>
            themeContext.setTheme(getInverseTheme(themeContext.theme))
          }
        ></Button>
        <p>{themeContext.theme}</p>
      </div>

      {/* 
        BAD SOLUTION
        This button will trigger a rerender of all NestedComponents. So console.log() will happen for all components 
      */}
      <div>
        <Button
          text="Change theme from props"
          callback={() => changeTheme(getInverseTheme(theme))}
        ></Button>
        <p>{theme}</p>
      </div>
    </div>
  );
};

export default NestedComponent4;
