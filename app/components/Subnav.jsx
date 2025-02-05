import CustomLink from './CustomLink'

const Subnav = () => {
    return (
        <nav className='bg-slate-200 p-4 pl-10'>
            <ul className='flex gap-5'>
                <li><CustomLink path={'/dashboard/analytics'}>Analytics</CustomLink></li>
                <li><CustomLink path={'/dashboard/settings'}>Settings</CustomLink></li>
                <li><CustomLink path={'/dashboard/about'}>About</CustomLink></li>
            </ul>
        </nav>
    )
}

export default Subnav