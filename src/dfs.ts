interface IStack<T> {
	push(item: T): void
	pop(): T | undefined
	peek(): T | undefined
	size(): number
	shift(): T | undefined
	get(x: number): T | undefined
}

export class Stack<T> implements IStack<T> {
	private storage: T[] = []

	constructor(private capacity: number = Infinity) {}

	push(item: T): void {
		if (this.size() === this.capacity) {
			throw Error("Stack has reached max capacity, you cannot add more items")
		}
		this.storage.push(item)
	}

	pop(): T | undefined {
		return this.storage.pop()
	}

	peek(): T | undefined {
		return this.storage[this.size() - 1]
	}

	size(): number {
		return this.storage.length
	}

	shift(): T | undefined {
		return this.storage.shift()
	}

	get(x: number): T | undefined {
		return this.storage[x]
	}
}

export const DFS = (row: number, col: number,grid: [], vis: []) =>{
    // Initialize a stack of pairs and
    // push the starting cell into it
    var st = [];
    st.push([ row, col ]);
 
    // Iterate until the
    // stack is not empty
    while (st.length!=0) {
        // Pop the top pair
        var curr = st[st.length-1];
        st.pop();
        var row = curr[0];
        var col = curr[1];
 
        // Check if the current popped
        // cell is a valid cell or not
        if (!isValid(vis, row, col))
            continue;
 
        // Mark the current
        // cell as visited
        vis[row][col] = true;
 
        // Print the element at
        // the current top cell
        document.write( grid[row][col] + " ");
 
        // Push all the adjacent cells
        for (var i = 0; i < 4; i++) {
            var adjx = row + dRow[i];
            var adjy = col + dCol[i];
            st.push([ adjx, adjy ]);
        }
    }
}