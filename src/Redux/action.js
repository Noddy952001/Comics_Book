export const Get_cart = "Get_cart"
export const Change_Email =  "Change_Email"
export const Change_password  = "Change_password"
export const Change_token =  "Change_token"



export const get_cart = (payload) => ({
    type : Get_cart ,
    payload
})

export const change_token = (payload) => ({
    type : Change_token ,
    payload
})

export const change_email = (payload) => ({
    type : Change_Email ,
    payload
})

export const change_password = (payload) => ({
    type : Change_password ,
    payload

})

