import React from "react";
import { Alert } from "@/components/ui/alert";
import { Ear, Earth } from "lucide-react";

const App = () => {
  return (
    <Alert className="w-[300px] flex items-center gap-2">
      <div>
        <Earth />
      </div>
      <div>Hello react app</div>
    </Alert>
  );
};

export default App;
