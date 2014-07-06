'use strict';

App.factory('IRepo', function () {
    return {
        stacks: [
            {
                Course: "JavaScript",
                Cards: [
                    {
                        Question: "What is hoisting?",
                        Answer: "Hoisting is JavaScript's default behavior of moving declarations to the top"
                    },
                    {
                        Question: "Briefly explain what JavaScript Functions.",
                        Answer: "A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when \"something\" invokes it (calls it)."
                    }
                ],
                Url: "#/Study/JavaScript"
            },
            {
                Course: "C#",
                Cards: [],
                Url: "#/Study/CSharp"
            },
            {
                Course: "Angular",
                Cards: [],
                Url: "#/Study/Angular"
            },
            {
                Course: "SQL",
                Cards: [],
                Url: "#/Study/SQL"
            },
            {
                Course: "ASP.Net",
                Cards: [],
                Url: "#/Study/ASPNet"
            },
            {
                Course: "NodeJS",
                Cards: [],
                Url: "#/Study/NodeJS"
            }
        ]
    }
})