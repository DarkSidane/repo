import { Injectable } from '@nestjs/common';
import { HelloMessage } from '../HelloMessage';

@Injectable()
export class AppService {
	getHello(name: string): HelloMessage {
		const message = `Hello, ${name}!`;
		return {"hello":name}; 
	}
}
