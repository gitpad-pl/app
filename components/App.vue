<template>
    <div id="app">
        <toolbar></toolbar>
        <account-list></account-list>
        <!--        <board></board>-->
        <notes-list></notes-list>

        <editor></editor>
        <!--        <max-level-tree class="mr"></max-level-tree>-->
        <!--        <collapsing-animation class="mr"></collapsing-animation>-->
        <!--        <empty class="mr"></empty>-->

        <!--                <markdown-editor></markdown-editor>-->
    </div>
</template>

<script>
    import AccountList from "./AccountList.vue";
    // import ProjectList from "./ProjectList.vue";
    // import CategoryList from "./CategoryList.vue";
    import Toolbar from './Toolbar.vue'
    import NotesList from './NotesList.vue'
    import Editor from './Editor.vue'
    import BaseTree from './Base.vue'
    // import MaxLevelTree from './MaxLevel.vue'
    // import CollapsingAnimation from './CollapsingAnimation.vue'
    // import Empty from './Empty.vue'
    // import MarkdownEditor from './MarkdownEditor.vue'
    // import $ from 'jquery'


    export default {
        components: {
            Toolbar,
            AccountList,
            // ProjectList,
            // CategoryList,
            NotesList,
            Editor,
            // BaseTree,
            // MaxLevelTree,
            // CollapsingAnimation,
            // Empty
            // MarkdownEditor
        }
    }
</script>
