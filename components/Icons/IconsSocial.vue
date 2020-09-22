<template>
    <span :style="{height:h+'px'}">
        <a :href="to" target="_blank">
        <svg v-if="icon=='facebook'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" fill="#ffffff" data-original="#000000" /></g></svg>
        <svg v-if="icon=='behance'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 511.958 511.958" style="enable-background:new 0 0 512 512" xml:space="preserve"><g>
            <g xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g>
                        <path d="M210.624,240.619c10.624-5.344,18.656-11.296,24.16-17.728c9.792-11.584,14.624-26.944,14.624-45.984     c0-18.528-4.832-34.368-14.496-47.648c-16.128-21.632-43.424-32.704-82.016-33.28H0v312.096h142.56     c16.064,0,30.944-1.376,44.704-4.192c13.76-2.848,25.664-8.064,35.744-15.68c8.96-6.624,16.448-14.848,22.4-24.544     c9.408-14.656,14.112-31.264,14.112-49.76c0-17.92-4.128-33.184-12.32-45.728C238.912,255.627,226.752,246.443,210.624,240.619z      M63.072,150.187h68.864c15.136,0,27.616,1.632,37.408,4.864c11.328,4.704,16.992,14.272,16.992,28.864     c0,13.088-4.32,22.24-12.864,27.392c-8.608,5.152-19.776,7.744-33.472,7.744H63.072V150.187z M171.968,348.427     c-7.616,3.68-18.336,5.504-32.064,5.504H63.072v-83.232h77.888c13.568,0.096,24.128,1.888,31.68,5.248     c13.44,6.08,20.128,17.216,20.128,33.504C192.768,328.651,185.856,341.579,171.968,348.427z" fill="#ffffff" data-original="#000000" style=""/>
                        <rect x="327.168" y="110.539" width="135.584" height="38.848" fill="#ffffff" data-original="#000000" style=""/>
                        <path d="M509.856,263.851c-2.816-18.08-9.024-33.984-18.688-47.712c-10.592-15.552-24.032-26.944-40.384-34.144     c-16.288-7.232-34.624-10.848-55.04-10.816c-34.272,0-62.112,10.72-83.648,32c-21.472,21.344-32.224,52.032-32.224,92.032     c0,42.656,11.872,73.472,35.744,92.384c23.776,18.944,51.232,28.384,82.4,28.384c37.728,0,67.072-11.232,88.032-33.632     c13.408-14.144,20.992-28.064,22.656-41.728H446.24c-3.616,6.752-7.808,12.032-12.608,15.872     c-8.704,7.04-20.032,10.56-33.92,10.56c-13.216,0-24.416-2.912-33.76-8.704c-15.424-9.28-23.488-25.536-24.512-48.672h170.464     C512.16,289.739,511.52,274.411,509.856,263.851z M342.976,269.835c2.24-15.008,7.68-26.912,16.32-35.712     c8.64-8.768,20.864-13.184,36.512-13.216c14.432,0,26.496,4.128,36.32,12.416c9.696,8.352,15.168,20.48,16.288,36.512H342.976z" fill="#ffffff" data-original="#000000" style=""/>
                    </g>
                </g>
            </g>
            </g>
        </svg>
        <svg v-if="icon=='instagram'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 511 511.9" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" fill="#ffffff" data-original="#000000" style=""/><path xmlns="http://www.w3.org/2000/svg" d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" fill="#ffffff" data-original="#000000" style=""/><path xmlns="http://www.w3.org/2000/svg" d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" fill="#ffffff" data-original="#000000" style=""/></g></svg>
        <svg v-if="icon=='spotify'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m12 24c6.624 0 12-5.376 12-12s-5.376-12-12-12-12 5.376-12 12 5.376 12 12 12zm4.872-6.344v.001c-.807 0-3.356-2.828-10.52-1.36-.189.049-.436.126-.576.126-.915 0-1.09-1.369-.106-1.578 3.963-.875 8.013-.798 11.467 1.268.824.526.474 1.543-.265 1.543zm1.303-3.173c-.113-.03-.08.069-.597-.203-3.025-1.79-7.533-2.512-11.545-1.423-.232.063-.358.126-.576.126-1.071 0-1.355-1.611-.188-1.94 4.716-1.325 9.775-.552 13.297 1.543.392.232.547.533.547.953-.005.522-.411.944-.938.944zm-13.627-7.485c4.523-1.324 11.368-.906 15.624 1.578 1.091.629.662 2.22-.498 2.22l-.001-.001c-.252 0-.407-.063-.625-.189-3.443-2.056-9.604-2.549-13.59-1.436-.175.048-.393.125-.625.125-.639 0-1.127-.499-1.127-1.142 0-.657.407-1.029.842-1.155z" fill="#ffffff" data-original="#000000" style=""/></g></svg>
        <svg v-if="icon=='twitter'"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
            <g xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z" fill="#ffffff" data-original="#000000" style=""/>
                </g>
            </g>
            </g>
        </svg>
        <svg v-if="icon=='vimeo'"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m20.497 1.505c-3.328-.121-5.576 1.787-6.762 5.694.61-.273 1.203-.395 1.777-.395 1.219 0 1.758.697 1.614 2.082-.072.839-.608 2.059-1.612 3.664-1.009 1.605-1.763 2.409-2.265 2.409-1.522 0-2.437-7.284-2.747-9.273-.431-2.765-1.58-4.058-3.447-3.877-1.714.163-4.705 3.249-7.055 5.341l1.129 1.472c1.075-.762 1.702-1.144 1.881-1.144 1.871 0 2.777 6.367 4.23 11.102.975 2.613 2.144 3.92 3.553 3.92 2.264 0 5.022-2.144 8.29-6.434 3.155-4.107 4.789-7.344 4.894-9.705l.013-.01c.134-3.165-1.021-4.785-3.493-4.846z" fill="#ffffff" data-original="#000000" style=""/></g></svg>
        </a>
    </span>
</template>

<style scoped>

    span{
        margin:10px 30px;
    }

    span a{
        display: inline-block;
        height: 100%;
    }
    svg{
        height: 100%;
        vertical-align: middle;
        line-height: 100%;
        width:35px;
        cursor: pointer;
    }


    svg path, svg rect{
        fill:#fff;
        stroke: #fff;
    }
    span:hover svg path, span:hover svg rect{
        fill:#ff0564;
        stroke: #ff0564;
    }

    span:hover::after{
        content: attr(data-hover);
        position: absolute;
        background-color: #ff0564;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAHO9+yHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkE3QjhFRTMzQUY0MTFFOUI4MDc5MTc2Qzg5MERFQTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkE3QjhFRTQzQUY0MTFFOUI4MDc5MTc2Qzg5MERFQTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQTdCOEVFMTNBRjQxMUU5QjgwNzkxNzZDODkwREVBNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQTdCOEVFMjNBRjQxMUU5QjgwNzkxNzZDODkwREVBNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PimGNDMAAAFDSURBVHjaYvj//38TEDMwgggg+M/EAAGMAAHEABIB80DEf4AAgisAySEUAQUAAgiksBwkC1YBJEyB+BCMA8K8QPwOxnkGxPwgxg8gZgYJAgQQiBPwHwIWwQxC1g/CclAFd+DOgoJHUHf8gbkFhj9AdbCD+CxA2XdALAhVDQcAAQRS+Q7ZUhgG2cEN9TALsgaQBDsQvwXi30AsgGwUDF+HWq6E7g8Q3guVtEaXkIVKHEcW1IYKHkY2ygYquAE5rPyhgjPRAxEEGtA9CBBgIOLJfwToB2JGbCGBHh3OQPwZSeNmIObEpwGGNYD4EZLGC0AsgU8DDIsA8WkkjaA0pIdPAwyD4n4TskZ8ipWB+D6S4rMgm7EpNALi10gKdwMxFzY/uALxVySFS4GYBVsohQPxbySFPfjiAkT0AvEnIM4nEABgDACkEK+5m/Cs8gAAAABJRU5ErkJggg==');
        background-size: auto;
        background-position-x: 95%;
        background-position-y: center;
        background-repeat: no-repeat;
        width: 250px !important;
        padding: 10px 15px;
        transition: all .5s ease-in-out;
        margin-left: -250px;
        margin-top: -62px;
        font-size:14px;
        font-family: Mont;
        color: white;
        font-weight: 700;
        text-transform: uppercase;
    }

    span:hover::before{
        content: "";
        position: absolute;
        margin-top: -23px;
        margin-left: 6px;
        width: 0;
        height: 0;
        border-top: 10px solid #ff0564;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }
</style>
<script>
export default {
    props:{
        icon:{
            type:String,
        },
        h:{
            type:Number,
            default:22
        },
        to:{
            type:String,
            default:'#'
        }
    }
}
</script>
