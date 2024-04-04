
import React, { useContext } from 'react'

import '../Coverphoto/Coverphoto.css'
import RankingTable from './RankingTable/RankingTable';
import { Context } from '../../context/Context';

function Coverphot() {
    const {user,dispatch}= useContext(Context)

  return (
    <div className="main">
    <div className="mainimage">
        <img src="https://www.netlify.com/images/home/composable-platform-stack-shells.svg" alt="" />
        {user ?  user.username=="Bhanuprakash Lagishetty" ? <h2 className='username'>Hii {user.username}(admin) !</h2>: <h2 className='username'>Hii {user.username} !</h2> : <h2 className='username'>Hii Guest !</h2>  }
        
        <div className="h1">
            <h1>

                SQL QUERY PRACTICE PLATFORM
            </h1>
            <p>sql query practice platform is the user friend and easy to use platform where we can able to write quries and execute queries</p>
            <a href="">Practice now</a>
        </div>

    </div>
    <div className="tablecontent">
        <h2>Top students</h2>
        <table className='coverphototable' style={{border:"1px solid white"}}>
        <tr>
                <th>Name</th>
                <th>Rank</th>
                <th>solved problems</th>
            </tr>
            <tr>
                <td>Bhanuprakash</td>
                <td>1</td>
                <td>16</td>
            </tr>
            <tr>
                <td>Vishnu</td>
                <td>2</td>
                <td>11</td>
            </tr>
            <tr>
                <td>Gopal</td>
                <td>3</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Ashok</td>
                <td>4</td>
                <td>8</td>
            </tr>
        </table>
    </div>
        
    </div>
 
  )
}

export default Coverphot;