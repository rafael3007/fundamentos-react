import Post from "./components/Post";
import "./global.css"


function App() {
  return (
    <>
      <Post
        author="rafael Brito"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae nulla nam veniam, ipsum quod natus aut accusamus aliquam consequatur, dolor assumenda magni reprehenderit eum similique omnis obcaecati id velit?"
      />
      <Post
        author="Daniel Brito"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae nulla nam veniam, ipsum quod natus aut accusamus aliquam consequatur, dolor assumenda magni reprehenderit eum similique omnis obcaecati id velit?"
      />
      <Post
        author="João Vi"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae nulla nam veniam, ipsum quod natus aut accusamus aliquam consequatur, dolor assumenda magni reprehenderit eum similique omnis obcaecati id velit?"
      />
    </>
  );
}

export default App;
