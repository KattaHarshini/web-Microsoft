document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
          
              {
    "question": "Merge Intervals",
    "description": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals in sorted order.",
    "hint": "First, sort the intervals based on their start times. Then, iterate through the sorted intervals and merge overlapping ones.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Sort the intervals based on their start times. Initialize the merged intervals with the first interval. Iterate through the remaining intervals. If the current interval overlaps with the last merged interval, update the end of the last merged interval. Otherwise, add the current interval to the merged intervals.</p>

        <pre><code>function merge(intervals) {
            if (!intervals || intervals.length === 0) {
                return [];
            }
            intervals.sort((a, b) => a[0] - b[0]);
            const merged = [intervals[0]];
            for (let i = 1; i < intervals.length; i++) {
                const currentInterval = intervals[i];
                const lastMergedInterval = merged[merged.length - 1];
                if (currentInterval[0] <= lastMergedInterval[1]) {
                    lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
                } else {
                    merged.push(currentInterval);
                }
            }
            return merged;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n log n) - due to the sorting of the intervals</p>
        <p><strong>Space Complexity:</strong> O(log n) to O(n) depending on the sorting algorithm implementation</p>
    `
  },
  {
    "question": "Binary Tree Inorder Traversal",
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "hint": "Use recursion or an iterative approach with a stack.",
    "answer": `
        <p><strong>Solution Approach (Iterative with Stack):</strong></p>
        <p>Initialize an empty stack and an empty result array. While the current node is not null or the stack is not empty, if the current node is not null, push it onto the stack and move to its left child. Otherwise, pop a node from the stack, add its value to the result array, and move to its right child.</p>

        <pre><code>function inorderTraversal(root) {
            const result = [];
            const stack = [];
            let current = root;
            while (current || stack.length > 0) {
                while (current) {
                    stack.push(current);
                    current = current.left;
                }
                current = stack.pop();
                result.push(current.val);
                current = current.right;
            }
            return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We visit each node once</p>
        <p><strong>Space Complexity:</strong> O(n) - In the worst case (skewed tree), the stack can contain all nodes</p>
    `
  },
  {
    "question": "Valid Parentheses",
    "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    "hint": "Use a stack to keep track of opening brackets. When a closing bracket is encountered, check if it matches the top of the stack.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Iterate through the string. If we encounter an opening bracket, push it onto the stack. If we encounter a closing bracket, check if the stack is not empty and if the top of the stack is the corresponding opening bracket. If not, the string is invalid.</p>

        <pre><code>function isValid(s) {
            const stack = [];
            const map = {
                ')': '(',
                '}': '{',
                ']': '['
            };
            for (let i = 0; i < s.length; i++) {
                const char = s[i];
                if (char === '(' || char === '{' || char === '[') {
                    stack.push(char);
                } else if (map[char]) {
                    if (stack.length === 0 || stack.pop() !== map[char]) {
                        return false;
                    }
                }
            }
            return stack.length === 0;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We traverse the string once</p>
        <p><strong>Space Complexity:</strong> O(n) - In the worst case, the stack can contain all the opening brackets</p>
    `
  },
  {
    "question": "Find the Missing Number",
    "description": "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    "hint": "Consider using the sum of numbers or the XOR operation.",
    "answer": `
        <p><strong>Solution Approach (Using XOR):</strong></p>
        <p>The XOR of a number with itself is 0. XORing all the numbers in the range [0, n] with all the numbers in the given array will leave only the missing number.</p>

        <pre><code>function missingNumber(nums) {
            let missing = nums.length;
            for (let i = 0; i < nums.length; i++) {
                missing ^= i ^ nums[i];
            }
            return missing;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the array once.</p>
        <p><strong>Space Complexity:</strong> O(1) - Constant extra space.</p>
    `
  },
  {
    "question": "Number of Islands",
    "description": "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
    "hint": "Iterate through the grid. When you find a '1', increment the island count and perform a traversal (DFS or BFS) to mark all connected '1's as visited ('0').",
    "answer": `
        <p><strong>Solution Approach (DFS):</strong></p>
        <p>Iterate through each cell in the grid. If a cell is '1' and hasn't been visited, increment the island count and start a DFS from this cell to mark all connected land cells as visited by changing their value to '0'.</p>

        <pre><code>function numIslands(grid) {
            if (!grid || grid.length === 0) {
                return 0;
            }
            let count = 0;
            const rows = grid.length;
            const cols = grid[0].length;

            function dfs(r, c) {
                if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
                    return;
                }
                grid[r][c] = '0'; // Mark as visited
                dfs(r + 1, c);
                dfs(r - 1, c);
                dfs(r, c + 1);
                dfs(r, c - 1);
            }

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (grid[i][j] === '1') {
                        count++;
                        dfs(i, j);
                    }
                }
            }
            return count;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(m * n) - We visit each cell in the grid at most once.</p>
        <p><strong>Space Complexity:</strong> O(m * n) - In the worst case, the recursion stack in DFS can go up to the size of the grid.</p>
    `
  },
  {
    "question": "Lowest Common Ancestor of a Binary Tree",
    "description": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
    "hint": "Use recursion. The LCA is the first node that has one of the target nodes in its left subtree and the other in its right subtree, or if the current node is one of the target nodes.",
    "answer": `
        <p><strong>Solution Approach (Recursive):</strong></p>
        <p>The base case is when the current node is null or one of the target nodes. In the recursive step, call the function for the left and right subtrees. If both calls return a non-null node, the current node is the LCA. If one call returns a non-null node, that node is the LCA (as one of the target nodes must be in its subtree, and the other is either the current node or in its subtree).</p>

        <pre><code>function lowestCommonAncestor(root, p, q) {
            if (!root || root === p || root === q) {
                return root;
            }
            const leftLCA = lowestCommonAncestor(root.left, p, q);
            const rightLCA = lowestCommonAncestor(root.right, p, q);
            if (leftLCA && rightLCA) {
                return root;
            }
            return leftLCA || rightLCA;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - In the worst case, we might visit all nodes</p>
        <p><strong>Space Complexity:</strong> O(n) - In the worst case (skewed tree), the recursion stack can go up to the height of the tree, which can be n</p>
    `
  },
  {
    "question": "Implement LRU Cache (Continued)",
    "description": "Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1. put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item. The cache is initialized with a positive capacity.",
    "hint": "Use a hash map for quick lookups and a doubly linked list to maintain the order of usage.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Use a hash map to store key-value pairs for O(1) average time complexity for get and put. Use a doubly linked list to maintain the order of keys based on their last access time. The head of the list will be the most recently used key, and the tail will be the least recently used. When a key is accessed or inserted, move its corresponding node to the head of the list. When the capacity is reached, remove the tail node (least recently used).</p>

        <pre><code>class LRUCache {
            constructor(capacity) {
                this.capacity = capacity;
                this.cache = new Map();
                this.head = new Node(0, 0);
                this.tail = new Node(0, 0);
                this.head.next = this.tail;
                this.tail.prev = this.head;
            }

            get(key) {
                if (!this.cache.has(key)) {
                    return -1;
                }
                const node = this.cache.get(key);
                this._moveToHead(node);
                return node.value;
            }

            put(key, value) {
                if (this.cache.has(key)) {
                    const node = this.cache.get(key);
                    node.value = value;
                    this._moveToHead(node);
                } else {
                    const newNode = new Node(key, value);
                    this.cache.set(key, newNode);
                    this._addToHead(newNode);
                    if (this.cache.size > this.capacity) {
                        const tail = this._popTail();
                        this.cache.delete(tail.key);
                    }
                }
            }

            _addToHead(node) {
                node.prev = this.head;
                node.next = this.head.next;
                this.head.next.prev = node;
                this.head.next = node;
            }

            _removeNode(node) {
                const prev = node.prev;
                const next = node.next;
                prev.next = next;
                next.prev = prev;
            }

            _moveToHead(node) {
                this._removeNode(node);
                this._addToHead(node);
            }

            _popTail() {
                const tail = this.tail.prev;
                this._removeNode(tail);
                return tail;
            }
        }

        class Node {
            constructor(key, value) {
                this.key = key;
                this.value = value;
                this.prev = null;
                this.next = null;
            }
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(1) for get and put operations on average due to the hash map.</p>
        <p><strong>Space Complexity:</strong> O(capacity) - for the hash map and the doubly linked list.</p>
    `
  },
  {
    "question": "Clone Graph",
    "description": "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.",
    "hint": "Use a hash map to keep track of visited nodes and their clones to avoid infinite loops in cyclic graphs.",
    "answer": `
        <p><strong>Solution Approach (DFS with Hash Map):</strong></p>
        <p>Use a hash map to store the mapping between original nodes and their clones. Start a DFS from the given node. If a neighbor has already been cloned, return its clone from the map. Otherwise, create a new clone for the neighbor, store it in the map, and recursively clone its neighbors.</p>

        <pre><code>function cloneGraph(node) {
            if (!node) {
                return null;
            }
            const visited = new Map();

            function dfs(currentNode) {
                if (visited.has(currentNode)) {
                    return visited.get(currentNode);
                }
                const cloneNode = new Node(currentNode.val);
                visited.set(currentNode, cloneNode);
                for (const neighbor of currentNode.neighbors) {
                    cloneNode.neighbors.push(dfs(neighbor));
                }
                return cloneNode;
            }

            return dfs(node);
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(V + E) - where V is the number of vertices and E is the number of edges in the graph, as we visit each node and edge once.</p>
        <p><strong>Space Complexity:</strong> O(V) - for the hash map to store visited nodes and their clones, and for the recursion stack in DFS.</p>
    `
  },
  {
    "question": "Find Minimum in Rotated Sorted Array",
    "description": "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums, return the minimum element of this array.",
    "hint": "Use a modified binary search. The minimum element is the only element where its right neighbor is smaller.",
    "answer": `
        <p><strong>Solution Approach (Modified Binary Search):</strong></p>
        <p>Use binary search. If the array is not rotated (first element is smaller than the last), the minimum is the first element. Otherwise, in each step, if the middle element is greater than the right element, the minimum is in the right half. If the middle element is smaller than the right element, the minimum is in the left half (or the middle element itself).</p>

        <pre><code>function findMin(nums) {
            let left = 0;
            let right = nums.length - 1;

            while (left < right) {
                const mid = Math.floor(left + (right - left) / 2);
                if (nums[mid] > nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            return nums[left];
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(log n) - Modified binary search.</p>
        <p><strong>Space Complexity:</strong> O(1) - Constant extra space.</p>
    `
  },
  {
    "question": "Rotate Array",
    "description": "Given an array, rotate the array to the right by k steps, where k is non-negative.",
    "hint": "Consider using array reversal.",
    "answer": `
        <p><strong>Solution Approach (Array Reversal):</strong></p>
        <p>Reverse the entire array. Then, reverse the first k elements. Finally, reverse the remaining n-k elements. This will rotate the array to the right by k steps.</p>

        <pre><code>function rotate(nums, k) {
            k %= nums.length;

            function reverse(arr, start, end) {
                while (start < end) {
                    [arr[start], arr[end]] = [arr[end], arr[start]];
                    start++;
                    end--;
                }
            }

            reverse(nums, 0, nums.length - 1);
            reverse(nums, 0, k - 1);
            reverse(nums, k, nums.length - 1);
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - Each element is reversed at most three times.</p>
        <p><strong>Space Complexity:</strong> O(1) - Constant extra space.</p>
    `
  },
  {
    "question": "Binary Tree Level Order Traversal",
    "description": "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    "hint": "Use Breadth-First Search (BFS) with a queue.",
    "answer": `
        <p><strong>Solution Approach (BFS):</strong></p>
        <p>Initialize an empty queue and a result array. Enqueue the root node. While the queue is not empty, process all nodes at the current level. Dequeue each node, add its value to the current level's list, and enqueue its left and right children (if they exist). After processing all nodes at the current level, add the level's list to the result array.</p>

        <pre><code>function levelOrder(root) {
            const result = [];
            if (!root) {
                return result;
            }
            const queue = [root];
            while (queue.length > 0) {
                const levelSize = queue.length;
                const currentLevel = [];
                for (let i = 0; i < levelSize; i++) {
                    const node = queue.shift();
                    currentLevel.push(node.val);
                    if (node.left) {
                        queue.push(node.left);
                    }
                    if (node.right) {
                        queue.push(node.right);
                    }
                }
                result.push(currentLevel);
            }
            return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We visit each node once.</p>
        <p><strong>Space Complexity:</strong> O(w) - where w is the maximum width of the tree (the maximum number of nodes at any level).</p>
    `
  },
  {
    "question": "Maximum Depth of Binary Tree",
    "description": "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "hint": "Use recursion. The depth of a tree is 1 + the maximum depth of its left or right subtree.",
    "answer": `
        <p><strong>Solution Approach (Recursive):</strong></p>
        <p>The base case is when the root is null, in which case the depth is 0. Otherwise, the depth of the tree is 1 plus the maximum of the depths of its left and right subtrees.</p>

        <pre><code>function maxDepth(root) {
            if (!root) {
                return 0;
            }
            const leftDepth = maxDepth(root.left);
            const rightDepth = maxDepth(root.right);
            return 1 + Math.max(leftDepth, rightDepth);
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We visit each node once.</p>
        <p><strong>Space Complexity:</strong> O(h) - where h is the height of the tree, due to the recursion stack. In the worst case (skewed tree), h can be n.</p>
    `
  },
  {
    "question": "Merge k Sorted Lists",
    "description": "You are given an array of k linked-lists, each sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    "hint": "Use a min-heap (priority queue) to keep track of the smallest elements from all lists.",
    "answer": `
        <p><strong>Solution Approach (Min-Heap):</strong></p>
        <p>Create a min-heap and add the head of each non-empty linked list to it. Then, while the heap is not empty, extract the smallest node, add it to the merged list, and add the next node from the extracted node's list to the heap (if it exists).</p>

        <pre><code>function mergeKLists(lists) {
            const minHeap = new MinPriorityQueue((a, b) => a.val - b.val);
            for (const list of lists) {
                if (list) {
                    minHeap.enqueue(list);
                }
            }

            const dummyHead = new ListNode(0);
            let current = dummyHead;

            while (!minHeap.isEmpty()) {
                const smallestNode = minHeap.dequeue();
                current.next = smallestNode;
                current = current.next;
                if (smallestNode.next) {
                    minHeap.enqueue(smallestNode.next);
                }
            }

            return dummyHead.next;
        }

        // Definition for singly-linked list (assuming it's available)
        // function ListNode(val, next) {
        //     this.val = (val===undefined ? 0 : val)
        //     this.next = (next===undefined ? null : next)
        // }

        // Implementation of MinPriorityQueue (as provided before)
        </code></pre>

        <p><strong>Time Complexity:</strong> O(N log k) - where N is the total number of nodes in all k lists, and k is the number of lists. Heap operations take O(log k), and we perform N such operations.</p>
        <p><strong>Space Complexity:</strong> O(k) - for the min-heap to store at most k nodes.</p>
    `
  },
  {
    "question": "Combination Sum",
    "description": "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times.",
    "hint": "Use backtracking (Depth-First Search).",
    "answer": `
        <p><strong>Solution Approach (Backtracking):</strong></p>
        <p>Use a recursive backtracking function. Maintain the current combination and the remaining target. At each step, try including each candidate number. If the sum exceeds the target, backtrack. If the sum equals the target, add the current combination to the result. Since the same number can be used multiple times, the recursive call can start from the same index.</p>

        <pre><code>function combinationSum(candidates, target) {
            const result = [];

            function backtrack(combination, remaining, start) {
                if (remaining === 0) {
                    result.push([...combination]);
                    return;
                }
                if (remaining < 0) {
                    return;
                }

                for (let i = start; i < candidates.length; i++) {
                    combination.push(candidates[i]);
                    backtrack(combination, remaining - candidates[i], i); // Can reuse the same candidate
                    combination.pop();
                }
            }

            backtrack([], target, 0);
            return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(N^(target/min_candidate + 1)) in the worst case, where N is the number of candidates.</p>
        <p><strong>Space Complexity:</strong> O(target/min_candidate) in the worst case, for the recursion stack.</p>
    `
  }
    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});