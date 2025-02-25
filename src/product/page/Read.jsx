import ReactGridLayout from "react-grid-layout"

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: "c", x: 4, y: 0, w: 1, h: 2 }
];
function ReadProduct() {
  return (
    <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
      <div key="a" className="border" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
        a
      </div>
      <div key="b" className="border" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
        b
      </div>
      <div key="c" className="border" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
        c
      </div>
    </ReactGridLayout>
  )
}

export default ReadProduct