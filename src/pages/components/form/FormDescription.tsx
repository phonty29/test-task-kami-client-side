import { FC, useContext, useEffect, useState } from 'react';
import { Container, Label } from 'reactstrap';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useFormContext } from './FormProvider';

const FormDescription: FC = ()  => {   
        const {product, setProduct} = useFormContext();

        return (
          <Container className="mt-5 mb-5">
            <Label>Description</Label>
              <Editor
                editorState={product.editorState}
                wrapperClassName="card"
                editorClassName="card-body"
                onEditorStateChange={newState => {
                    setProduct({...product, content: draftToHtml(convertToRaw(newState.getCurrentContent())), editorState: newState});
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

