import Header from "@/components/header";
import TaskCard from "@/components/taskCard";
import tasks from "@/lib/fake-data"
import Image from "next/image";

export default function Home() {
 
  return (
    <main className="w-7/12 m-auto bg-red-300/0 my-16">
      <Header />

      <div className=" my-10 space-y-6">
        {
          tasks.map((task) => {
            return  <TaskCard task={task}/>
          })
        }
        
        <AddTask />
      </div>
    </main>
  );
}

function AddTask(){
  return (
    <div className="flex gap-7 items-center rounded-2xl p-4 bg-add-light">
      <div className="flex justify-center items-center rounded-2xl bg-add-dark size-[54px]">
          <Image width="26" height="26" src="add.svg" alt="Add Icon" />
      </div>
      <h1 className="font-semibold text-xl">Add new Task</h1>
    
  </div>
  )
}
