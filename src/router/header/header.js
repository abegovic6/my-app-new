import './header.css'
import HeaderItem from './headerItem'

export default function Header(){
    return (<div className="headerContainer">
        <div className="headerContainer">
            <div className='nav'>
                <ul>
                    <HeaderItem text={'Home'}  route={'/'} />
                    <HeaderItem text={'Users'} route={'/users'} />
                    <HeaderItem text={'About'}  route={'/about'} />
                    <HeaderItem text={'Contact'} route={'/contact'} />
                </ul>
            </div>

        </div>
        
    </div>)
}