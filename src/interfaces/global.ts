export interface appConfig{
    URIS:{
        BASE:{
            express:string;
        };
        SERVICE:{
            test:string;
            NEO4J:{
                getTest:string;
                getQuery:string;
            }
            MONGO:{
                getTest:string;
                getQuery:string;
            }
        };
    };
    MONGO_SETTINGS:{
        REQUESTS:{
            getOneLevel:{
                id: number;
                type: string;
                request:string;
            };
            getMultipleLevels:{
                id:number;
                type:string;
                request:string;
            };
            getPath:{
                id:number;
                type:string;
                request: string;
            };
        }
    },
    NEO_SETTINGS:{
        REQUESTS:{
            getOneLevel:{
                id:number;
                type:string;
                request: string;
            };
            getMultipleLevels:{
                id:number;
                type:string;
                request: string;
            };
            getPath:{
                id:number;
                type:string;
                request: string;
            };
        };
    };
}