
export const toastProperties = [
    {
      name: "width",
      type: "number",
      default: 256,
      description: "Width of toast",
    },
    {
      name: "height",
      type: "number",
      default: 68,
      description: "Height of the toast",
    },
    {
      name: "style",
      type: "any",
      default: null,
      description: "Style applied to the toast",
    },
    {
      name: "textStyle",
      type: "any",
      default: null,
      description: "Style applied to the toast content",
    },
    {
      name: "position",
      type: "top, center or bottom",
      default: "top",
      description: "Position of toast",
    },
    {
      name: "positionValue",
      type: "number",
      default: 50,
      description: "Position value of toast",
    },
    {
      name: "duration",
      type: "number",
      default: 3000,
      description: "The display time of toast",
    },
    {
      name: "animationStyle",
      type: "upInUpOut, rightInOut or zoomInOut",
      default: "upInUpOut",
      description: "The animation style of toast",
    },
    {
      name: "animationIn",
      type: "string or object",
      default: "slideInRight",
      description: "Toast show animation",
    },
    {
      name: "animationOut",
      type: "string or object",
      default: "slideOutLeft",
      description: "Toast hide animation",
    },
    {
      name: "animationInTiming",
      type: "number",
      default: 300,
      description: "Timing for the Toast show animation (in ms)",
    },
    {
      name: "animationOutTiming",
      type: "number",
      default: 300,
      description: "Timing for the toast hide animation (in ms)",
    },
    {
      name: "backdropTransitionInTiming",
      type: "number",
      default: 300,
      description: "The backdrop show timing (in ms)",
    },
    {
      name: "backdropTransitionOutTiming",
      type: "number",
      default: 300,
      description: "The backdrop hide timing (in ms)",
    },
    {
      name: "hasBackdrop",
      type: "bool",
      default: false,
      description: "Render the backdrop",
    },
    {
      name: "backdropColor",
      type: "string",
      default: "black",
      description: "The backdrop background color",
    },
    {
      name: "backdropOpacity",
      type: "number",
      default: 0.2,
      description: "The backdrop opacity when the toast is visible",
    },
  ];
  
  export const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "type",
    label: "Type",
  },
  {
    key: "default",
    label: "Default",
  },
  {
    key: "description",
    label: "Description",
  },
];
