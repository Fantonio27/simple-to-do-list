import Image from "next/image"
import { twMerge } from "tailwind-merge"

export type Task = {
    task: {
        icon: string
        name: string
        status: string
        description?: string
    }
  }

const colorPalette = {
    success : {
        light: "bg-success-light",
        dark: "bg-success-dark"
    },
    pending : {
        light: "bg-pending-light",
        dark: "bg-pending-dark"
    },
    unsuccess : {
        light: "bg-unsuccess-light",
        dark: "bg-unsuccess-dark"
    }
}

export default function TaskCard ({ task }: Task) {
    const {icon, name, status, description} = task

    const bgColor = colorPalette[status as keyof typeof colorPalette] || "";

    return (
        <div className={`flex justify-between rounded-2xl p-4 ${status? bgColor.light : 'bg-light-gray'}`}>
            <div className={`flex gap-7 items-center`}>
                <Icon icon={icon}/>
                <section className={`max-w-xl ${description && 'space-y-3'}`}>
                    <h1 className="font-semibold text-2xl">{name}</h1>
                    <p className="text-lg text-black/75 leading-7">{description}</p>
                </section>
            </div>
            {status && <StatusBar status={status} color={bgColor.dark}/>}
        </div>
    )
}

function Icon ({icon} : {icon: string}) {
    return (
        <div className="flex justify-center items-center rounded-2xl bg-white size-[50px]">
            <Image width="30" height="30" src={`${icon}.svg`} alt="cacsa" />
        </div>
    )
}

function StatusBar({status, color} : {status: string, color: string}) { 
    const style = twMerge("flex justify-center items-center rounded-2xl size-[50px]", color)
    return (
        <div className={style}>
            <Image width="25" height="25" src={`/${status}.svg`} alt="cacsa" />
        </div>
    )
}