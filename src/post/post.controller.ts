import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { EditPostDto } from './dto/edit-post.dto';
import { PostService } from './post.service';


@ApiTags('Post Controller')
@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService) { }

    @Get()
    async list() {
        const data = await this.postService.list();

        return { data };
    }

    @Get(':id')
    async get(@Param('id', ParseIntPipe) id: number) {
        const data = await this.postService.get(id);

        return { data };
    }

    @Post()
    async insert(@Body() dto: CreatePostDto) {
        const data = await this.postService.insert(dto);
        return { message: 'Post inserted', data };
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: EditPostDto) {
        const data = await this.postService.update(id, dto);
        return { message: 'Post updated', data };
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const data = await this.postService.delete(id);
        return { message: 'Post deleted', data };
    }
}
