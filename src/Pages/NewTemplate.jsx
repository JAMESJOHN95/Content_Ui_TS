import React, { useState } from 'react';
import Layout from './Layout';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Heading from '@tiptap/extension-heading';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';


function NewTemplate() {
  const [templateBody, setTemplateBody] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Heading.configure({ levels: [1, 2] }),
      Bold,
      Italic,
      Underline,
      Strike,
      ListItem,
      BulletList,
      OrderedList,
      History
    ],
    content: templateBody,
    onUpdate: ({ editor }) => {
      setTemplateBody(editor.getHTML());
    },
  });

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 p-0">
          <Layout />
        </div>

        {/* Form Section */}
        <div className="col-md-10 mt-4">
          <h2 className="fw-bold mb-4">Create Template</h2>

          <div className="row">
            {/* Left Side (Category, Subject) */}
            <div className="col-md-6">
              {/* Category */}
              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Category <span className="text-danger">*</span>
                </label>
                <select className="form-select">
                  <option value="">Category...</option>
                </select>
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Subject <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Subject..."
                />
              </div>
            </div>

            {/* Right Side (Template Name, Visibility) */}
            <div className="col-md-6">
              {/* Template Name */}
              <div className="mb-0">
                <label className="form-label fw-semibold">
                  Template Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Template Name..."
                />
                <small className="text-secondary">
                  It has to be unique. Accepts only Alphanumeric, Underscores, and Hyphens.
                </small>
              </div>

              {/* Visible for Everyone */}
              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Visible for everyone?
                </label>
                <select className="form-select">
                  <option value="">Select</option>
                </select>
              </div>
            </div>
          </div>
          <label className=" fw-semibold">Template Body</label>
          {/* Template Body Section */}
          <div className="mb-4 border">
            {/* Toolbar */}
            {editor && (
              <div className="editor-toolbar p-1 border" style={{backgroundColor:'lightgrey'}}>
                <button className='btn'onClick={() => editor.chain().focus().toggleBold().run()}><b><i class="fa-solid fa-b "></i></b></button>
                <button className='btn' onClick={() => editor.chain().focus().toggleItalic().run()}><i class="fa-solid fa-i fa-italic"></i></button>
                <button className='btn' onClick={() => editor.chain().focus().toggleUnderline().run()}><i class="fa-solid fa-underline"></i></button>
                <button className='btn' onClick={() => editor.chain().focus().toggleStrike().run()}><i class="fa-solid fa-strikethrough"></i></button>
                <button className='btn' onClick={() => editor.chain().focus().toggleBulletList().run()}><i class="fa-solid fa-list-ul"></i></button>
                <button className='btn' onClick={() => editor.chain().focus().toggleOrderedList().run()}><i class="fa-solid fa-list-ol"></i></button>
                  {/* Undo */}
                  <button className='btn' onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                  <i className="fa-solid fa-rotate-left"></i>
                </button>

                {/* Redo */}
                <button className='btn' onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                  <i className="fa-solid fa-rotate-right"></i>
                </button>

                {/* Justify Left */}
                <button className='btn' onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                  <i className="fa-solid fa-align-left"></i>
                </button>

                {/* Justify Center */}
                <button className='btn' onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                  <i className="fa-solid fa-align-center"></i>
                </button>

                {/* Justify Right */}
                <button className='btn' onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                  <i className="fa-solid fa-align-right"></i>
                </button>

                <button className='btn'
                  onClick={() => {
                    const url = prompt('Enter URL');
                    if (url) {
                      editor.chain().focus().setLink({ href: url }).run();
                    }
                  }}
                >
                
<i class="fa-solid fa-link"></i>
                </button>
                {/* <button className='btn' onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                  Clear
                </button> */}
              </div>
            )}

            {/* TipTap Editor */}
            <EditorContent editor={editor} className="editor-content border p-5" />
          </div>

          {/* Available Attributes */}
          <div className="mb-2 border p-3">
            <strong>Available Attributes:</strong>
            <p>
  First Name: <code style={{color:'black'}}>{'{{FirstName}}'}</code><br />
  Last Name: <code style={{color:'black'}}>{'{{LastName}}'}</code><br />
  Email: <code style={{color:'black'}}>{'{{Email}}'}</code>
</p>
 
            <small className="text-muted">
              Attributes are case-sensitive. Mail couldn't send with invalid attributes.
            </small>
          </div>
          <div className='row p-2 d-flex justify-content-center align-items-center'>
         <div className='col-md-10 p-2'> <label htmlFor="uploadImage"className='form-control w-100 p-3 '>
                        <input type="file" id='uploadImage' /* style={{display:'none'}} */ />
                        {/* <img src="https://appflowy.com/_next/static/media/upload-cloud.8e4f70a0.png" alt="no image"/> */}
                        </label>
                        </div>
                        <div className='col-md-2 text-end'><button className="btn px-5 py-3 mt-2" style={{backgroundColor:"black",color:'white'}}>Upload Image</button></div>
 

          </div>      
        </div>
      </div>
    </div>
  );
}

export default NewTemplate;
