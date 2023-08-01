const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');



// thunks method
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});



// export const STATUSES = Object.freeze({
//     IDLE: 'idle',
//     ERROR: 'error',
//     LOADING: 'loading',
// });


const productSlice = createSlice({
    name:'product',
    initialState : {
        // method 1
        // data:[],
        // status:STATUSES.IDLE


        // method 2
        data:[],
        error:false,
        loading:false,
    },
    reducers: {
        // used in without thunk method1

        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },


        // method 2
        // setLoading(state,action) {
        //     state.loading = true;
        // },
        // setProducts(state, action) {
        //     state.loading = false;
        //     state.data = action.payload;
        // },
        // setError(state, action) {
        //     state.loading = false;
        //     state.error = true;
        // },

        
    },

    // thunk method 1
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProducts.pending, (state,action) => {
    //             state.status = STATUSES.LOADING;
    //         })

    //         .addCase(fetchProducts.fulfilled, (state,action) => {
    //             state.data = action.payload;
    //             state.status = STATUSES.FULFILLED;
    //         })

    //         .addCase(fetchProducts.rejected, (state, action) => {
    //             state.status = STATUSES.ERROR;
    //         });
    // }


    // thunk method 2
    extraReducers : {
        [fetchProducts.pending] : (state,action) => {
            state.loading = true;
            state.error = false;
        },
        [fetchProducts.fulfilled] : (state,action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [fetchProducts.rejected]: (state, action )=> {
            state.loading = false;
            state.error = true;
        },
    }

});


// export const { setProducts, setStatus } = productSlice.actions;

export const { setLoading, setProducts, setError } = productSlice.actions;


export default productSlice.reducer;





// without thunks method1

// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch,getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } 
//         catch (err) {
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }



// without thunk method 2
// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch,getState) {
//         dispatch(setLoading());
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//         } 
//         catch (err) {
//             dispatch(setError());
//         }
//     };
// }