import Link from 'next/Link'

export default function Navbar(props) {
    return (
        <nav className="nav">
            <ul>
                <li><Link href="/">
                    <a>Home</a>
                </Link></li>
                <li><Link href="/about">
                    <a>About</a>
                </Link></li>
                <li><Link href="/login">
                    <a>Log In</a>
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
                            padding: 15px 0;
                        }
                        nav{
                            height: 4rem;
                            background: #636363;
                            overflow: hidden;
                            margin: 0; 
                            box-shadow: 0 4px 4px -1px rgba(0,0,0,.1); 
                        }
                        li:hover{
                            transition: .5s border;
                            border-bottom: 1px solid grey;
                        }
                         a{
                            margin: 10px;
                            padding: .5rem;
                            text-decoration: none;
                            font-family: 'Georgia';
                            color: #ebf1fa;
                            font-size: 18px;

                        }
                `}
            </style>
        </nav>
    )
}