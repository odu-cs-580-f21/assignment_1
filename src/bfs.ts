interface IQueue<T> {
	enqueue(item: T): void;
	dequeue(element: number): T[] | undefined;
	size(): number;
	get(cell: number): T | undefined;
	contains(item: any, id: string): boolean;
}

interface XY{
	x: number,
	y: number
}

class Queue<T> implements IQueue<T> {
	private storage: T[] = [];

	constructor(private capacity: number = Infinity) {}

	enqueue(item: any): void {
		if (this.size() === this.capacity)
			throw Error("Queue has reached max capacity, you cannot add more items");
		this.storage.push(item);
	}

	dequeue(element: number): T[] | undefined {
		return this.storage.splice(element, 1);
	}

	size(): number {
		return this.storage.length;
	}

	get(cell: number): T | undefined {
		return this.storage[cell];
	}

	contains(item: any, id: string): boolean {
		console.log(id);
		if (
			//@ts-ignore
			this.storage.some((value: T | XY) => value?.x === item.x && value?.y === item.y)
		) {
			return true;
		} else {
			return false;
		}
	}
}

const isValid = (
	curr_row: number,
	curr_col: number,
	r_size: number,
	c_size: number
) => {
	// If cell lies out of bounds
	if (
		curr_row - 1 < 0 ||
		curr_col - 1 < 0 ||
		curr_row + 1 >= r_size ||
		curr_col + 1 >= c_size
	) {
		return false;
	}
	else{
		return true;
	}
};

export const BFS = (row: number, col: number, level: [string]): void => {
	// Stores cells
	const queue = new Queue<number>();
	const visited = new Queue<number>();
	const taken = new Queue<number>();

	const start_x = row;
	const start_y = col;

	console.log(start_x, start_y);

	let widest_row = 0;

	for (let index = 0; index < level.length; index++) {
		let lengths = [];
		let lg = level[index].length;
		lengths.push(lg);

		widest_row = Math.max(...lengths);
	}

	//get board width
	const width: number = widest_row;
	//get board height
	const height: number = level.length;

	// Mark the starting cell as visited
	// and push it into the queue
	queue.enqueue({ x: start_x, y: start_y });
	//Getting the adjacent cells to starting point to have a queue built
	queuer(start_x, start_y, width, level, height, queue, visited, taken);
	visited.enqueue({ x: start_x, y: start_y });
	queue.dequeue(0);

	//while the queue is not empty
	while (queue.size() !== 0) {
		//get the next element in the queue
		let element = queue.get(0);
		console.log(element, queue, visited, taken);
		//if cell isn't blocked or visited
		if (
			!visited.contains(element, "visited") &&
			!taken.contains(element, "taken")
		) {
			// @ts-ignore
			let { x, y } = element;
			//get adjacent cells to it
			if (queuer(x, y, width, level, height, queue, visited, taken) === true) {
				queue.dequeue(0);
				visited.enqueue({ x, y });
			} else {
				queue.dequeue(0);
			}
		} else {
			queue.dequeue(0);
		}
	}
	console.log("Queue:", queue);
	console.log("Visited:", visited);
	console.log("Taken:", taken);
};

const queuer = (
	x: number,
	y: number,
	width: number,
	board: [string],
	height: number,
	queue: Queue<number>,
	visited: Queue<number>,
	taken: Queue<number>
): boolean | undefined => {
	if (isValid(x, y, width, height)) {
		let adj_x_l = board[x - 1][y];
		let adj_x_r = board[x + 1][y];
		let adj_y_u = board[x][y - 1];
		let adj_y_d = board[x][y + 1];

		//check if base position has been visited yet
		if (visited.contains({ x, y }, "visited")) {
			//check if visited has anything in it
			//this is used so seed value isn't messing with further queuing
			if (visited.size() !== 0){
				if(queue.contains({ x, y }, "queue")){
					return false
				}
				else{
					return true
				}
			}
			else{
				return true
			}
		} else {
			if (isTaken(adj_x_l)) {
				taken.enqueue({ x: x - 1, y });
			} else if(!queue.contains({ x: x - 1, y }, "queue") && !visited.contains({ x: x - 1, y },"visited")) {
				queue.enqueue({ x: x - 1, y });
			}


			if (isTaken(adj_x_r)) {
				taken.enqueue({ x: x + 1, y });
			} else if(!queue.contains({ x: x + 1, y }, "queue") && !visited.contains({ x: x + 1, y }, "visited")) {
				queue.enqueue({ x: x + 1, y });
			}


			if (isTaken(adj_y_u)) {
				taken.enqueue({ x, y: y - 1 });
			} else if(!queue.contains({ x, y: y - 1 }, "queue") && !visited.contains({ x, y: y - 1 }, "visited")){
				queue.enqueue({ x, y: y - 1 });
			}


			if (isTaken(adj_y_d)) {
				taken.enqueue({ x, y: y + 1 });
			} else if(!visited.contains({ x, y: y + 1 }, "visited") && !queue.contains({ x, y: y + 1 }, "queue") ){
				queue.enqueue({ x, y: y + 1 });
			}

			return true;
		}
	}
	else{
		return false
	}
};

const isTaken = (cell: string) => {
	if (cell === "X" || cell === "_") {
		return true;
	} else {
		return false;
	}
};
