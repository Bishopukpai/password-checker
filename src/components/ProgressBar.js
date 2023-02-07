import React from 'react'

const ProgressBar = ({password}) => {

    const pattern1 =/(?=.*[a-z])/

    const pattern2 = /(?=.*[a-z])(?=.*[A-Z])/

    const pattern3 =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/

    const pattern4 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!_%&*])/

   

    const result1 = pattern1.test(password)

    const result2 = pattern2.test(password)

    const result3 = pattern3.test(password)

    const result4 = pattern4.test(password)

    let num;
  
    if(result1 === true){
        num = 25
    }if(result2 === true){
        num = 50
    }if(result3 === true){
        num = 75
    }if(result4 === true){
        num = 100
    }

    
    const ProgressBarColor = ()=>{
        switch(num){
            case 0:
                return "#FFFFFF"
            case 25:
                return "#FF0000"
            case 50:
                return '#ffa500'
            case 75: 
                return '#90EE90'
            case 100: 
                return "#00FF00"
            default:
              return 'none'
        }
    }

    const setProgressBar = () =>({
        width:`${num}%`,
        background: ProgressBarColor(),
        height:'7px'
    })

    const passwordStrengthLabel = () =>{
        switch(num){
            case 0:
                return "Very weak"
            case 25:
                return "weak"
            case 50:
                return 'Good'
            case 75: 
                return 'Complex'
            case 100: 
                return "Very complex"
        }
    }
  return (
    <>
        <div className='progress' style={{height: '7px'}}>
            <div className='progress-bar' 
            style={setProgressBar()}></div>
        </div>
        <p style={{color:  ProgressBarColor() }}>{passwordStrengthLabel()}</p>
    </>
  )
}

export default ProgressBar