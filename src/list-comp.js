import React from 'react'

export default function List(){
    let Colors=['red','green','blue','yellow']
    let list=Colors.map(c => <li>{c}</li>)
    return <ol>{list}</ol>

    /*return (
    <ul>
        <li>{Colors[0]}</li>
        <li>{Colors[1]}</li>
        <li>{Colors[2]}</li>
        <li>{Colors[3]}</li>
    </ul>
    )*/
}