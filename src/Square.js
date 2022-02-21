import React from 'react'

function Square(props) {
    const{colorValue,hexValue,darkText} = props
    return (
        <div className="square" style={{background:colorValue,
        color:darkText?"#000":"#fff"
        }}>
       <p>{colorValue|| <span>Empty Value</span>}</p>
       <p>{hexValue ? hexValue: null}</p>
        </div>
    )
}
Square.defaultProps ={
    colorValue:"Empty value"
}

export default Square
