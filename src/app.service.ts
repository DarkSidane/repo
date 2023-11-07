import { Injectable } from '@nestjs/common';
import { HelloMessage } from './hello-message.model'; // Importez le modèle HelloMessage

@Injectable()
export class AppService {
  getHello(name: string): HelloMessage {
    const message = `Hello, ${name}!`;
    return new HelloMessage(message); // Créez un objet HelloMessage avec le message
  }
}
