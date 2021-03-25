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



    methods: {

        addTodo: function() {
            this.a_todo.push({
                title :  this.newTodo,
                status : "todo",

            }),
            this.newTodo = "",
            console.log(this.a_todo);
        },



    },


});
