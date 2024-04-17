import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Notes = () => {
  return (
    <>
      <div className="notes" id="notes">
        <div className="searchbar flex justify-center items-center mt-10">
          <div className="flex w-full max-w-lg items-center border rounded-full">
            <Input
              type="text"
              placeholder="Search for notes..."
              className="border-none"
            />
            <Button type="submit" className="">
              Search
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
