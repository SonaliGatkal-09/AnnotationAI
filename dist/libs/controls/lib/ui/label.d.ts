import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: import('class-variance-authority/dist/types').ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;
export { Label };
