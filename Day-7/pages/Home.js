import React from "react";
import '../manage/table.css'
const data = [
  { id: 1, Name:"Kyoko",age: 19, phone:9234567890,email:"djhf@gmail.com",access:"admin" },
  { id: 2, Name:"Cayena",age: 24, phone:8763567890,email:"dhgjf@gmail.com",access:"admin" },
  { id: 3, Name:"Catherine",age: 17, phone:8904567890,email:"dxf@gmail.com",access:"user" },
  { id: 4, Name:"Jin",age: 18, phone:7234431890,email:"dkh@gmail.com",access:"admin" },
  { id: 5, Name:"Yotsuba",age: 17, phone:8234567890,email:"dbnhj@gmail.com",access:"admin" },
  { id: 6, Name:"Tatsuya",age: 19, phone:9064567890,email:"gkvf@gmail.com",access:"user" },
  { id: 7, Name:"Hinata",age: 15, phone:1234892890,email:"ghxf@gmail.com",access:"user" },
  { id: 8, Name:"Miyuki",age: 19, phone:9434567890,email:"dxf@gmail.com",access:"admin" },
  { id: 9, Name:"Shiba",age: 19, phone:8934567890,email:"fghjf@gmail.com",access:"user" },
  
]

export default function Home() {
  return (
      <div className="App1">
          <table>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>PhoneNumber</th>
                  <th>email</th>
                  <th>AccessLevel</th>
              </tr>
              {data.map((val, key) => {
                  return (
                      <tr key={key}>
                          <td>{val.id}</td>
                          <td>{val.Name}</td>
                          <td>{val.age}</td>
                          <td>{val.phone}</td>
                          <td>{val.email}</td>
                          <td>{val.access}</td>
                      </tr>
                  )
              })}
          </table>
      </div>
  );
}
