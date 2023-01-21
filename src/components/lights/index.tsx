import { ReactElement } from "react";

function Lights(): ReactElement {
  return (
    <>
      <ambientLight intensity={1}/>
    </>
  );
}

export default Lights;
