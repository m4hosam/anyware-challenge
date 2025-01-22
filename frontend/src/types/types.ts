export interface User {
  name: string;
  image?: string;
}

export interface Announcement {
  _id: string;
  user: User;
  date: string;
  content: string;
  course: string;
}

export interface Quiz {
  _id: string;
  title: string;
  course: string;
  topic: string;
  dueDate: string;
  link: string;
}

export interface AuthState {
  isAuthenticated: boolean;
}
