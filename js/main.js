let app = new Vue({
    el: '#app',
    data() {
        return {
            newEntry: {
                title: '',
                description: '',
                deadline: '',
                createdAt: new Date().toLocaleString(),
                lastModified: null,
                reason: null,
                overdue: false,
                tasks: [],
            },
            stages: [
                { name: 'To Do', entries: [] }, //определение столбцов
                { name: 'In Progress', entries: [] },
                { name: 'Testing', entries: [] },
                { name: 'Completed', entries: [] }
            ],
            editedEntry: null,
            editedEntryIndex: null,
            editedStageIndex: null,
            returnHistory: {},
            newTaskItem: [],
        }
    },
    methods: {

    }});