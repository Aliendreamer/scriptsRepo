const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

function dfsIterative(graph, start) {
    const stack = [start];
    const visited = new Set();

    while (stack.length > 0) {
        const node = stack.pop();

        if (!visited.has(node)) {
            // Mark the node as visited
            visited.add(node);

            // Process the current node (optional, e.g., print it)
            console.log(node);

            // Add all unvisited neighbors to the stack
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

function dfsRecursive(graph, start, visited = new Set()) {
    // Mark the current node as visited
    visited.add(start);

    // Process the current node (optional, e.g., print it)
    console.log(start);

    // Visit all neighbors of the current node
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Example Usage
console.log("Recursive DFS:");
dfsRecursive(graph, "A"); // Output: A B D E F C


// Example Usage
console.log("Iterative DFS:");
dfsIterative(graph, "A"); // Output: A C F B E D
