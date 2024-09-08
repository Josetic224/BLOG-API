import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'My First Blog',
  })
  title: string;

  @ApiProperty({
    description: 'Content of the post',
    example: 'This is the content of the blog post.',
  })
  content: string;

  @ApiProperty({
    description: 'Category of the post',
    example: 'Technology',
  })
  category: string;

  @ApiProperty({
    description: 'Tags associated with the post',
    example: ['nestjs', 'swagger'],
    type: [String],
  })
  tags: string[];
}


export class UpdateUserDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'Updated Blog Title',
    required: false,
  })
  title?: string;

  @ApiProperty({
    description: 'Content of the post',
    example: 'Updated content of the blog post.',
    required: false,
  })
  content?: string;

  @ApiProperty({
    description: 'Category of the post',
    example: 'Programming',
    required: false,
  })
  category?: string;

  @ApiProperty({
    description: 'Tags associated with the post',
    example: ['nestjs', 'documentation'],
    type: [String],
    required: false,
  })
  tags?: string[];
}
