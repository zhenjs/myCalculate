    function Stack() {
            this.dataStore = [];
            this.top = 0;
        }
        Stack.prototype.push = function(data) {
            this.dataStore[this.top++] = data;
        }
        Stack.prototype.pop = function() {
            return this.dataStore[--this.top];
        }
        Stack.prototype.peek = function() {
            return this.dataStore(this.top - 1)
        }
        Stack.prototype.clear = function() {
            this.top = 0;
        }
        Stack.prototype.length = function() {
            return this.top;
        };

        function mulbase(num, base) {
            var s = new Stack();
            while(num) {
                s.push(num % base);
                num = Math.floor(num/base);
            }
            var converted = "";
            while(s.length()) {
                converted = converted + s.pop();
            }
            return converted
        }

        function Queue() {
            this.dataStore = [];
            this.dataSize = 0;

        }
        Queue.prototype = {
            length: function() {
                return this.dataSize;
            },
            enqueue: function(element) {
                this.dataStore[this.dataSize++] = element;
            },
            dequeue: function() {
                this.dataStore.unshift();
                if(this.dataSize > 0) {
                    this.dataSize = this.dataSize - 1;
                }
            },
            toString: function() {
                var str = "";
                for(var i = 0; i < this.length(); i++) {
                    str += this.dataStore[i] + "\n";
                }
                console.log(str);
            },
            empty: function() {
                if(this.length()) {
                    return false;
                }
                return true;
            }
        }
        function Node(node) {
            this.element = node;
            this.next = null;
        }
        function LinkedList() {
            this.head = new Node("head");
            this.head.next = this.head
        }
        LinkedList.prototype = {
            find: function(item) {
                var current = this.head;
                while(current) {
                    if(current.element === item) {
                        return current
                    }
                    current = current.next
                }
            },
            insert: function(newElement, item) {
                var newNode = new Node(newElement);
                var current = this.find(item);
                newNode.next = current.next;
                current.next = newNode
            },
            findPrevious: function(item) {
                var current = this.head;
                while(current) {
                    if(current.next.element === item) {
                        return current;
                    }
                    current = current.next
                }
            },
            remove: function(item) {
                var pre = this.findPrevious(item);
                pre.next = pre.next.next;
            }
        }


    
        function Dictionary() {
            this.dataStore = new Array();
        }
        Dictionary.prototype = {
            add: function(key, value) {
                this.dataStore[key] = value
            },
            remove: function(key) {
                delete this.dataStore[key]
            },
            showAll: function() {
                for(var key in this.dataStore) {
                    console.log(key + ':' +  this.dataStore[key])
                }
            }
        }

        function hashTable() {
            this.table = new Array(10);
            this.buildChains();
        }
        hashTable.prototype = {
            simpleHash: function(key) {
   //             var H = 37;
     //           var total = 0;
       //         for(var i = 0; i < data.length; i++) {
         //           total += total * H + data.charCodeAt(i)
           //     }
                return key % this.table.length;
            },
            put: function(key, data) {
                var hash = this.simpleHash(data),
                    index = 0;
                while(this.table[hash][index + 1]) {
                    index = index + 2
                }
                this.table[hash][index] = key;
                this.table[hash][index + 1] = data;
            },
            get: function(key) {
                var hash = this.simpleHash(key),
                    index = 0;
                while(this.table[hash][index] !== key) {
                    index = index + 2;
                }
                return this.table[hash][index + 1];
            },
            showDistro: function() {
                for(var i = 0; i < this.table.length; i++) {
                    if(this.table[i]) {
                        console.log(this.table[i])
                    }
                }
            },
            buildChains() {
                for(var i = 0; i < this.table.length; i++) {
                    this.table[i] = new Array();
                }
            }
            
        }
        function set() {
            this.dataStore = new Array()
        }
        set.prototype = {
            add: function(data) {
                if(this.dataStore.indexOf(data) !== -1) {
                    this.dataStore.push(data)
                    return true
                }
                return false
            },
            remove: function(data) {
                var pos = this.dataStore.indexOf(data);
                if(pos !== -1) {
                    this.dataStore.splice(pos, 1);
                    return true
                }
                return false
            },
            show: function() {
                for(var i = 0; i < this.dataStore.length; i++) {
                    console.log(this.dataStore(i))
                }
            }
        }
        function Graph(v) {
            this.vertices = v;
            this.edge = 0;
            this.adj = new Array();
            this.marked = [];
            this.edgeTo = [];
            for(var i = 0; i < this.vertices; i++) {
                this.adj[i] = new Array();
                this.marked[i] = false;
            };
            
        }
        Graph.prototype = {
            addEdge: function(v, w) {
                this.adj[v].push(w);
                this.adj[w].push(v);
                this.edge = this.edge + 1;
            },
            showGraph: function() {
                for(var i = 0; i < this.vertices; i++) {
                    console.log(i + ':' + this.adj[i].toString())
                }
            },
            dfs: function(v) {
                if(!this.marked[v]) {
                    console.log(v)
                    this.marked[v] = !this.marked[v];
                }
                for(var i = 0; i < this.adj[v].length; i++) {
                    if(!this.marked[this.adj[v][i]]) {
                        this.dfs(this.adj[v][i]);
                    }
                }
            },
            bfs: function(v) {
                var queue = new Array();
                queue.push(v);
                this.marked[v] = true
                while(queue.length > 0) {
                    var temp = queue.shift()
                    console.log(temp)
                    for(var i = 0; i < this.adj[temp].length; i++) {
                        if(!this.marked[this.adj[temp][i]]) {
                            queue.push(this.adj[temp][i])
                            this.marked[this.adj[temp][i]] = true;
                            this.edgeTo[this.adj[temp][i]] = temp;
                        }
                    }
                }
            },
            pathTo: function(v) {
                var path = [];
                for(var i = v; i != 0; i = this.edgeTo[i]) {
                    path.push(i)
                }
                path.push(0);
                return path;
            }
        }


        function lcs(s1, s2) {
            var max = 0;
            var index = 0;
            for(var i = 0; i < s1.length; i++) {
                for(var j = 0; j < s2.length; j++) {
                    if(s1[i] === s2[j]) {
                        key = 0
                        var pos = 0
                        while(s1[i + pos] === s2[j + pos] && j + pos < s2.length) {
                            key = key + 1;
                            pos = pos + 1;
                        }
                        if(max < key) {
                            max = key;
                            index = j;
                        }
                    }
                }
            }
            console.log(index, max)
        }

        function lcs(s1, s2) {
            var max = 0;
            var index = 0;
            var arr = new Array(s1.length);
            for(var i = 0; i < s1.length; i++) {
                arr[i] = new Array(s2.length)
                for(var j = 0; j < s2.length; j++) {
                    arr[i][j] = 0;
                }
            }
            for(var i = 0; i < s1.length; i++) {
                for(var j = 0; j < s2.length; j++) {
                    if(s1[i] === s2[j]) {
                        if(i === 0 || j === 0 ) {
                            arr[i][j] = 1;
                        } else {
                            arr[i][j] = arr[i - 1][j - 1] + 1;
                        }
                        
                    }
                    if(max < arr[i][j]) {
                        max = arr[i][j];
                        index = j - max + 1
                    }
                }
            }
            console.log(max, index)

        }
        function max(a, b) {
            return a > b ? a : b
        }
        function knapsack(capacity, value, size, n) {
            if(n === 0 || capacity === 0) {
                return 0;
            }
            if(size[n - 1] > capacity) {
                return knapsack(capacity, value, size, n - 1);
            } else {
                return max(value[n - 1] + knapsack(capacity - size[n - 1], value, size, n - 1), knapsack(capacity, value, size, n -1))
            }
        }

        function dknapsack(capacity, value, size, n) {
            var arr = [];
            for(var i = 0; i < n + 1; i++) {
                arr[i] = [];
            }
            for(var i = 0; i < n + 1; i++) {
                for(var j = 0; j < capacity + 1; j++) {
                    if(i === 0 || j === 0) {
                        arr[i][j] = 0;
                    } else if(size[i - 1] <= j) {
                        arr[i][j] = max(value[i - 1] + arr[i - 1][j - size[i - 1]], arr[i - 1][j])
                    }else {
                        arr[i][j] = arr[i - 1][j]
                    }
                }
            }
            return arr[n][capacity];
        }
       var line = "300 380"
       line = line.split(' ');
    var m = parseInt(line[0]);
    var n = parseInt(line[1]);
    var str = "";
    for(var i = m; i <= n; i++) {
        var temp = 0;
        i = i.toString();
    	for(var j = 0; j < i.length; j++) {
        	temp += Math.pow(i[j], 3);
        }
        if(i == temp) {
        	str  = str + ' ' + i;
        }
    }
    if(str === "") {
    	console.log("no")
    } else {
    	console.log(str)
    }