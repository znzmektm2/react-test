import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios';

class App extends Component {

  state = {
    customers: ""
  }

  // componentDidMount() {
  //   this.callApi()
  //   .then(res => this.setState({customers: res}))
  //   .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await axios.get('/api/customers');
  //   const body =  await response.json();
  //   return body;
  // }
  
  // react-scripts의 버전이 2 이상인 경우 http-proxy-middleware를 설치해 setupProxy.js라는 파일을 통해 proxy 설정을 해줘야 한다.

  componentDidMount() {
    this.callApi()
  }

  callApi = async () => {
    try {
      const response = await axios.get('/api/customers');
      this.setState({
        customers: response.data
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(c => { 
                return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> );
              }) : ""}
            </TableBody>
          </Table>
      </div>      
    );
  }
}

export default App;
