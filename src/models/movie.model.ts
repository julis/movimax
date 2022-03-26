import {Entity, model, property} from '@loopback/repository';

@model()
export class Movie extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'date',
    required: true,
  })
  releaseDate: string;

  @property({
    type: 'number',
    required: true,
  })
  runtimeMinutes: number;

  @property({
    type: 'string',
  })
  revenue?: string;

  @property({
    type: 'string',
  })
  posterImage?: string;


  constructor(data?: Partial<Movie>) {
    super(data);
  }
}

export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations;
