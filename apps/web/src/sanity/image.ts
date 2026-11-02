import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const imageBuilder = createImageUrlBuilder(client);

export function urlForImage(source: Parameters<typeof imageBuilder.image>[0]) {
  if (
    typeof source !== "object" ||
    source === null ||
    !("asset" in source) ||
    typeof source.asset !== "object" ||
    source.asset === null ||
    !("_ref" in source.asset)
  ) {
    return undefined;
  }
  return imageBuilder?.image(source).auto("format").fit("max");
}
