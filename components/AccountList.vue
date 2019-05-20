<template>
    <div id="account-list" class="wrapper">
        <!--        https://www.templatemonster.com/blog/how-to-add-social-media-icons-website/#title2-->


        <!--        https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself -->
        <div>
            <ul class="social-icons icon-rounded list-unstyled list-inline">

                <!--                <li>-->
                <!--                    <a href="#"><i class=""></i></a>-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                    <a href="#"><i class=""></i></a>-->
                <!--                </li>-->

                <!--                <hr>-->

                <li v-for="account in account_list">
                    <a href="{{account.url}}">
                        <i class="{{account.class}}"></i>
                    </a>
                </li>

                <li>
                    <a href="#"><i class="fas fa-plus text-white"></i></a>
                </li>

            </ul>
        </div>

        <!-- accessing `value and key` present in person object -->
<!--        <li v-for="(value, key) in person" :key="key">      {{key}} : {{ value }}-->
<!--        </li>-->

        <!--        <div class="position-bottom">-->
        <div>
            <!--            <hr>-->
            <ul class="social-icons icon-rounded list-unstyled list-inline">

                <li>
                    <a href="#"><i class="fas fa-cog text-blue"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-info-circle text-blue"></i></a>
                </li>

            </ul>

        </div>

    </div>
</template>

<script>
    import {addNote, deleteNote, toggleFavorite} from '../vuex/actions'

    export default {
        data: function () {
            return {
                user_list: [
                    {id: 1, name: "king"},
                    {id: 2, name: "gowtham"},
                    {id: 3, name: "ooops"},
                ],
                account_list: [
                    {
                        id: 1,
                        title: "Github",
                        url: "#",
                        class: "fab fa-github"
                    },
                    {
                        id: 2,
                        title: "Bitbucket",
                        url: "#",
                        class: "fab fa-bitbucket"
                    },
                    {
                        id: 3,
                        title: "Gitlab",
                        url: "#",
                        class: ""
                    },
                ],
                module: [
                    {
                        info: {
                            title: "",
                            description: "",
                            author: "",
                            ticket: "",
                            docs: ""
                        },
                        config: {

                        },
                        menu: [

                        ],
                        list: [

                        ]
                    },
                    {
                        menu: [

                        ]
                    },
                ]
            }
        },
        vuex: {
            getters: {
                activeNote: state => state.activeNote
            },
            actions: {
                addNote,
                deleteNote,
                toggleFavorite
            }
        }
    }
</script>
