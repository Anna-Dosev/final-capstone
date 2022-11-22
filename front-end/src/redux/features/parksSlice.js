// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


// writing to the store
// export const fetchParks = createAsyncThunk('parks/all', async () => {
  export const fetchParks = async () => {
  const apiUrl = 'https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks'
  const response = await fetch(apiUrl, {
      params: {limit: 10},
      method: 'GET',
      headers: {
        'X-Api-Key': 'QMo8oekxSdeQBLy4f7uE6Xi3qdaIKbkzfiIPSKfh',
        'X-RapidAPI-Key': '5a61fdea5cmsh897482afa700670p1c35bajsnf5b82c3a86de',
        'X-RapidAPI-Host': 'jonahtaylor-national-park-service-v1.p.rapidapi.com'
      }
  });
  const data = await response.json();
  console.log(data)
  return data.data;
};

export const parksSlice = createSlice({
  name: 'parks',
  initialState: [],
  reducers: {},


  // extraReducers(builder) {
  //   builder.addCase(fetchParks.fulfilled, (state, action) => {
  //     return action.payload;
  //   });
  // }
});

// reading from the store
export const selectParks = state => state.parks

export default parksSlice.reducer;