// Stacks and Queues

// Queues

// 1. Queues are abstract data types where:
// 	- Items are only added by enqueueing (adding) them from the back
// 	- Items are only removed from a queue by dequeueing (removing) them at the front
// 	- Cannot remove items in the middle
// 	- Thus, newer items are always near the back of the queue and older items are near the front.
// 	- This follows the idea of FIFO, or "FIRST IN, FIRST OUT"

// 2. Typical Queue methods
//	- enqueue(item) -> add to end
//	- dequeue() -> remove & return first item
//	- peek() -> Return first item, but dont remove
//	- isEmpty() -> are there items in the queue?

// 3. Can you use the regular array methods like "push" "pop" etc??
// 	- You can, but removing (dequeueing) is not performant, it is O(n).
// 	- It is more optimal to use linked list and doubly linked lists because they are considered O(1) or constant time.

// Stacks

// 1. When thinking of stacks think of a stack of pancakes or even a clothes hamper.
// 2. When adding or "pushing" an item into the stack, you add it to the end.
// 3. And when you remove or "pop" an item off of the stack you take it off of the top.
// 4. This follow the principle of LIFO, or LAST IN FIRST OUT.

// 5. Stacks implementations:
// 	- An array can be a good implementation for a stack because you can push and pop at the end of the array and it is still O(1) or constant time.
// 	- Linked Lists and Doubly linked lists are also good but you have to make sure to add and remove items in the last to the beginning to make sure that it remains constant time because removing from the end of the list is linear time.

// Deques

// 1. A double ended queue, where you can add and remove items from the beginning or end
// 2. The best implentation of this would be to use a doubly linked list because all 4 operations in this case are constant time while for linked lists and arrays some of the operations are linear time.

// Priority Queue
// 1. An abstract data type where items that are added each have a priority and the one with the highest priority gets removed first.
// 	- Think of a hospital waiting room where patients with the highest priority get seen first regardless of when they showed up

// 2. Methods
// 	- add(pri, item)
// 	- poll() -> remove and return top priority item
// 	- peek() -> return (dont remove) top priority item
// 	- isEmpty() -> are there items in the queue.

// 3. Implemenations:
// 	- Keep unsorted, add to end, and find top priority on poll.
// 	- Basically with the current ADT that weve seen there is no efficient way to implement this!
// 	- However, later on we will see that "heaps" are great for priority queues.
