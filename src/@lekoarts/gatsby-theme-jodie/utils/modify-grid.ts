import type { IGatsbyImageData } from "gatsby-plugin-image"

interface IGridItem {
  slug: string
  title: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  __typename: "MdxProject" | "MdxPage"
}


import { filterBySlug } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data: Array<IGridItem>): Array<IGridItem> => data
// const modifyGrid = (data: Array<IGridItem>): Array<IGridItem> => filterBySlug(data, ["/about"]);

// const order = ["location-details", "/about", "pictures-of-the-apartment"];

export function reorder(originalData: IGridItem[], order: String[]) {
  // const data = [...originalData]
  // let m = data.length
  // let t
  // let i

  // while (m) {
  //   i = Math.floor(random(seed) * m--)
  //   t = data[m]
  //   data[m] = data[i]
  //   data[i] = t
  //   // eslint-disable-next-line no-param-reassign
  //   ++seed
  // }

  originalData.forEach((e, i) => {});

  return originalData
}

// const modifyGrid = (data: Array<IGridItem>): Array<IGridItem> => reorder(data, order);

export default modifyGrid
