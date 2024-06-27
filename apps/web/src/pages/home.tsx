// import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

// import { Button } from "@/components/ui/button";

// function App() {
//   const [html, setHtml] = useState("");

//   const get = async () => {
//     const response = await fetch("http://localhost:3000/ingredient");
//     const data = await response.json();
//     console.log(data);
//     setHtml(JSON.stringify(data.response, null, 2));
//   };

//   return (
//     <>
//       <div>
//         <h1 className="text-3xl font-bold underline">Hello world!</h1>
//         <Button variant="outline" onClick={get}>Button</Button>
//         <pre>{html}</pre>
//       </div>
//     </>
//   );
// }

// export default App;

export const HomePage = () => {
  const [html, setHtml] = useState("");

  const get = async () => {
    const response = await fetch("http://localhost:3000/ingredient");
    const data = await response.json();
    console.log(data);
    setHtml(JSON.stringify(data.response, null, 2));
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Button variant="outline" onClick={get}>
          Button
        </Button>
        <pre>{html}</pre>
      </div>
    </>
  );
};
