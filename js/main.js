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
        addEntry() {
            if (!this.newEntry.title || !this.newEntry.description || !this.newEntry.deadline) {
                alert('Please fill in all fields');
                return;
            }
            if (new Date(this.newEntry.deadline) <= new Date(new Date().setDate(new Date().getDate()))) {
                alert('Invalid deadline date (should be at least tomorrow)');
                return;
            }
            if (this.newEntry.tasks.length > 0) {
                this.newEntry.tasks = this.newEntry.tasks
                    .filter(task => task.trim() !== '')
                    .map(task => ({ name: task, completed: false }));
            }
            this.stages[0].entries.push({ ...this.newEntry });
            this.resetNewEntry();
        },
        resetNewEntry() {
            this.newEntry = {
                title: '',
                description: '',
                deadline: '',
                createdAt: new Date().toLocaleString(),
                lastModified: null,
                tasks: []
            };
        },
    }})