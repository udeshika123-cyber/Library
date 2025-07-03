import { createContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "68555c56000d919b7d04";
const COLLECTION_ID = "685803b40012328533bc";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)]
      );
      setBooks(response.documents);
      console.log("Fetched books:", response.documents);
    } catch (error) {
      console.error("Fetch books error:", error.message);
    }
  }

  async function fetchBookById(id) {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  async function createBook(data) {
    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
      fetchBooks(); // refresh after creating
    } catch (error) {
      console.log(error.message);
    }
  }

  async function deleteBook(id) {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
      fetchBooks(); // refresh after deleting
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (user) {
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
