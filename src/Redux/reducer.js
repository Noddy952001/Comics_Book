import { Get_cart} from "./action"

const initalState = {
   cart : []
}





export const reducer = (store = initalState , {type , payload} ) => {


    console.log(store)
    switch(type )
    {
     
        case Get_cart : 
            return ({...store , cart : payload})
        default :
            return store
                
    }

    

}



