import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
  name: 'items',
  initialState: {
    playlists: [],
    albums: [],
    podcast: [],
    artists: [],
    Recommended:[],
    music:[],
  },
  reducers: {
    addInitialItemsplaylist: (state, action) => {
      state.playlists = action.payload;
    },
    addInitialItemsalbume: (state, action) => {
      state.albums = action.payload;
    },
    addInitialItemspodcast: (state, action) => {
      state.podcast = action.payload;
    },
    addInitialItemsartist: (state, action) => {
      state.artists = action.payload;
    },
    addInitialrecomendation:(state,action)=>{
      state.Recommended=action.payload;
    },
    addInitialmusic:(state,action)=>{
      state.Recommended=action.payload;
    }


  }
});

export const itemsActions = ItemsSlice.actions;

export default ItemsSlice.reducer;
