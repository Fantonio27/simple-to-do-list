import { Trash2, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";

export default function Form() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Task details</DialogTitle>
      </DialogHeader>
      <div className="">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="task_name">Task name</Label>
          <Input id="task_name" placeholder="Enter the task name" />
        </div>
      </div>

      <div className="">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Enter a short description" />
        </div>
      </div>

      <div className="">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="icon">Icon</Label>

          <ToggleGroup type="single">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="">
        <Label htmlFor="status">Status</Label>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex border border-gray-400 rounded-2xl items-center relative p-1 gap-3">
            <div className="flex items-center justify-center bg-pending-dark rounded-xl size-12">
              <Image width="25" height="25" src="/pending.svg" alt="pending" />
            </div>
            <p>In Progress</p>

            <div className="w-max h-max bg-[#3662E3] rounded-full p-1 absolute right-3">
              <Check color="white" size={15} />
            </div>
          </div>
          <div className="flex border border-gray-400 rounded-2xl items-center relative p-1 gap-3">
            <div className="flex items-center justify-center bg-success-dark rounded-xl size-12">
              <Image width="25" height="25" src="/success.svg" alt="success" />
            </div>
            <p>Completed</p>
          </div>

          <div className="flex border border-gray-400 rounded-2xl items-center relative p-1 gap-3">
            <div className="flex items-center justify-center bg-unsuccess-dark rounded-xl size-12">
              <Image
                width="25"
                height="25"
                src="/unsuccess.svg"
                alt="unsuccess"
              />
            </div>
            <p>Won't do</p>
          </div>
        </div>
      </div>
      <DialogFooter className="sm:justify-end">
        <Button className=" rounded-full px-6 bg-[#97A3B6] font-light tracking-wide text-base">
          Delete <Trash2 className="ml-2 h-5 w-5" />
        </Button>
        <Button
          type="submit"
          className="rounded-full px-6 bg-[#3662E3] font-light tracking-wide text-base"
        >
          Save <Check className="ml-2 h-5 w-5" />
        </Button>
      </DialogFooter>
    </>
  );
}
