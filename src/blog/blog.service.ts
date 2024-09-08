import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto,UpdateUserDto } from "src/dtos/interface";

@Injectable()

export class BlogService{
    constructor(private prisma:PrismaService){}

    async createPost(data:CreateUserDto) {
        return this.prisma.blog.create({
            data
        })
    }

    async updatePost(id : string , data:UpdateUserDto){
        return this.prisma.blog.updateMany({
            where: {id},
            data
        })
    }

    async deletePost(id:string){
        return this.prisma.blog.deleteMany({
            where:{id}
        })
    }

    async getAllPosts(){
        return this.prisma.blog.findMany()
    }
    async getPostById(id:string){
        return this.prisma.blog.findUnique({
            where:{id}
        })
    }
    async getPostByCategory(category:string){
        return this.prisma.blog.findMany({
            where:{category}
        })
    }
    async getPostByTag(tag:string){
        return this.prisma.blog.findMany({
            where:{tags:{has:tag}}
        })
    }
    async getPostByTitle(title:string){
        return this.prisma.blog.findMany({
            where:{title:{contains:title}}
        })
    }
}