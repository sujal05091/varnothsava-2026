// Mock type since @wix/data is removed
export namespace items {
  export interface WixDataResult<T> {
    items: T[];
    totalCount: number;
  }
  
  export interface WixDataItem {
    _id: string;
    [key: string]: any;
  }
}

export type WixDataItem = items.WixDataItem;
export type WixDataQueryResult<T = any> = items.WixDataResult<T>;
