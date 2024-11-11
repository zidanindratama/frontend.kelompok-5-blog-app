export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface CategoryOnBlog {
  id: string;
  blogId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
}

export interface Author {
  id: string;
  role: "ADMINISTRATOR" | "BLOGGER" | "MEMBER";
  email: string;
  name: string;
  bio: string | null;
  image: string | null;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  shortDescription: string;
  image: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
  categories: CategoryOnBlog[];
}
