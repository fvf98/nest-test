import { IsString, IsEnum, IsArray, IsBoolean, IsOptional } from "class-validator";
import { EnumToString } from "src/helpers/helpers/enumToString";
import { PostCategory } from "../enums/post-category.enum";

export class CreatePostDto {
    @IsString()
    title: string;

    @IsString()
    slug: string;

    @IsString()
    excerpt: string;

    @IsString()
    content: string;

    @IsEnum(PostCategory, {
        message: `Invalid option. Valids options are ${EnumToString(PostCategory)}`,
    })
    category: string;

    @IsString({ each: true })
    @IsArray()
    tags: string[];

    @IsOptional()
    @IsBoolean()
    status: boolean;
} 