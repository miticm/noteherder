import React from 'react'
import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class Main extends React.Component {
    constructor() {
        super()
        this.changeCurrentNote = this.changeCurrentNote.bind(this)
        this.state = {
            currentNote: this.emptyNote(),
            list: [{
                id: 1,
                title: "Kohlrabi welsh",
                body: "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
            }, {
                id: 2,
                title: "Dandelion cucumber",
                body: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
            }, {
                id: 3,
                title: "Prairie turnip",
                body: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.",
            }],
        }
    }
    emptyNote=()=>({
        id: null,
        title: "",
        body: "",
    })
    clearCurrentNote = () => {
        this.changeCurrentNote(this.emptyNote())
    }
    changeCurrentNote(note) {
        this.setState({
            currentNote: note
        })
    }
    
    render() {
        return (
            <div className="Main" style={style}>
                <Sidebar clearCurrentNote={this.clearCurrentNote}/>
                <NoteList list={this.state.list} changeCurrentNote={this.changeCurrentNote} />
                <NoteForm currentNote={this.state.currentNote}/>
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