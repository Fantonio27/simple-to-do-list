import Header from "@/components/header";
import TaskCard from "@/components/taskCard";
import tasks from "@/assets/json/mock-data";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Form from "@/components/dialog/form";

export default function Home() {
  return (
    <main className="w-6/12 m-auto bg-red-300/0 my-16">
      <Header />

      <div className=" my-10 space-y-6">
        {tasks.map((task) => {
          return <TaskCard task={task} />;
        })}
        <AddTask />
      </div>
    </main>
  );
}

function AddTask() {
  return (
      <Dialog>
        <DialogTrigger>
          <div className="flex gap-7 items-center rounded-2xl p-4 bg-add-light shadow-md shadow-slate-300/30">
            <div className="flex justify-center items-center rounded-2xl bg-add-dark size-[54px]">
              <Image width="26" height="26" src="add.svg" alt="Add Icon" />
            </div>
            <h1 className="font-semibold text-xl">Add new Task</h1>
          </div>

          <DialogContent className=" w-full h-[97%] max-w-[600px] right-0 left-auto translate-x-[-2%] ">
            <Form />
          </DialogContent>
        </DialogTrigger>
      </Dialog>
  );
}
