import _ from "lodash"
import "../style.css"

const modals = [
  {
    id:1,
    joke:`Why don't scientists trust atoms?`,
    punchline:'Because they make up everything!',
    title: 'Joke ',
    showPunchline: false
},
  {
    id:2,
    joke:`What do you call a fake noodle?`,
    punchline:'An impasta!',
    title: 'Joke ',
    showPunchline: false
  },
  {
    id:3,
    joke:`Why did the bicycle fall over?`,
    punchline:'Because it was two-tired!',
    title: 'Joke ',
    showPunchline: false
  },
  {
    id:4,
    joke:`How does a penguin build its house?`,
    punchline:'Igloos it together!',
    title: 'Joke ',
    showPunchline: false
  },
  {
    id:5,
    joke:`Why don't skeletons fight each other?`,
    punchline:"They don't have the guts!",
    title: 'Joke ',
    showPunchline: false
},
]

function App({setStore, store}) {
  return <div id="app">
  <h1>Modal</h1>
  <div className="container">
    {
      modals.map((modal, index)=>{
        return <button
         key={`modal-${index}`}
         onClick={()=>{
          const newStore = _.cloneDeep(store);
          _.set(newStore, 'modalText', modal.joke)
          _.set(newStore, 'title', modal.title +' '+ modal.id)
          _.set(newStore, 'jokeProps.modalPunchline', modal.punchline)
          _.set(newStore, 'showModal', true)
          _.set(newStore, 'jokeProps.showJoke', false)
          setStore(newStore)
         }}
         >Modal {modal.id}</button>
      })
    }
  </div>
</div>;
}

export default App;
