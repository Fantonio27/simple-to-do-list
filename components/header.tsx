import Image from "next/image"

export default function Header () {
    return (
        <header>
            <div className="flex gap-3 items-start">
                <Image width="40" height="40" src="/Logo.svg" alt="Logo"></Image>
                <div className=" space-y-3">
                    <h1 className=" text-5xl">My Task Board</h1>
                    <p className=" text-lg font-medium">Tasks to keep organised</p>
                </div>
                <Image width="25" height="25" src="/edit.svg" alt="Edit Logo" className=" mt-2"></Image>
            </div>
        </header>
    )
}