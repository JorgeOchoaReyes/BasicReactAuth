export interface MessageType {  
    id: number,
    title: string,
    body: string,
    read: boolean,
    sent: string,
    sender: string,
    receiver: string
}

export interface ErrorType { 
    detail: string; 
}

export interface MutationResultsType { 
    data: string; 
}

export interface ComposeErrorType {
    errors: {
        body: string[],
        title: string[],
        receiver: string[] 
    }
}