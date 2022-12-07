import express from 'express';
import usersPath from '../routes/v1/users';
import cors from 'cors';

class Server {

    public app: express.Application;
    public port: string;
    private apiPaths = {
        users: '/api/v1/users',
        auth: '/api/v1/auth',
        categories: '/api/v1/categories',
        courses: '/api/v1/courses',
        modules: '/api/v1/modules',
        roles: '/api/v1/roles',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.routes();
        this.middlewares();
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.apiPaths.users, usersPath );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

}

export default Server;