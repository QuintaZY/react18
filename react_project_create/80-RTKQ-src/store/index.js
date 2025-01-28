// 使用RTK 创建store
import {configureStore, createSlice} from "@reduxjs/toolkit";

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: (builder) => ({
        getStudent: builder.query({
            query: () => '/student'
        }),
        addStudent: builder.mutation({
            query: (student) => ({
                url: '/student',
                method: 'POST',
                body: student
            })
        })
    })
})

export default store;