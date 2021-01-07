import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, EditUserDto } from './dto';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    async list() {
        const data = await this.userService.list();
        return { data }
    }

    @Get(':id')
    async get(
        @Param('id') id: number,
    ) {
        const data = await this.userService.get(id);
        return { data }
    }

    @Post()
    async insert(
        @Body() dto: CreateUserDto
    ) {
        const data = await this.userService.insert(dto)
        return { message: 'User created', data }
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: EditUserDto
    ) {
        const data = await this.userService.update(id, dto)
        return { message: 'User edited', data }
    }

    @Delete(':id')
    async delete(
        @Param('id') id: number,
    ) {
        const data = await this.userService.delete(id)
        return { message: 'User deleted', data }
    }


}
