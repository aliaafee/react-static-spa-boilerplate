import * as React from "react";

import { cn } from "@/lib/utils";

import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import "./index.css";

const App = ({ message }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
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
