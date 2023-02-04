import * as React from "react"

export const Employee = (props) => (
    <svg
        width={41}
        height={41}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#a)" fill="#334155">
            <path
                d="M39.106 34.535a1.562 1.562 0 1 0 0-3.124h-4.297v-4.297a1.562 1.562 0 0 0-3.124 0v4.297h-4.297a1.562 1.562 0 0 0 0 3.124h4.297v4.297a1.562 1.562 0 1 0 3.124 0v-4.297h4.297Z"/>
            <path
                d="M23.83 26.617a14.832 14.832 0 0 0-3.117-1.663 7.952 7.952 0 0 0 2.586-5.246 11.64 11.64 0 0 1 8.195-3.326c2.42 0 4.742.728 6.718 2.106a1.562 1.562 0 1 0 1.787-2.563 14.852 14.852 0 0 0-3.117-1.663 7.949 7.949 0 0 0 2.614-5.895c0-4.394-3.574-7.968-7.968-7.968-4.393 0-7.967 3.574-7.967 7.968 0 2.324 1 4.42 2.594 5.877a14.839 14.839 0 0 0-3.402 1.848c-1.179-2.928-4.049-5-7.395-5-4.393 0-7.967 3.573-7.967 7.967 0 2.318.995 4.407 2.58 5.864-4.238 1.588-7.674 4.999-9.073 9.348a4.642 4.642 0 0 0 .674 4.197 4.64 4.64 0 0 0 3.788 1.926h13.592a1.562 1.562 0 0 0 0-3.125H5.36c-.505 0-.966-.234-1.263-.642a1.548 1.548 0 0 1-.225-1.4c1.544-4.8 6.254-8.153 11.452-8.153 2.42 0 4.742.728 6.718 2.106a1.562 1.562 0 1 0 1.787-2.563Zm7.698-23.093a4.848 4.848 0 0 1 4.843 4.843 4.849 4.849 0 0 1-4.843 4.843 4.849 4.849 0 0 1-4.843-4.843 4.849 4.849 0 0 1 4.843-4.843Zm-16.17 10.692a4.849 4.849 0 0 1 4.844 4.843 4.849 4.849 0 0 1-4.844 4.843 4.848 4.848 0 0 1-4.843-4.843 4.849 4.849 0 0 1 4.843-4.844Z"/>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" transform="translate(.668 .399)" d="M0 0h40v40H0z"/>
            </clipPath>
        </defs>
    </svg>
)

export const LineGraph = (props) => (
    <svg
        width={34}
        height={35}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4.25 4.75v24.083c0 .784.633 1.417 1.417 1.417H29.75v-2.833H7.083V4.75H4.25Z"
            fill="#334155"
        />
        <path
            d="M21.665 21.335c.554.554 1.45.554 2.004 0l7.083-7.083-2.003-2.004-6.082 6.082-3.248-3.248a1.415 1.415 0 0 0-2.004 0l-7.083 7.083 2.003 2.003 6.082-6.081 3.248 3.248Z"
            fill="#334155"
        />
    </svg>
)

export const LocationSvg = (props) => (
    <svg
        width={34}
        height={35}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m17 24.584 1.417-2.834v-7.284c2.438-.634 4.25-2.834 4.25-5.466a5.672 5.672 0 0 0-5.666-5.667A5.672 5.672 0 0 0 11.334 9c0 2.632 1.812 4.832 4.25 5.466v7.284l1.417 2.834ZM14.168 9a2.836 2.836 0 0 1 2.834-2.833A2.836 2.836 0 0 1 19.834 9a2.836 2.836 0 0 1-2.833 2.834A2.836 2.836 0 0 1 14.167 9Z"
            fill="#334155"
        />
        <path
            d="m23.046 15.464-.755 2.732c3.67 1.014 6.043 2.965 6.043 4.97 0 2.681-4.654 5.667-11.333 5.667-6.68 0-11.334-2.986-11.334-5.666 0-2.006 2.373-3.957 6.045-4.973l-.755-2.731c-5.01 1.385-8.123 4.336-8.123 7.704 0 4.765 6.223 8.5 14.167 8.5 7.943 0 14.166-3.735 14.166-8.5 0-3.368-3.112-6.319-8.121-7.703Z"
            fill="#334155"
        />
    </svg>
)



