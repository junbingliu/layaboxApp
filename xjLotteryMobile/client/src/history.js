/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import createHistory from 'history/lib/createHashHistory.js';
import useScroll from 'scroll-behavior/lib/useStandardScroll'

const history = useScroll(createHistory)()

//export default history;

export default function myCreateHistory(){
    return history;
}