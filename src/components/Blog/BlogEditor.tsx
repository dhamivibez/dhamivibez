import MenuBar from '@/components/Blog/MenuBar';
import { Input } from '@/components/ui/input';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { all, createLowlight } from 'lowlight';
import Youtube from '@tiptap/extension-youtube';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const lowlight = createLowlight(all);

const BlogEditor = () => {
  const savedContent = localStorage.getItem('editor-content');
  const initialContent = savedContent ? JSON.parse(savedContent) : null;

  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState(initialContent);

  const content = savedContent ? JSON.parse(savedContent) : null;
  const editor = useEditor({
    onUpdate: ({ editor }) => {
      const currentContent = editor.getJSON();
      if (JSON.stringify(currentContent) !== savedContent) {
        localStorage.setItem('editor-content', JSON.stringify(currentContent));
        setBlogContent(currentContent);
      }
    },

    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc ml-3',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal ml-3',
          },
        },
        codeBlock: false,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Underline,
      Youtube.configure({ inline: true }),
      Link.configure({ openOnClick: true }),
      Image,
    ],
    content,
    editorProps: {
      attributes: {
        class: 'min-h-[500px]  border border-purple-600 rounded-md py-2 px-6 outline-none',
      },
    },
  });

  const submit = () => {
    if (!title || !blogContent) {
      console.log('Title and Content are required');
    } else {
      console.log(blogContent);
    }
  };

  return (
    <div className="m-auto my-8 w-[90%] max-w-4xl space-y-4">
      <Input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Blog Title" />
      <div className="space-y-2">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
        <div className="flex justify-end">
          <Button className="bg-purple-600 hover:bg-purple-600/80" onClick={submit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default BlogEditor;
