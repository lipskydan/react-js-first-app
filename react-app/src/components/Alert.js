import React from 'react'

export const Alert = ({alert}) => {
    return(
        <div class="alert alert-warning alert-dismissible fade show" >
            <strong>Warning!</strong> 
            {alert.text}
            <button 
            type="button" 
            class="close" 
            data-dismiss="alert" 
            aria-label="Close"
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}