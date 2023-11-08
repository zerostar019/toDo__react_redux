import { Divider } from "./components/Dividver/component";
import { InputBlock } from "./components/InputBlock/component";
import "./index.css"

const App = () => {
    return (
        <>
            <InputBlock className={'input_block'} />
            <Divider />
        </>
    );
}

export default App;