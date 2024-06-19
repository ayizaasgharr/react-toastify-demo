import Section from "@/components/typography/headings/section"
import { toastify } from "@/types/toastifyType";

interface CodeProps {
    state: toastify;
    type: string;
  }

const Code : React.FC<CodeProps> =({state,type})=>{
return (
    <div className="md:w-6/12 lg:12/12">
    <Section text={`Toast ${type}`}/>
    <div className="editor bg-gray-800 text-gray-200 rounded-lg p-4 shadow-lg w-3/4">
        <pre><code>
        {`          <Toast position={${state.position}}
          duration={${state.duration}}
          animationStyle={${state.animationStyle}}
          closeOnClick={${state.closeOnClick}}
          />`}
        </code></pre>
        </div>
    </div>
)
}
export default Code