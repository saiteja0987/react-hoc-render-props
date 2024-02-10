import  {useState} from 'react'

const WrapperHoc = (WapperFunction)=>{
 function WrapperHoc(){
    const [counter,setCounter]= useState(0);
    const handleCounter = ()=>{
        setCounter(counter+1)
    }
    return(
        <WapperFunction counter={counter} handleCounter={handleCounter}/>
        )
        }
        return WrapperHoc;
}
export default WrapperHoc    