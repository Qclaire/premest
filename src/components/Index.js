import React from 'react'
import Bezels from './Bezels'
import FlexContainer from './FlexContainer'
import History from './HIstory'
import Home from './Home'
import Search from './Search'
import SignIn from './SignIn'


const styles = {
    controls: {
        padding: "0 15px", bottom: "12px", margin: "0 auto",
        position: "relative", width: "100%", transform: "translate(-50%, 0)",
        left: "50%"
    }
}
const Index = props => {
    const [selected, setSelected] = React.useState(0)
    React.useEffect(() => {

    }, [])

    const SelectedView = () => {
        switch (selected) {
            case 1:
                return <Search />

            case 2:
                return <History />
            default:
                return <Home />
        }
    }

    return <>
        <Bezels>
            <div style={{ position: "relative", height: "90%", width: "90%", alignItems: "center", WebkitAlignContent: "center", transform: "translate(-50%, 0)", left: "50%" }}>
                {SelectedView()}
                <div style={styles.controls}>
                    <FlexContainer>
                        <div onClick={() => { setSelected(2) }}>History</div>
                        <div onClick={() => { setSelected(0) }} style={{ height: "30px", width: "30px", borderRadius: "100px", background: "rgba(0,0,0,.7)" }}></div>
                        <div onClick={() => { setSelected(1) }}>Search</div>
                    </FlexContainer>
                </div>
            </div>

        </Bezels>
    </>
}

export default Index;