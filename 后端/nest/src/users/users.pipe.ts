import { ArgumentMetadata, Pipe, PipeTransform } from '@nestjs/common';

@Pipe()
export class UsersPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log(value)
    console.log(metadata)
    value = 'No. ' + String(value).slice(0, 5)
    return value;
  }
}
