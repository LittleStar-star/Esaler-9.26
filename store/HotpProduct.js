export const state = () => ({
    HotpProduct:[
    ]
})

export const mutations={
    changName(state ,data){
        state.HotpProduct.push(data);
    }

}