import React from "react";
import { Editor, EditorProvider, Toolbar, BtnBold, BtnItalic, BtnUnderline, BtnClearFormatting, BtnRedo, BtnStrikeThrough, BtnUndo, Separator } from "react-simple-wysiwyg";

const RichTextEditor = ({ content, setContent, themeMode }) => {

    function onChange(e) {
        setContent(e.target.value);
    }

    return (
        <EditorProvider>
            <Editor value={content} onChange={onChange} containerProps={{ style: { borderColor: themeMode === "light" ? "black" : "white", borderWidth: 2, fontFamily: "qanelasRegular", color: themeMode === "dark" ? "white" : "black" } }}>
                <Toolbar>
                    <BtnUndo />
                    <BtnRedo />
                    <Separator />
                    <BtnBold />
                    <BtnItalic />
                    <BtnUnderline />
                    <BtnStrikeThrough />
                    <Separator />
                    <BtnClearFormatting />
                    <Separator />
                </Toolbar>
            </Editor>
        </EditorProvider>
    );
}

export default RichTextEditor;