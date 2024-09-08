import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { BlogService } from "./blog.service";
import { CreateUserDto, UpdateUserDto } from "src/dtos/interface";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('blog')
@ApiTags('blog')
export class BlogController{
    constructor (private readonly blogService:BlogService){}

    @Post()
    @ApiOperation({summary:"create a Post"})
    @ApiResponse({ status: 201, description: 'This Post has been successfully created.' })
    createBlog(@Body() body:CreateUserDto){
        try {
        return this.blogService.createPost(body)
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'could not create Blog',
            },
        HttpStatus.FORBIDDEN,{
            cause:error
        })
        }
      }

    @Put(':id')
    @ApiOperation({summary:"update a Post"})
    @ApiResponse({ status: 200, description: 'This Post has been successfully updated.' })
    updateBlog(@Param('id') id:string, @Body() body:UpdateUserDto){
        try {
        return this.blogService.updatePost(id,body)
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'could not update Blog',
            },
        HttpStatus.FORBIDDEN,{
            cause:error
        })
        }
        
    }

    @Get('all')
    @ApiOperation({summary:"get all Posts"})
    @ApiResponse({ status: 200, description: 'This Post has been successfully fetched.' })
    getAllBlogs() {
        return this.blogService.getAllPosts();
    }

    @Get(':id')
    @ApiOperation({summary:"get a Post"})
    @ApiResponse({ status: 200, description: 'This Post has been successfully fetched.' })
    getBlogById(@Param('id') id:string) {
        return this.blogService.getPostById(id);
    }

    
    @Get('category/:category')
    @ApiOperation({summary:"get a Post by category"})
    @ApiResponse({ status: 200, description: 'This Post has been successfully fetched.' })
    getBlogByCategory(@Param('category') category:string) {
        return this.blogService.getPostByCategory(category);
    }
    getBlogByTag(@Param('tag') tag:string) {
        return this.blogService.getPostByTag(tag);
    }
    getBlogByTitle(@Param('title') title:string) {
        return this.blogService.getPostByTitle(title);
    }

}