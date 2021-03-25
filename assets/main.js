var app = new Vue({
    el: '#root',
    data: {
        a_todo : [
            {
                title : "Fare la spesa",
                status : "todo",
            },

            {
                title : "Lavare i denti",
                status : "todo",
            },

            {
                title : "Andare in palestra",
                status : "todo",
            },

            {
                title : "Studiare haskell",
                status : "todo",
            }
        ],
        newTodo : "",

    },

    mounted: function () {
        this.$nextTick(function () {

        })
    },


    methods: {
        addTodo: function() {
            this.a_todo.unshift({

                title :  this.newTodo.charAt(0).toUpperCase() + this.newTodo.slice(1),
                status : "todo",
            }),
            // Clear input
            this.newTodo = ""
        },

        done: function(i) {
            this.a_todo[i].status = "done";
            console.log(this.a_todo[i].status);
        },
    },
});
