const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};
function bfsIterative(graph, start) {
    const queue = [start]; // Initialize the queue with the starting node
    const visited = new Set();

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue the first element

        if (!visited.has(node)) {
            // Mark the node as visited
            visited.add(node);

            // Process the current node (optional, e.g., print it)
            console.log(node);

            // Enqueue all unvisited neighbors
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example Usage
console.log("Iterative BFS:");
bfsIterative(graph, "A"); // Output: A B C D E F

function bfsRecursive(graph, queue, visited = new Set()) {
    if (queue.length === 0) {
        return; // Base case: stop when the queue is empty
    }

    const node = queue.shift(); // Dequeue the first element

    if (!visited.has(node)) {
        // Mark the node as visited
        visited.add(node);

        // Process the current node (optional, e.g., print it)
        console.log(node);

        // Enqueue all unvisited neighbors
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
            }
        }
    }

    // Recursive call with the updated queue and visited set
    bfsRecursive(graph, queue, visited);
}

// Example Usage
console.log("Recursive BFS:");
bfsRecursive(graph, ["A"]); // Output: A B C D E F
