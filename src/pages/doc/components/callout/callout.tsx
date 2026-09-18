import type { ReactNode } from "react";
import { visit } from "unist-util-visit";
import type { Root } from "mdast";

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const calloutVariants = cva(
	"border-l-4 p-4 rounded-r my-4",
  {
    variants: {
      variant: {
        warning: "bg-amber-50 border-amber-500 text-amber-900",
        important: "bg-red-50 border-red-500 text-red-900",
        curiosity: "bg-blue-50 border-blue-500 text-blue-900",
      },
    defaultVariants: {
      variant: "curiosity",
			},
		}
	}
)

const calloutTitle = {
	curiosity: "☝️ Curiosidade",
	warning: "⚠️ Aviso",
	important: "❗ Importante",
}

function remarkCallouts() {
  return (tree: Root) => {
    visit(tree, (node) => {
      if (
        node.type === "containerDirective" || 
        node.type === "leafDirective"
      ) {
        const data = node.data || (node.data = {});
        
        data.hName = "callout";
        data.hProperties = { variant: node.name };
      }
    });
  };
}

const CalloutBlock = (
	{ children, variant = "curiosity" }: 
	{children: ReactNode} & VariantProps<typeof calloutVariants>) => {

  return (
    <div className={cn(calloutVariants({ variant: variant }))}>
      <div className="font-bold mb-1">{calloutTitle[variant?? "curiosity"]}</div>
      <div>{children}</div>
    </div>
  );
};

export { CalloutBlock, remarkCallouts }