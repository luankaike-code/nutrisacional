import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      callout: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { variant?: "warning" | "important" | "curiosity"},
        HTMLElement
      >;
    }
  }
}
