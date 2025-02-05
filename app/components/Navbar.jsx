import CustomLink from './CustomLink'

const Navbar = () => {
    return (
        <nav className='bg-slate-300 p-4'>
            <ul className='flex gap-5'>
                <li><CustomLink path={'/'}>Home</CustomLink></li>
                <li><CustomLink path={'/dashboard/analytics'}>Analytics</CustomLink></li>
                <li><CustomLink path={'/dashboard/settings'}>Settings</CustomLink></li>
            </ul>
        </nav>
    )
}

export default Navbar