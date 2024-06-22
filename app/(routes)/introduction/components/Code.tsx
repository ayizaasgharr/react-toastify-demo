import Section from "@/components/typography/headings/section";
import { checkbox, toastify } from "@/types/toastifyType";

interface CodeProps {
  state: toastify;
  checkbox: checkbox;
  type: string;
}

const Code: React.FC<CodeProps> = ({ state, type, checkbox }) => {
  return (
    <div>
      <Section text={`Toast ${type}`} />
      <div className="editor bg-gray-800 text-gray-200 rounded-lg p-4 shadow-lg flex-wrap flex space-x-4">
        {type == "Container" ? (
          <pre>
            <code>
              {`          <Toast position={${state.position}}
          duration={${!checkbox.disableAutoClose && state.duration}}
          animationStyle={${state.animationStyle}}
          closeOnClick={${state.closeOnClick}}
          hasBackDrop={${checkbox.hasBackDrop}}
          style={{backgroundColor:"${state.backgroundColor}"}}
          />`}
            </code>
          </pre>
        ) : (
          <pre>
            <code>
              {`        toast.${state.toastType}("Post created!!", 
        { position={${state.position}}
          duration={${!checkbox.disableAutoClose && state.duration}}
          animationStyle={${state.animationStyle}}
          closeOnClick={${state.closeOnClick}}
        })`}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
};
export default Code;
