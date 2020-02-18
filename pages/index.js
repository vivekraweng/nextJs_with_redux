import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { sayHello } from '../store/actions/greeting';
import Router from 'next/router'

function HomePage() {
    const dispatch = useDispatch()
    const id= 23123432;
    useEffect(()=>{
        dispatch(sayHello('Hello again'))
    },[])

    return ( 
        <>
            <div>
                <div>
                    Click <span onClick={() => Router.push('/home')}>here</span> to read more
                </div>
                <Link href='/contact?id=12345' as='/contact/12345' >
                <a>contact</a>
                </Link>
                <Link href='/home'>
                <a>home</a>
                </Link>
            </div>
            <div>Welcome to Next.js</div>
        </>
    )
}
  
export default HomePage