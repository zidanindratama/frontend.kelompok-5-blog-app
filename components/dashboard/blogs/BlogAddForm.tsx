"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddData } from "@/hooks/useAddData";
import { zodResolver } from "@hookform/resolvers/zod";
import { Content, Editor } from "@tiptap/react";
import { MinimalTiptapEditor } from "@/components/minimal-tiptap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useFetchData } from "@/hooks/useFetchData";

const formSchema = z.object({
  title: z.string(),
  coverImage: z.any(),
  content: z.string(),
});

const BlogAddForm = () => {
  const { data: myProfile, isSuccess } = useFetchData({
    queryKey: ["myProfile"],
    dataProtected: `users/me`,
  });

  const editorRef = useRef<Editor | null>(null);
  const [value, setValue] = useState<Content>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const coverImageRef = form.register("coverImage");

  const mutationCreateBlog = useAddData({
    queryKey: "blogsData",
    dataProtected: `blogs`,
    backUrl: `/dashboard/blogs`,
    multipart: true,
  });

  const handleCreate = useCallback(
    ({ editor }: { editor: Editor }) => {
      if (form.getValues("content") && editor.isEmpty) {
        editor.commands.setContent(form.getValues("content"));
      }
      editorRef.current = editor;
    },
    [form]
  );

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const form = new FormData();

    if (values.coverImage.length > 0) {
      const appendIfNotNull = (key: string, value: any) => {
        if (value != null) {
          form.append(key, value);
        }
      };

      appendIfNotNull("title", values.title);
      appendIfNotNull("content", values.content);
      appendIfNotNull("authorId", myProfile?.data.id);

      if (values.coverImage[0] !== undefined) {
        form.append("image", values.coverImage[0]);
      }

      mutationCreateBlog.mutate(form);
    } else {
      toast.error("Image cover should not be empty!");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Add Blog</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        placeholder="Cover Image"
                        {...coverImageRef}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <MinimalTiptapEditor
                        {...field}
                        className="max-w-[18.5rem] sm:max-w-[24rem] lg:max-w-full"
                        editorContentClassName="p-5"
                        output="html"
                        placeholder="Type your description here..."
                        onCreate={handleCreate}
                        autofocus={true}
                        editable={true}
                        editorClassName="focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button variant={"yellowBlog"}>Save</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};

export default BlogAddForm;
