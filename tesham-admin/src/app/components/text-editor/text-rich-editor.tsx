import React, { Component } from 'react';
import { ContentState, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './text-rich-editor.css';
import { stateToHTML } from 'draft-js-export-html';
import htmlToDraft from 'html-to-draftjs';


export default class TextRichEditor extends Component<any>{
    public state = { editorState: EditorState.createEmpty()}

 componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any): void {
if (prevProps.htmlText !== this.props.htmlText) {
    const contentBlock = htmlToDraft(this.props.htmlText);
    if (contentBlock && !!this.props.htmlText) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.setState( {
            editorState,
        });
    }
}
 }

    public onEditorStateChange: any = (editorState: any) => {
        const html = stateToHTML(editorState.getCurrentContent());
        this.props.changed(html);
        this.setState({
            editorState,
        });
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {editorState} = this.state;
        return (
            <div className='text-rich-editor-border'>
                <Editor
                    editorState={editorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    onEditorStateChange={(editorState) => this.onEditorStateChange(editorState)}
                />
            </div>
        );
    }
}

