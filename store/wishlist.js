export const state = () => ({
    wishlist:[
    ]
})

export const mutations={
    changName(state ,data){
        state.wishlist.push(data);
    },
    del(state,val){
        state.wishlist.splice(val,1)

    }
}