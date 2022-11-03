function getNeighbors(row, col, graph) {
  let neighbors = []
  // Check top
  let up = [row - 1, col]
  if (row - 1 >= 0 && graph[row - 1][col] === 1) neighbors.push(up)

  // Check bottom
  let down = [row + 1, col]
  if (row + 1 <= graph.length - 1 && graph[row + 1][col] === 1) neighbors.push(down)

  // Check left
  let left = [row, col - 1]
  if (col - 1 >= 0 && graph[row][col - 1] === 1) neighbors.push(left)

  // Check right
  let right = [row, col + 1]
  if (col + 1 <= graph[row].length - 1 && graph[row][col + 1] === 1) neighbors.push(right)

  // Return neighbors
  return neighbors

  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
const visited = new Set ()
  // Create a stack, put the starting node in the stack
const stack = []
let start = [row, col]
stack.push(start)
  // Put the stringified starting node in visited
  visited.add(start.toString())
  // Initialize size to 0
let size = 0
  // While the stack is not empty,
while (stack.length) {

  // Pop the first node
  let currNode = stack.pop()
  // DO THE THING (increment size by 1)
 size++
  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  let neighbors = getNeighbors(currNode[0], currNode[1], graph)
  neighbors.forEach(neighbor => {
    if (!visited.has(neighbor.toString())) {
      visited.add(neighbor.toString())
      stack.push(neighbor)
    }
  })
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!
}
  // return size
return size
  // Your code here
}

module.exports = [getNeighbors, islandSize];
