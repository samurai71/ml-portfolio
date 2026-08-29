import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const imageBuilder = createImageUrlBuilder(client);

export function urlForImage(source: any) {
  if (!source?.asset?._ref) {
    return undefined;
  }
  return imageBuilder?.image(source).auto("format").fit("max");
}
