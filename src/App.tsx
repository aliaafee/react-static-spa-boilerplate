import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import "./index.css";

interface AppProps {
  message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>Hello React Components</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button>Proceed</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default App;
