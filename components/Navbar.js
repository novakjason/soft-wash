// import './Navbar.css'
import Link from 'next/Link'



export default function Navbar(props){
    return(
        <nav className="nav">
            <ul>
                <li><Link href="/">
                    <a>Home</a>
                </Link></li>
                <li><Link href="/about">
                    <a>About</a>
                </Link></li>
            </ul>
            <style jsx>
                {`
                ul{
                    list-style: none;
                    display: flex;
                    margin: 0 auto;
                    justify-content: flex-end;
                    align-items: center;
                    height: 110%;
                    overflow: hidden;

                }
                li{
                    margin: .5em 1.5em;
                    border-left: 1px solid blue;
                    border-right: 1px solid blue;
                    padding: 15px 0;
                    
                    

                }
                nav{
                    height: 3rem;
                    background: #CCC;
                    overflow: hidden;
                    margin: 0;
                    
                }
                li:hover{
                   transform: scale(1.05);
                   transition: .5s all;
                   border-bottom: 1px solid cyan;
                }
                a{
                    margin: 10px;
                    padding: .5rem;
                    text-decoration: none;
                    font-family: 'Georgia';
                }
                

                `}
            </style>
        </nav>
    )
}