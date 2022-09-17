import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useFormContext } from './FormProvider';

const FormDescription: FunctionComponent<RouteComponentProps<any>> = props => {
        const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
        const [content, setContent] = useState<string>('');      
        const {product, setProduct} = useFormContext();


        return (
          <Container className="mt-5 mb-5">
            <Label>Description</Label>
              <Editor
                editorState={editorState}
                wrapperClassName="card"
                editorClassName="card-body"
                onEditorStateChange={newState => {
                    setEditorState(newState);
                    setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
                    setProduct({...product, content: draftToHtml(convertToRaw(newState.getCurrentContent()))});
                }}
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history', 'embedded', 'emoji', 'image'],
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                }}
              />                        
          </Container>
        );
};

export default FormDescription;

