import React from 'react'
import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class Main extends React.Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            list:[{
                title:"Kohlrabi welsh",
                body:"Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
            },{
                title:"Dandelion cucumber",
                body:"Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
            },{
                title:"Prairie turnip",
                body:"Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.",
            }],
            activeListItem: -1,
        }
    }
    handleClick(index){
        this.setState({
            activeListItem : index
        })
    }
    render() {
        return (
            <div className="Main" style={style}>
                <Sidebar />
                <NoteList list={this.state.list} handleClick={this.handleClick}/>
                <NoteForm state={this.state}/>
            </div>
        )
    }
}
const style = {
    display: 'flex',
    height: '100vh',
    alignItems: "stretch",
}

export default Main