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
import { toast } from 'sonner';
import supabase from '@/lib/supabase';
import slugify from 'slugify';
import { Loader2Icon } from 'lucide-react';

const lowlight = createLowlight(all);

const BlogEditor = () => {
  const savedContent = localStorage.getItem('editor-content');
  const initialContent = savedContent ? JSON.parse(savedContent) : null;
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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

  const submit = async () => {
    setIsLoading(true);
    try {
      if (!title || !description || !blogContent) {
        return toast.error('All fields are required');
      }
      const slug = slugify(title, { lower: true, strict: true });
      const { error } = await supabase.from('blogs').insert({ title, slug, description, content: blogContent });
      if (error) {
        console.log(error);
        return toast.error(error.message);
      }
      toast.success('Blog Created Successfully');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="m-auto my-8 w-[90%] max-w-4xl space-y-4">
      <Input
        type="text"
        className="border-purple-600 focus-visible:ring-purple-600"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
      />
      <Input
        type="text"
        className="border-purple-600 focus-visible:ring-purple-600"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Blog Description"
      />
      <div className="space-y-2">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
        <div className="flex justify-end">
          <Button
            onClick={submit}
            disabled={isLoading}
            className={`flex w-1/8 items-center justify-center gap-2 bg-purple-600 hover:bg-purple-600/80 ${isLoading ? 'cursor-not-allowed' : ''}`}
          >
            {isLoading && <Loader2Icon className="h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default BlogEditor;
