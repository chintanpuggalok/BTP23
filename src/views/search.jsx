import React, { useEffect, useState } from 'react';
import Papa from "papaparse";
import temp from "./../temp.csv";




import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import Footer from '../components/footer'
import './search.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Search = (props) => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [cyptoK,setCytoK]=useState([]);
  const [diseaseK,setDiseaseK]=useState([]);
  const [cytokine, setCytokine] = useState("all");
  const [disease, setDisease] = useState("all");
  // const [file, setFile] = useState("");
  const options = [
    'one', 'two', 'three'
  ];
  const results = [];
  const defaultOption = "all";
  
  // If user clicks the parse button without
  // a file we show a error
  let file="./temp.csv"
  let records=[]

  
  useEffect(() => {
    Papa.parse(temp, {
      download: true,
      complete: function (input) {
        let cytoOptions=new Set();
        cytoOptions.add("all");
        let diseaseOptions=new Set();
        diseaseOptions.add("all");
      let tempData=input.data;
        columns=tempData.shift();
        tempData.forEach((row)=>{
          cytoOptions.add(row[0]);
          diseaseOptions.add(row[1]);
        })
        setData(tempData);
        setSelectedData(tempData);
        setCytoK(Array.from(cytoOptions));
        setDiseaseK(Array.from(diseaseOptions));
        //  records = input.data;
        //  console.log(records)
    }
});
}, []);
  // handleParse()
  useEffect(() => {filterData()}, [cytokine,disease]);
  let filterData=()=>{
    console.log(cytokine)
    console.log(disease)
    console.log(data.length)
    let tempData=[];
    data.forEach((row)=>{
      if(cytokine==row[0]&&disease==row[1])
        tempData.push(row);
      else if(cytokine==row[0]&&disease=="all")
        tempData.push(row);
      else if(disease==row[1]&&cytokine=="all")
        tempData.push(row);
      else if(cytokine=="all"&&disease=="all")
        tempData.push(row);
      // if(cytokine.localeCompare("all")==0 && disease.localeCompare("all")==0){
      //   tempData.push(row);
      // }else if(cytokine.localeCompare("all")==0 && disease.localeCompare(row[1])==0){
      //   tempData.push(row);
      // }else if(disease.localeCompare("all")==0 && cytokine.localeCompare(row[0])==0){
      //   tempData.push(row);
      // }else if(cytokine.localeCompare(row[0]) && disease.localeCompare(row[1])){
      //   tempData.push(row);
      // }
    
    })
    setSelectedData(tempData);
    console.log(tempData);
  }
  let extractProtId=(url)=>{
    let protIndex=url.lastIndexOf('/')+1;
    return url.substring(protIndex);
  }
  
  let columns=["Cytokine","Disease","References","Uniprot"]
  return (
    <div>
    <div className="search-container">
      <Helmet>
        <title>Search - Active Online Software Page1</title>
        <meta
          property="og:title"
          content="Search - Active Online Software Page1"
        />
      </Helmet>
      <Menu rootClassName="menu-root-class-name"></Menu>
      <header className="search-header">
        <h1 className="search-text">
          <span>
            Cytokines &amp; Receptors
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Database</span>
        </h1>
        <p className="search-text4">
          <span>
            To Compile A Database Of All The Cytokines And Receptors Related To
            Viral Infectious Illnesses And Cancer.
          </span>
          <br></br>
          
          <span>
            Additionally, To Do An Analysis Of The Data, Come To Some
            Conclusions, And Identify Any Connections Between The Various Viral
            Infections And Cancer.
          </span>
          
        </p>
      
      </header>
      </div>
      <br></br>
      <div style={{"display":"block"}}>
        <div style={{"width":"30vw","margin":"auto"}}>
          <div>Select Cytokine</div>
      <Dropdown options={cyptoK} onChange={(option)=>{
        console.log(option)
        setCytokine(option.value)
        

      }} value={defaultOption} placeholder="Select an option" />
      <div>Select Disease</div>
      <Dropdown options={diseaseK} onChange={(option)=>{setDisease(option.value)
      // filterData()
    }} value={defaultOption} placeholder="Select an option" />
      </div>
    <br></br>
      </div>
      <div className='tableContainer' >
              <table >
                <thead  >
                  <tr>
                    {columns.map((column,columnId) => <th key={columnId}>{column}</th>)}
                    </tr>

                  </thead>
                  <tbody key={cytokine+disease} >
                    {selectedData.length>0&&selectedData.map((row,rowId) => <tr key={rowId}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td >
                        <u>
                      <a href={row[4]}>
                        Link
                        </a>
                        </u>
                        </td>
                      <td >
                        <a href={row[5]} >
                          <u>
                        {row[6]}
                        </u>
                      </a>
                      </td>

                    </tr>)}
                    </tbody>
              </table>
              </div>
      
    
<Footer ></Footer>
    </div>
  )
}

export default Search
