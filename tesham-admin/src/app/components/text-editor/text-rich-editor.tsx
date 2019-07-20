import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './text-rich-editor.css';
import { stateToHTML } from 'draft-js-export-html';

const EditorConvertToHTML = (props: any) => {
    const [state, setState] = React.useState({
            editorState: EditorState.createEmpty(),
        }
    )

    const onEditorStateChange: any = (editorState: any) => {
        const html = stateToHTML(editorState.getCurrentContent());
        props.changed(html);
        setState({
            editorState,
        });
    };

    const {editorState} = state;
    return (
        <div className='text-rich-editor-border'>
            <Editor
                editorState={editorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    );
}

export default EditorConvertToHTML
