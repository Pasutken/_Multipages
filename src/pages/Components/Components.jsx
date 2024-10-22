import Add from "../../component/Add/Add";
import Counter from "../../component/Counter/Counter";
import Temperatures from "../../component/Temperatures/Temperatures";
import Timer from "../../component/Timer/Timer";

import "./Components.css";

function Components() {
  return (
    <div className="container">
      <div className="app-all">
        <div className="app-container">
          <Counter />
          <Timer />
        </div>
        <div className="app-add">
          <Add />
        </div>
      </div>
      <div className="app-temperatures">
        <Temperatures />
      </div>
    </div>
  );
}

export default Components;
