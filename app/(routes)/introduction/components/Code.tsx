import Section from "@/components/typography/headings/section";
import { CodeProps } from "@/app/interfaces/code";

const Code: React.FC<CodeProps> = ({ state, type, checkbox }) => (
  <div>
    <Section text={`Toast ${type}`} />
    <div className='editor bg-gray-800 text-gray-200 rounded-lg p-4 shadow-lg flex-wrap flex space-x-4 text-left'>
      {type == 'Container' ? (
        <pre>
          <code >
            {`
          <Toast position={${state.position}}
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
            {`toast.${state.toastType}("Post created!!", 
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
 
export default Code;
