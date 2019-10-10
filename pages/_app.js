// because of how nextjs works, we don't need to have a custom HOC to wrap
// stuff with. Consider this the new "My Layout"

import React from 'react';
import App from 'next/app';
import Navbar from '../components/Navbar';


class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    };

    render(){
        const { Component, pageProps } = this.props;
        return(
            <div>

                {/* Navbar is rendered on every page, can take 
                props but doesn't right now*/}
                
                <Navbar {...pageProps} />
                <Component {...pageProps} />
                <style jsx global>
                {`
                    body{
                        margin:0;
                        background: #414242;
                    }
                `}
                </style>
            </div>

        )
    }
}

export default MyApp;