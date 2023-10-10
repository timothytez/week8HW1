// # An infinite number of shelves are arranged one above the other in a staggered fashion.
// # The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

// #                  ┌────────┐
// #                  │-6------│
// #                  └────────┘
// # ┌────────┐       
// # │------5-│        
// # └────────┘  ┌─────► OK!
// #             │    ┌────────┐
// #             │    │-4------│
// #             │    └────────┘
// # ┌────────┐  │
// # │------3-│  │     
// # BANG!────┘  ├─────► OK! 
// #   ▲  |\_/|  │    ┌────────┐
// #   │ ("^-^)  │    │-2------│
// #   │ )   (   │    └────────┘
// # ┌─┴─┴───┴┬──┘
// # │------1-│
// # └────────┘
// # Inputs
// # Start and finish shelf numbers (always positive integers, finish no smaller than start)

// # Task
// # Find the minimum number of jumps to go from start to finish

// # Example
// # Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
// # link to cat photo if you dont want to download it : https://i.ibb.co/BymvZtL/Inspirers.jpg


function jump(start, finish) {
    let count = 0
    while(finish > start){
        if(start + 3 <= finish){
            count += 1
            start += 3
            
        } else if (start +1 <= finish){
            count += 1
            start +=1
            
        }
        
    }
    return count
}

console.log(jump(2,10))










