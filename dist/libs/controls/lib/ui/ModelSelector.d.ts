interface ModelOption {
    value: string;
    label: string;
    description?: string;
    category?: string;
}
interface ModelSelectorProps {
    options: ModelOption[];
    value?: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
}
export declare const ModelSelector: ({ options, value, onValueChange, placeholder, }: ModelSelectorProps) => import("react/jsx-runtime").JSX.Element;
export {};
