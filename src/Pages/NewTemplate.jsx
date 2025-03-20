import React, { useState } from "react";
import Layout from "./Layout";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
//react icons for image icon, file icon and text icon
import { FaImage } from "react-icons/fa6";
import { IoLinkOutline } from "react-icons/io5";
import { RxText } from "react-icons/rx";
import { IoInformationCircleOutline } from "react-icons/io5";

function NewTemplate() {
  const [templateBody, setTemplateBody] = useState("");
  const [borderColor, setBorderColor] = useState("grey");

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
      History,
    ],
    content: templateBody,
    onUpdate: ({ editor }) => {
      setTemplateBody(editor.getHTML());
    },
  });

  const handleDragStart = (event, type) => {
    event.dataTransfer.setData("text/plain", type);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("text");

    if (!editor) return;

    if (type === "text") {
      editor.chain().focus().insertContent("Sample Text").run();
    } else if (type === "image") {
      editor
        .chain()
        .focus()
        .insertContent(
          '<img src="https://via.placeholder.com/150" alt="Placeholder" />'
        )
        .run();
    } else if (type === "link") {
      editor.chain().focus().insertContent('<a href="#">Sample Link</a>').run();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        {/* <div className="col-md-2 p-0">
          <Layout />
        </div> */}

        {/* Stucture for Drag and Drop */}
        <div className="col-md-1 p-2 text-center">
          {/* Drag & Drop Sidebar */}
          <div className="p-3 border-end bg-light">
            <ul className="list-unstyled">
              <li
                className="p-2 border rounded mb-2 bg-white"
                draggable
                onDragStart={(e) => handleDragStart(e, "text")}
              >
                <RxText />
              </li>
              <li
                className="p-2 border rounded mb-2 bg-white"
                draggable
                onDragStart={(e) => handleDragStart(e, "image")}
              >
                <FaImage />
              </li>
              <li
                className="p-2 border rounded mb-2 bg-white"
                draggable
                onDragStart={(e) => handleDragStart(e, "link")}
              >
                <IoLinkOutline />
              </li>
            </ul>
          </div>
        </div>

        {/* Structure for columns */}
        <div className="col-md-2 p-2 text-center">
          <div className="d-flex flex-column justify-content-between align-items-center p-2 mb-2">
            {/* heading part for columns section */}
            <h5 className="mt-2">Structres</h5>
            <ul className="list-unstyled w-100">
              {[
                "1:1 column",
                "1:2 column Left",
                "1:3 column Left",
                "2:1 column Right",
                "2:2 column",
                "3:1 column Right",
                "3:3 column",
                "4:4 column",
                "n:n column",
              ].map((text, index) => (
                <li
                  key={index}
                  className="p-2 border border-dark rounded mb-2 bg-white text-center fw-bold"
                  draggable
                  onDragStart={(e) => handleDragStart(e, text)}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-md-9 mt-4">
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
                  <option value="" disabled>
                    Category...
                  </option>
                  <option value="">SD</option>
                  <option value="">QWP</option>
                </select>
              </div>

              {/* Subject */}
              {/*  <div className="mb-4">
                <label className="form-label fw-semibold">
                  Subject <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Subject..."
                />
              </div> */}
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
                  It has to be unique. Accepts only Alphanumeric, Underscores,
                  and Hyphens.
                </small>
              </div>

              {/* Visible for Everyone */}
              {/*   <div className="mb-4">
                <label className="form-label fw-semibold">
                  Visible for everyone?
                </label>
                <select className="form-select">
                  <option value="">Select</option>
                </select>
              </div> */}
            </div>
          </div>
          <label className=" fw-semibold">Template Body</label>
          {/* Template Body Section */}
          <div className="mb-4 border">
            {/* Toolbar */}
            {editor && (
              <div
                className="editor-toolbar p-1 border"
                style={{ backgroundColor: "lightgrey" }}
              >
                <button
                  className="btn"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                >
                  <b>
                    <i class="fa-solid fa-b "></i>
                  </b>
                </button>
                <button
                  className="btn"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                  <i class="fa-solid fa-i fa-italic"></i>
                </button>
                <button
                  className="btn"
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                >
                  <i class="fa-solid fa-underline"></i>
                </button>
                <button
                  className="btn"
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                >
                  <i class="fa-solid fa-strikethrough"></i>
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                >
                  <i class="fa-solid fa-list-ul"></i>
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                >
                  <i class="fa-solid fa-list-ol"></i>
                </button>
                {/* Undo */}
                <button
                  className="btn"
                  onClick={() => editor.chain().focus().undo().run()}
                  disabled={!editor.can().undo()}
                >
                  <i className="fa-solid fa-rotate-left"></i>
                </button>

                {/* Redo */}
                <button
                  className="btn"
                  onClick={() => editor.chain().focus().redo().run()}
                  disabled={!editor.can().redo()}
                >
                  <i className="fa-solid fa-rotate-right"></i>
                </button>

                {/* Justify Left */}
                <button
                  className="btn"
                  onClick={() =>
                    editor.chain().focus().setTextAlign("left").run()
                  }
                >
                  <i className="fa-solid fa-align-left"></i>
                </button>

                {/* Justify Center */}
                <button
                  className="btn"
                  onClick={() =>
                    editor.chain().focus().setTextAlign("center").run()
                  }
                >
                  <i className="fa-solid fa-align-center"></i>
                </button>

                {/* Justify Right */}
                <button
                  className="btn"
                  onClick={() =>
                    editor.chain().focus().setTextAlign("right").run()
                  }
                >
                  <i className="fa-solid fa-align-right"></i>
                </button>

                <button
                  className="btn"
                  onClick={() => {
                    const url = prompt("Enter URL");
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
            <div
              className="mb-4 border"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <EditorContent
                editor={editor}
                className="editor-content border p-5"
              />
            </div>
          </div>

          {/* Available Attributes */}
          <div className="mb-2 border p-3">
            <strong>Available Attributes:</strong>
            <p>
              First Name:{" "}
              <code style={{ color: "black" }}>{"{{FirstName}}"}</code>
              <br />
              Last Name:{" "}
              <code style={{ color: "black" }}>{"{{LastName}}"}</code>
              <br />
              Email: <code style={{ color: "black" }}>{"{{Email}}"}</code>
            </p>

            <small className="text-muted">
              Attributes are case-sensitive. Mail couldn't send with invalid
              attributes.
            </small>
          </div>

          <div className="row p-2 d-flex justify-content-center align-items-center">
            <div className="col-md-10 p-2">
              {" "}
              <label htmlFor="uploadImage" className="form-control w-100 p-3 ">
                <input
                  type="file"
                  id="uploadImage" /* style={{display:'none'}} */
                />
                {/* <img src="https://appflowy.com/_next/static/media/upload-cloud.8e4f70a0.png" alt="no image"/> */}
              </label>
            </div>
            <div className="col-md-2 text-end">
              <button
                className="btn px-5 py-3 mt-2"
                style={{ backgroundColor: "black", color: "white" }}
              >
                Upload Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTemplate;

