import { LocalStorage } from 'node-localstorage';

import { POKEMON_SERVER_URL } from '@/const/.';
import { ApiRequestType, ApiResponseType } from '../Model/api';

global.localStorage = new LocalStorage('./scratch');
