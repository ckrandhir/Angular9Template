import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PayerFakeDb } from './payers-db';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Payers
      payers: PayerFakeDb.payers,

    };
  }
}
