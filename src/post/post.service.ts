import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { EditPostDto } from './dto/edit-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ) { }

    async list(): Promise<Post[]> {
        return await this.postRepository.find();
    }

    async get(id: number): Promise<Post> {
        const post = await this.postRepository.findOne(id);
        if (!post) throw new NotFoundException('Post does not exist');
        return post;
    }

    async insert(dto: CreatePostDto) {
        const post = this.postRepository.create(dto);
        return await this.postRepository.save(post);
    }

    async update(id: number, dto: EditPostDto) {
        const post = await this.postRepository.findOne(id);

        if (!post) throw new NotFoundException('Post does not exist');

        const editedPost = Object.assign(post, dto);
        return await this.postRepository.save(editedPost);
    }

    async delete(id: number) {
        return await this.postRepository.delete(id);
    }
}
