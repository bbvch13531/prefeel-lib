import React from 'react';
import Draft, {
        AtomicBlockUtils,
        Editor,
        EditorState,
        convertToRaw,
        CompositeDecorator,
} from 'draft-js';

export default class DraftEditor extends React.Component {
  constructor(props) {
    super(props);
    const decorator = new CompositeDecorator([
    ]);
    // console.log('call constructor');
    this.state = {
      editorState: EditorState.createEmpty(),
      linkVal:[],
      count:0
    };
    this.onChange = (editorState) => this.setState({editorState});
  }

  parseCode = (code) => {
    let contentstate = this.state.editorState;
    const reg = new RegExp("[^\n]+","g");
    // let arr = code.exec(reg);
    // console.log(`parseCode:: code is ${code}`);
    // let arr = reg.match(code);
    let arr = code.match(reg);
    console.log(arr);
    this.setState({
      linkVal:arr
    })
  } 

  setLink = (e) =>{
    e.preventDefault();
    // console.log(`e in setlink is : ${e}`);
    const {editorState, linkVal} = this.state;
    //Copy current state

    //이 부분에서 코드의 배열만큼 map 사용해서 contentState만들면 될 것 같음.
    let countNum = this.state.count;
    // console.log({linkVal});

    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'Link',
      'IMMUTABLE',
      {src: this.state.linkVal}
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      {currentContent: contentStateWithEntity}
    );
    // create new state with entity
    countNum++;
    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' '
      ),
      count:countNum
    });

  }
  componentDidMount(){
    let query='project/tic-tac-toe';
    // console.log('call componentDidMount');
    // console.log(query);
    return Axios({
      method: 'get',
      url: 'http://13.125.109.114:4000/api/v1.0/'+query,
    })

    .then(async (response) => {
      let resdata=response.data;
      let code=resdata.directory[1].file[1].content
       // console.log(code);
      this.parseCode(code);
      //code를 파싱해서 linkVal에 update

      // console.log(this.state.linkVal)
    })

    .catch((error) =>{
      console.log("error: "+error);
    })
  };
  render() {
    return (
      <div>
        <div style={styles.editor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}  
            blockRendererFn={myBlockRenderer}
          />
        </div>
        <button onClick={this.setLink}>
          setLink
        </button>
      </div>
    );
  }
}

function myBlockRenderer(block) {
  if (block.getType() === 'atomic') {
    return {
      component : myBlock,
      editable : false,
    };
  }
  return null;
}

const myBlock = (props) => {
  const entity = props.contentState.getEntity(
    props.block.getEntityAt(0)
  );
  // console.log(this.state.linkVal);
  const {src} = entity.getData();
  // let linkVal=this.state.linkVal;
  let typeText = <p>{src}</p>
  return typeText;
}
