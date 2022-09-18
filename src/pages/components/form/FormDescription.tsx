import { FC, useContext, useEffect, useState } from 'react';
import { Container, Label } from 'reactstrap';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useFormContext } from './FormProvider';

const FormDescription: FC = ()  => {   
        const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
        const {product, setProduct} = useFormContext();

        useEffect (() => {
            const contentBlock = htmlToDraft(product.content);
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState);
        }, []);


        return (
          <Container className="mt-5 mb-5">
            <Label>Description</Label>
              <Editor
                editorState={editorState}
                wrapperClassName="card"
                editorClassName="card-body"
                onEditorStateChange={newState => {
                    setEditorState(newState);
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

