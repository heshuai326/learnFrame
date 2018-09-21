import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiUseTags,
  } from '@nestjs/swagger';
import { LoggingInterceptor } from './../logging.interceptor';
import { AuthGuard } from './../auth.guard';
import { UsersPipe } from './users.pipe';
import { ForbiddenException } from './../forbidden/forbidden.exception';
import { User } from './user.interface/user.interface';
import { CreateUserDto } from './create-user-dto/create-user-dto';
import { UsersService } from './users.service';
import { Controller, Get, Post, Body, Req, Param, Query, Res, HttpStatus, HttpException, Catch, ValidationPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { Roles } from 'roles/roles.decorator';

@Catch()
@ApiBearerAuth()
@ApiUseTags('users')
@Controller('users')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
export class UsersController {
    constructor(private userservice: UsersService) { }

    /**
     * 控制器里面的装饰器
     * @Request @Reponse @Next @Session @Param @Body @Query @Headers
     * http://localhost:3000/users/1?username=111
     * @param {*} request 请求对象
     * @param {*} params /users/1 {id: '1'}
     * @param {*} query /users?username = 111 {username: '111'}
     * @memberof UsersController
     */
    @Get(':id')
    @ApiBearerAuth()
    @ApiUseTags('单个用户查询')
    user(@Req() request, @Param('id', new UsersPipe()) params, @Query() query) {
        if (params === '1') {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
        } else if (params === '2') {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: '2 is forbidden '
            }, 403)
        } else if (params === '3') {
            throw new ForbiddenException()
        }
        else {
            //  @Param('id', new ValidationPipe())
            console.log(new ValidationPipe())
            return `a user id is ${params}, username is ${query.username}`
        }
    }

    @Get()
    // @Roles('admin')
    @ApiBearerAuth()
    @ApiUseTags('查询所有用户')
    async users(): Promise<User[]> {
        // return []
        console.log(await this.userservice.findAll())
        return await this.userservice.findAll()
    }

    @Post()
    @ApiUseTags('创建用户')
    @ApiOperation({ title: 'Create cat' })
    @ApiResponse({
      status: 200,
      description: '用户创建成功',
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto, @Res() res) {
        console.log(createUserDto)
        await this.userservice.create(createUserDto)
        res.status(HttpStatus.OK).json({ msg: 'the user was created' })
    }

}
