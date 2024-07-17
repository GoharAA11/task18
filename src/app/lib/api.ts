import Database from "better-sqlite3"

export interface ICource {
    id: number,
    name: string,
    price: number
    cover: string
    duration: number
}

export type InputCourse = Omit<ICource, "id">
const db = new Database("coureses.db")

export const addCourse = (course: InputCourse) => {
    db.prepare(`
    INSERT INTO courses (name,price,cover,duration)
    VALUES (@name, @price, @cover, @duration)
    `).run(course)
}
export const getAllCourses = (): ICource[] => {
    return db.prepare(`
        SELECT * FROM courses
        `).all() as ICource[]
}
export const getCourseById=(id:number):ICource=>{
    const course= db.prepare(`
        SELECT * FROM courses WHERE id=?
        
        `).get(id) as ICource
        return course
}
export const updateCourse=(id:number, course:InputCourse)=>{
    db.prepare(`
        UPDATE courses
        SET name=@name, price=@price, cover=@cover, duration=@duration
        WHERE id=@id
      `).run({ ...course, id })
}
