import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles';

const custmoers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '111111',
  'gender' : '남자',
  'job' : '대학생' 
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '전애란',
  'birthday' : '880510',
  'gender' : '여자',
  'job' : '개발자' 
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이순신',
  'birthday' : '921215',
  'gender' : '남자',
  'job' : '대학생' 
},
]

class App extends Component {
  render() {
    return (
      <div>
          <Table>
            <TableHead>
              `<TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {custmoers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); })}
            </TableBody>
          </Table>
      </div>      
    );
  }
}

export default App;
