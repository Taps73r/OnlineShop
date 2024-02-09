import React from "react";

interface ErrorFormProps {
    message?: string;
}

export function ErrorForm({ message }: ErrorFormProps): JSX.Element {
    return <div className="">{message}</div>;
}
