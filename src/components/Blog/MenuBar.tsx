import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  Link2Icon,
  List,
  ListOrdered,
  QuoteIcon,
  Redo2Icon,
  SeparatorHorizontalIcon,
  Strikethrough,
  Underline,
  Undo2Icon,
} from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import type { Editor } from '@tiptap/core';
import { LuYoutube } from 'react-icons/lu';

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const Options = [
    // **1. Text Formatting**
    {
      icon: <Heading1 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive('heading', { level: 1 }),
    },
    {
      icon: <Heading2 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive('heading', { level: 2 }),
    },
    {
      icon: <Heading3 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive('heading', { level: 3 }),
    },
    {
      icon: <Bold />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive('bold'),
    },
    {
      icon: <Italic />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive('italic'),
    },
    {
      icon: <Underline />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      pressed: editor.isActive('underline'),
    },
    {
      icon: <Strikethrough />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive('strike'),
    },
    {
      icon: <Highlighter />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editor.isActive('highlight'),
    },
    {
      icon: <Code />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      pressed: editor.isActive('codeBlock'),
    },

    // **2. Alignment**
    {
      icon: <AlignLeft />,
      onClick: () => editor.chain().focus().setTextAlign('left').run(),
      pressed: editor.isActive({ textAlign: 'left' }),
    },
    {
      icon: <AlignCenter />,
      onClick: () => editor.chain().focus().setTextAlign('center').run(),
      pressed: editor.isActive({ textAlign: 'center' }),
    },
    {
      icon: <AlignRight />,
      onClick: () => editor.chain().focus().setTextAlign('right').run(),
      pressed: editor.isActive({ textAlign: 'right' }),
    },

    // **3. Lists**
    {
      icon: <List />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive('bulletList'),
    },
    {
      icon: <ListOrdered />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive('orderedList'),
    },

    // **4. Blockquote & Horizontal Rule**
    {
      icon: <QuoteIcon />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      pressed: editor.isActive('blockquote'),
    },
    {
      icon: <SeparatorHorizontalIcon />,
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
      pressed: false,
    },

    // **5. Links & YouTube**
    {
      icon: <Link2Icon />,
      onClick: () => {
        const url = window.prompt('Enter URL');
        if (!url) return;

        editor
          .chain()
          .focus()
          .extendMarkRange('link')
          .setLink({
            href: url,
            class: 'text-blue-600 underline',
          })
          .run();
      },
      pressed: editor.isActive('link'),
    },
    {
      icon: <LuYoutube />,
      onClick: () => {
        const url = prompt('Paste YouTube URL:');
        if (!url) return;

        editor
          .chain()
          .focus()
          .setYoutubeVideo({
            src: url,
          })
          .run();
      },
      pressed: editor.isActive('youtube'),
    },

    // **6. Undo/Redo**
    {
      icon: <Undo2Icon />,
      onClick: () => editor.chain().focus().undo().run(),
      pressed: false,
    },
    {
      icon: <Redo2Icon />,
      onClick: () => editor.chain().focus().redo().run(),
      pressed: false,
    },
  ];

  return (
    <div className="z-50 mb-1 space-x-2 rounded-md border border-purple-600 p-1">
      {Options.map((option, index) => (
        <Toggle
          key={index}
          pressed={option.pressed}
          onPressedChange={option.onClick}
          className="text-white hover:bg-purple-800 hover:text-white focus-visible:text-white focus-visible:ring-purple-600 data-[state=on]:text-white [&_svg]:text-white"
        >
          {option.icon}
        </Toggle>
      ))}
    </div>
  );
};
export default MenuBar;
