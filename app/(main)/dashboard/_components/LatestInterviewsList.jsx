"use client";
import { Button } from "@/components/ui/button";
import { Plus, Video } from "lucide-react";
import React, { useState } from "react";

function LatestInterviewsList() {
  const [interviewList, setInterviewList] = useState([]);
  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl">Previously Created Interview</h2>
      {interviewList?.length == 0 && <div className="p-4 flex flex-col gap-4 items-center mt-5">
        <Video className="h-10 w-10 text-primary"/>
        <h2>You don't have any interview created</h2>
        <Button><Plus/>Create New Interview</Button>
        </div>}
    </div>
  );
}

export default LatestInterviewsList;
