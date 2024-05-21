import Header from "@/components/header";
import TaskCard from "@/components/taskCard";
import tasks from "@/lib/fake-data"

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
      </div>
    </main>
  );
}

function AddTask (){
  return (
    <div>

    </div>
  )
}
