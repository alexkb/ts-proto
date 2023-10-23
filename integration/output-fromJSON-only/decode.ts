/* eslint-disable */

export const protobufPackage = "";

export interface Encode {
  encode: string;
}

export const Encode = {
  fromJSON(object: any): Encode {
    return { encode: isSet(object.encode) ? globalThis.String(object.encode) : "" };
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
