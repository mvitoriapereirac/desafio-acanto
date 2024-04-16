import { PrismaClient } from "@prisma/client";

const bookClient = new PrismaClient().book; 

//getAllBooks
export const getAllBooks = async (req, res) => {
    try {
        const allBooks = await bookClient.findMany({

        })

        res.status(200).json({ data: allBooks })
    } catch (error) {
        console.log(error)
    }
}

//getBookById
export const getBookById = async (req, res) => {
    try {
        const bookId = req.params.id
        const book = await bookClient.findUnique({
           where: {
               id: bookId
           }
        })

        res.status(200).json({ data: book })
    } catch (error) {
        console.log(error)
    }
}

//createBook

export const createBook = async (req, res) => {
    console.log("passou aqui")
    try {
        const bookData = req.body
        const book = await bookClient.create({
            data: {
                title: bookData.title,
                author: {
                    connect: { id: bookData.authorId } //connects a book object to an existing author
                },
            },
        })

        res.status(201).json({ data: book })
    } catch (error) {
        console.log(error)
    }
}

//updateBook
export const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id
        const bookData = req.body

        const author = await bookClient.update({
           where: {
               id: bookId
           },
           data: bookData
        })

        res.status(200).json({ data: author })
    } catch (error) {
        console.log(error)
    }
}

//deleteBook
export const deleteBook = async (req, res) => {
    try {
        
        const bookId = req.params.id;
        const book = await bookClient.delete({
            where: {
                id: bookId
            }
        })

        res.json({data: book}).status(200)

    } catch (error) {
        console.log(error)

    }
}