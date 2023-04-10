import './App.css';
import {NewPostForm} from "./Components/Forum/Posts/NewPostForm/NewPostForm";
import {Categories} from "./Components/Forum/Categories/Categories";
import Navbar from './Components/Navbar';
import Slider from './Components/slider/Slider';
import {Posts} from "./Components/Forum/Posts/Posts";
import {TestPost} from "./Components/Forum/Posts/TestPost";
import {Forum} from "./Components/Forum/Forum";
import {Routes, Route} from "react-router-dom";
import {Login} from "./Components/Auth/Login/Login";
import {Logout} from "./Components/Auth/Logout/Logout";
import {Register} from "./Components/Auth/Register/Register";
import {ForumAppbar} from "./Components/ForumAppbar/ForumAppbar";
import {Container} from "@mui/material";
function App() {
    return (
        <div className="App">
            <Container maxWidth="md">
                <Navbar/>
                

                <Routes>
                    <Route path="/" element={<TestPost />} />
                    <Route path="/slider" element={<Slider />} />
                    <Route path="/postform" element={<NewPostForm />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/test" element={<TestPost />} />

                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
