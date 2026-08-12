import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "hostvsl-player": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & { "data-video"?: string },
        HTMLElement
      >;
    }
  }
}

export {};
