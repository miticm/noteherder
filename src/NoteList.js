import React from 'react'
import './NoteList.css'
import NodeListItem from './NodeListItem';

class NoteList extends React.Component {
    constructor(){
        super()
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
            }]
        }
    }
    render(){
        return (
            <div className="NoteList">
                <h3>Notes</h3>
                <ul id="notes">
                {this.state.list.map(listItem=>
                    <NodeListItem title={listItem.title} body={listItem.body}/>
                )}
                </ul>
            </div>
        )
    }
} 
export default NoteList