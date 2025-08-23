
let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tFoot)
console.log(t.tBodies)
console.log(t.rows[0].rowIndex)

let firstRow = t.firstElementChild.nextElementSibling.firstElementChild
console.log(firstRow.cells)
console.log(firstRow.sectionRowIndex)
console.log(firstRow.rowIndex)

let firstData = firstRow.firstElementChild.nextElementSibling
console.log(firstData)