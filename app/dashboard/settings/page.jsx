import Button from '@/app/components/Button'
import SortProducts from '@/app/components/SortProducts';

export const metadata = {
    title: "Settings",
    description: "This is our Settings Page",
};

const Settings = () => {
    const buttonStylse = {
        asc: 'bg-red-300 px-3 py-2 rounded-sm',
        dsc: 'bg-red-400 px-3 py-2 rounded-sm'
    }
    return (
        <>
            <div className="p-4">
                <h1 className="text-4xl">
                    Settings Page
                </h1>
                <p className="mt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto odit amet veniam dolores numquam distinctio quis assumenda provident ex fugiat eius aliquid neque sint, reprehenderit necessitatibus porro quos voluptates corporis.</p>
                <Button className={'bg-blue-400 px-3 py-2 rounded-sm mt-10'} path={'/dashboard/analytics'} >Goto Analytics</Button>
                <br /><br />
                <SortProducts classNames={buttonStylse} />
            </div>
        </>
    )
}

export default Settings