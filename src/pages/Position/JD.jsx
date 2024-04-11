import { useEffect, useState } from "react";
import { Flex, Title, Button, Alert, Group, FileButton } from "@mantine/core";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import HeadingLayout from "../../components/Layout/HeadingLayout";
import appStrings from "../../utils/strings";
import { useLocation } from "react-router-dom";
import { getJD, uploadJD } from "../../controllers/jd";

export default function JDPage() {
  const location = useLocation();
  const projectId = location.pathname.split("/")[1];
  const positionId = location.pathname.split("/")[2];

  const editorController = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "",
  });
  // const { editor } = useRichTextEditorContext();
  const [isLoading, setIsLoading] = useState(false);

  function handleSaveJD() {
    setIsLoading(true);
    uploadJD(projectId, positionId, editorController?.getHTML()).then((_) =>
      setIsLoading(false)
    );
  }

  useEffect(() => {
    getJD(projectId, positionId).then((data) => {
      editorController.commands.setContent(data.content);
    });
  }, [editorController]);

  return (
    <Flex direction="column" gap="md">
      <HeadingLayout>
        <Title order={1}>{appStrings.language.jd.heading}</Title>
      </HeadingLayout>
      <Alert variant="light" color="blue">
        <Group justify="space-between" align="center">
          <div>
            <Title order={4}>{appStrings.language.jd.uploadJDTitle}</Title>
            {appStrings.language.jd.uploadJDMessage}
          </div>
          <FileButton accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
            {(props) => (
              <Button {...props}>{appStrings.language.jd.uploadJDBtn}</Button>
            )}
          </FileButton>
        </Group>
      </Alert>
      <RichTextEditor editor={editorController} style={{ height: "400px" }}>
        <RichTextEditor.Toolbar sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content
          style={{ maxHeight: "350px", overflowY: "auto" }}
        />
      </RichTextEditor>
      <Flex justify="flex-end" gap="md">
        <Button loading={isLoading} onClick={handleSaveJD}>
          {appStrings.language.btn.save}
        </Button>
      </Flex>
    </Flex>
  );
}
