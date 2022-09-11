import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./component/Navbar";
import Feed from "./component/Feed";
import ChannelDetail from "./component/ChannelDetail";
import SearchFeed from "./component/SearchFeed";
import VideoDetail from "./component/VideoDetail";

const App = () => (
  <BrowserRouter >
   <Box sx={{backgroundColor: '#000'}}>
      <Navbar /> 
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
   </Box>
  </BrowserRouter>

)
export default App;
