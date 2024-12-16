<template>

  <body class="antialiased bg-body text-body font-body bg-gray-900">
    <div class="">

   <dashboardheader/>

      <section class="py-3">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -mx-3">
            <div class="w-full lg:w-3/5 px-3 mb-6 lg:mb-0">
              <div class="mb-6">
                <div class="flex flex-wrap justify-center -mx-3 -mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6">
                    <div class="p-4 bg-gray-800 rounded-xl">
                      <div class="max-w-xxs px-6 md:px-0 md:max-w-none mx-auto">
                        <div class="flex flex-wrap items-center mb-6 -m-2">
                          <div class="w-auto p-2 self-start">
                            <div class="flex w-8 h-8 items-center justify-center bg-gray-600 rounded-xl">
                              <svg width="16" height="16" viewbox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M7.3333 5.99996H9.99996C10.1768 5.99996 10.3463 5.92972 10.4714 5.8047C10.5964 5.67967 10.6666 5.5101 10.6666 5.33329C10.6666 5.15648 10.5964 4.98691 10.4714 4.86189C10.3463 4.73686 10.1768 4.66663 9.99996 4.66663H8.66663V3.99996C8.66663 3.82315 8.59639 3.65358 8.47137 3.52855C8.34634 3.40353 8.17677 3.33329 7.99996 3.33329C7.82315 3.33329 7.65358 3.40353 7.52856 3.52855C7.40353 3.65358 7.3333 3.82315 7.3333 3.99996V4.66663C6.80286 4.66663 6.29416 4.87734 5.91908 5.25241C5.54401 5.62748 5.3333 6.13619 5.3333 6.66663C5.3333 7.19706 5.54401 7.70577 5.91908 8.08084C6.29416 8.45591 6.80286 8.66663 7.3333 8.66663H8.66663C8.84344 8.66663 9.01301 8.73686 9.13803 8.86189C9.26306 8.98691 9.3333 9.15648 9.3333 9.33329C9.3333 9.5101 9.26306 9.67967 9.13803 9.8047C9.01301 9.92972 8.84344 9.99996 8.66663 9.99996H5.99996C5.82315 9.99996 5.65358 10.0702 5.52856 10.1952C5.40353 10.3202 5.3333 10.4898 5.3333 10.6666C5.3333 10.8434 5.40353 11.013 5.52856 11.138C5.65358 11.2631 5.82315 11.3333 5.99996 11.3333H7.3333V12C7.3333 12.1768 7.40353 12.3463 7.52856 12.4714C7.65358 12.5964 7.82315 12.6666 7.99996 12.6666C8.17677 12.6666 8.34634 12.5964 8.47137 12.4714C8.59639 12.3463 8.66663 12.1768 8.66663 12V11.3333C9.19706 11.3333 9.70577 11.1226 10.0808 10.7475C10.4559 10.3724 10.6666 9.86372 10.6666 9.33329C10.6666 8.80286 10.4559 8.29415 10.0808 7.91908C9.70577 7.54401 9.19706 7.33329 8.66663 7.33329H7.3333C7.15649 7.33329 6.98692 7.26305 6.86189 7.13803C6.73687 7.01301 6.66663 6.84344 6.66663 6.66663C6.66663 6.48981 6.73687 6.32025 6.86189 6.19522C6.98692 6.0702 7.15649 5.99996 7.3333 5.99996ZM7.99996 0.666626C6.54957 0.666626 5.13174 1.09672 3.92578 1.90252C2.71982 2.70831 1.77989 3.85362 1.22485 5.19361C0.669803 6.53361 0.524579 8.00809 0.807537 9.43062C1.0905 10.8531 1.78893 12.1598 2.81451 13.1854C3.8401 14.211 5.14677 14.9094 6.5693 15.1924C7.99183 15.4753 9.46632 15.3301 10.8063 14.7751C12.1463 14.22 13.2916 13.2801 14.0974 12.0741C14.9032 10.8682 15.3333 9.45036 15.3333 7.99996C15.3333 6.05504 14.5607 4.18978 13.1854 2.81451C11.8101 1.43924 9.94488 0.666626 7.99996 0.666626ZM7.99996 14C6.81327 14 5.65324 13.6481 4.66654 12.9888C3.67985 12.3295 2.91081 11.3924 2.45669 10.2961C2.00256 9.1997 1.88374 7.9933 2.11525 6.82942C2.34676 5.66553 2.91821 4.59643 3.75732 3.75732C4.59644 2.9182 5.66553 2.34676 6.82942 2.11525C7.99331 1.88374 9.19971 2.00256 10.2961 2.45668C11.3924 2.91081 12.3295 3.67984 12.9888 4.66654C13.6481 5.65323 14 6.81327 14 7.99996C14 9.59126 13.3678 11.1174 12.2426 12.2426C11.1174 13.3678 9.59126 14 7.99996 14Z"
                                  fill="#194BFB"></path>
                              </svg>
                            </div>
                          </div>
                          <div class="w-auto p-2">
                            <h5 class="text-xs leading-tight font-medium text-gray-300">Main account</h5>
                            <h4 class="leading-6 text-gray-100 font-semibold">$16,045.00</h4>
                          </div>
                        </div>
                        <div class="flex items-end -mx-2">
                          <div class="w-1/5 px-2">
                            <div class="group relative h-8 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-16 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-10 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-14 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-16 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6">
                    <div class="p-4 bg-gray-800 rounded-xl">
                      <div class="max-w-xxs px-6 md:px-0 md:max-w-none mx-auto">
                        <div class="flex flex-wrap items-center mb-6 -m-2">
                          <div class="w-auto p-2 self-start">
                            <div class="flex w-8 h-8 items-center justify-center bg-gray-600 rounded-xl">
                              <svg width="14" height="14" viewbox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M5.33338 6.00001H7.00005C7.17686 6.00001 7.34643 5.92977 7.47145 5.80474C7.59647 5.67972 7.66671 5.51015 7.66671 5.33334C7.66671 5.15653 7.59647 4.98696 7.47145 4.86193C7.34643 4.73691 7.17686 4.66667 7.00005 4.66667H6.33338V4.33334C6.33338 4.15653 6.26314 3.98696 6.13812 3.86193C6.01309 3.73691 5.84352 3.66667 5.66671 3.66667C5.4899 3.66667 5.32033 3.73691 5.19531 3.86193C5.07028 3.98696 5.00005 4.15653 5.00005 4.33334V4.70001C4.595 4.78225 4.23495 5.01207 3.98982 5.34485C3.74468 5.67762 3.63194 6.08961 3.67348 6.50084C3.71501 6.91206 3.90787 7.29318 4.2146 7.57021C4.52133 7.84725 4.92006 8.00042 5.33338 8.00001H6.00005C6.08845 8.00001 6.17324 8.03512 6.23575 8.09764C6.29826 8.16015 6.33338 8.24493 6.33338 8.33334C6.33338 8.42174 6.29826 8.50653 6.23575 8.56904C6.17324 8.63155 6.08845 8.66667 6.00005 8.66667H4.33338C4.15657 8.66667 3.987 8.73691 3.86198 8.86193C3.73695 8.98696 3.66671 9.15653 3.66671 9.33334C3.66671 9.51015 3.73695 9.67972 3.86198 9.80474C3.987 9.92977 4.15657 10 4.33338 10H5.00005V10.3333C5.00005 10.5101 5.07028 10.6797 5.19531 10.8047C5.32033 10.9298 5.4899 11 5.66671 11C5.84352 11 6.01309 10.9298 6.13812 10.8047C6.26314 10.6797 6.33338 10.5101 6.33338 10.3333V9.96667C6.73843 9.88442 7.09847 9.6546 7.34361 9.32183C7.58875 8.98905 7.70149 8.57706 7.65995 8.16584C7.61841 7.75461 7.42556 7.37349 7.11882 7.09646C6.81209 6.81943 6.41336 6.66626 6.00005 6.66667H5.33338C5.24497 6.66667 5.16019 6.63155 5.09768 6.56904C5.03516 6.50653 5.00005 6.42174 5.00005 6.33334C5.00005 6.24493 5.03516 6.16015 5.09768 6.09764C5.16019 6.03512 5.24497 6.00001 5.33338 6.00001ZM13 7.00001H11V1C11.0005 0.882532 10.9699 0.767021 10.9114 0.665169C10.8529 0.563317 10.7684 0.478741 10.6667 0.420005C10.5654 0.361493 10.4504 0.330688 10.3334 0.330688C10.2164 0.330688 10.1014 0.361493 10 0.420005L8.00005 1.56667L6.00005 0.420005C5.8987 0.361493 5.78374 0.330688 5.66671 0.330688C5.54969 0.330688 5.43473 0.361493 5.33338 0.420005L3.33338 1.56667L1.33338 0.420005C1.23203 0.361493 1.11707 0.330688 1.00005 0.330688C0.883022 0.330688 0.768059 0.361493 0.666713 0.420005C0.564976 0.478741 0.480567 0.563317 0.422031 0.665169C0.363496 0.767021 0.332913 0.882532 0.333379 1V11.6667C0.333379 12.1971 0.544093 12.7058 0.919166 13.0809C1.29424 13.456 1.80295 13.6667 2.33338 13.6667H11.6667C12.1971 13.6667 12.7059 13.456 13.0809 13.0809C13.456 12.7058 13.6667 12.1971 13.6667 11.6667V7.66667C13.6667 7.48986 13.5965 7.32029 13.4715 7.19527C13.3464 7.07024 13.1769 7.00001 13 7.00001ZM2.33338 12.3333C2.15657 12.3333 1.987 12.2631 1.86197 12.1381C1.73695 12.0131 1.66671 11.8435 1.66671 11.6667V2.15334L3.00005 2.91334C3.10294 2.96708 3.2173 2.99515 3.33338 2.99515C3.44946 2.99515 3.56382 2.96708 3.66671 2.91334L5.66671 1.76667L7.66671 2.91334C7.7696 2.96708 7.88396 2.99515 8.00005 2.99515C8.11613 2.99515 8.23049 2.96708 8.33338 2.91334L9.66671 2.15334V11.6667C9.66852 11.8941 9.7091 12.1196 9.78671 12.3333H2.33338ZM12.3334 11.6667C12.3334 11.8435 12.2631 12.0131 12.1381 12.1381C12.0131 12.2631 11.8435 12.3333 11.6667 12.3333C11.4899 12.3333 11.3203 12.2631 11.1953 12.1381C11.0703 12.0131 11 11.8435 11 11.6667V8.33334H12.3334V11.6667Z"
                                  fill="#194BFB"></path>
                              </svg>
                            </div>
                          </div>
                          <div class="w-auto p-2">
                            <h5 class="text-xs leading-tight font-medium text-gray-300">Taxes</h5>
                            <h4 class="leading-6 text-gray-100 font-semibold">$5,025.00</h4>
                          </div>
                        </div>
                        <div class="flex items-end -mx-2">
                          <div class="w-1/5 px-2">
                            <div class="group relative h-8 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-16 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-10 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-14 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-16 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6">
                    <div class="p-4 bg-gray-800 rounded-xl">
                      <div class="max-w-xxs px-6 md:px-0 md:max-w-none mx-auto">
                        <div class="flex flex-wrap items-center mb-6 -m-2">
                          <div class="w-auto p-2 self-start">
                            <div class="flex w-8 h-8 items-center justify-center bg-gray-600 rounded-xl">
                              <svg width="14" height="12" viewbox="0 0 14 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M13.1467 6C13.4786 5.63491 13.6638 5.16004 13.6667 4.66667C13.6667 4.13623 13.456 3.62753 13.0809 3.25245C12.7058 2.87738 12.1971 2.66667 11.6667 2.66667H8.21337C8.31987 2.36545 8.35266 2.04311 8.30899 1.72662C8.26532 1.41013 8.14646 1.10871 7.96237 0.847589C7.77828 0.586469 7.53432 0.373251 7.2509 0.225785C6.96748 0.0783194 6.65286 0.000897008 6.33337 0H2.33337C1.80294 0 1.29423 0.210714 0.91916 0.585787C0.544088 0.960859 0.333374 1.46957 0.333374 2C0.336314 2.49337 0.521515 2.96824 0.853374 3.33333C0.525404 3.70002 0.344086 4.17471 0.344086 4.66667C0.344086 5.15862 0.525404 5.63332 0.853374 6C0.525404 6.36668 0.344086 6.84138 0.344086 7.33333C0.344086 7.82529 0.525404 8.29998 0.853374 8.66667C0.521515 9.03176 0.336314 9.50663 0.333374 10C0.333374 10.5304 0.544088 11.0391 0.91916 11.4142C1.29423 11.7893 1.80294 12 2.33337 12H11.6667C12.0519 11.9979 12.4283 11.8847 12.7506 11.6739C13.073 11.4631 13.3276 11.1637 13.4839 10.8116C13.6403 10.4596 13.6916 10.0699 13.6318 9.6894C13.5719 9.30889 13.4035 8.95376 13.1467 8.66667C13.4747 8.29998 13.656 7.82529 13.656 7.33333C13.656 6.84138 13.4747 6.36668 13.1467 6ZM6.33337 10.6667H2.33337C2.15656 10.6667 1.98699 10.5964 1.86197 10.4714C1.73695 10.3464 1.66671 10.1768 1.66671 10C1.66671 9.82319 1.73695 9.65362 1.86197 9.52859C1.98699 9.40357 2.15656 9.33333 2.33337 9.33333H6.33337C6.51018 9.33333 6.67975 9.40357 6.80478 9.52859C6.9298 9.65362 7.00004 9.82319 7.00004 10C7.00004 10.1768 6.9298 10.3464 6.80478 10.4714C6.67975 10.5964 6.51018 10.6667 6.33337 10.6667ZM6.33337 8H2.33337C2.15656 8 1.98699 7.92976 1.86197 7.80474C1.73695 7.67971 1.66671 7.51014 1.66671 7.33333C1.66671 7.15652 1.73695 6.98695 1.86197 6.86193C1.98699 6.73691 2.15656 6.66667 2.33337 6.66667H6.33337C6.51018 6.66667 6.67975 6.73691 6.80478 6.86193C6.9298 6.98695 7.00004 7.15652 7.00004 7.33333C7.00004 7.51014 6.9298 7.67971 6.80478 7.80474C6.67975 7.92976 6.51018 8 6.33337 8ZM6.33337 5.33333H2.33337C2.15656 5.33333 1.98699 5.2631 1.86197 5.13807C1.73695 5.01305 1.66671 4.84348 1.66671 4.66667C1.66671 4.48986 1.73695 4.32029 1.86197 4.19526C1.98699 4.07024 2.15656 4 2.33337 4H6.33337C6.51018 4 6.67975 4.07024 6.80478 4.19526C6.9298 4.32029 7.00004 4.48986 7.00004 4.66667C7.00004 4.84348 6.9298 5.01305 6.80478 5.13807C6.67975 5.2631 6.51018 5.33333 6.33337 5.33333ZM6.33337 2.66667H2.33337C2.15656 2.66667 1.98699 2.59643 1.86197 2.4714C1.73695 2.34638 1.66671 2.17681 1.66671 2C1.66671 1.82319 1.73695 1.65362 1.86197 1.5286C1.98699 1.40357 2.15656 1.33333 2.33337 1.33333H6.33337C6.51018 1.33333 6.67975 1.40357 6.80478 1.5286C6.9298 1.65362 7.00004 1.82319 7.00004 2C7.00004 2.17681 6.9298 2.34638 6.80478 2.4714C6.67975 2.59643 6.51018 2.66667 6.33337 2.66667ZM12.1267 10.4733C12.0676 10.5357 11.9962 10.585 11.917 10.6183C11.8378 10.6516 11.7526 10.6681 11.6667 10.6667H8.21337C8.37324 10.2366 8.37324 9.7634 8.21337 9.33333H11.6667C11.8435 9.33333 12.0131 9.40357 12.1381 9.52859C12.2631 9.65362 12.3334 9.82319 12.3334 10C12.3321 10.0887 12.3132 10.1762 12.2777 10.2575C12.2423 10.3388 12.1909 10.4121 12.1267 10.4733ZM12.1267 7.80667C12.0676 7.869 11.9962 7.91837 11.917 7.95165C11.8378 7.98493 11.7526 8.0014 11.6667 8H8.21337C8.37324 7.56993 8.37324 7.09674 8.21337 6.66667H11.6667C11.8435 6.66667 12.0131 6.73691 12.1381 6.86193C12.2631 6.98695 12.3334 7.15652 12.3334 7.33333C12.3321 7.42201 12.3132 7.50955 12.2777 7.59083C12.2423 7.6721 12.1909 7.74548 12.1267 7.80667ZM12.1267 5.14C12.0676 5.20233 11.9962 5.2517 11.917 5.28499C11.8378 5.31827 11.7526 5.33473 11.6667 5.33333H8.21337C8.37324 4.90327 8.37324 4.43007 8.21337 4H11.6667C11.8435 4 12.0131 4.07024 12.1381 4.19526C12.2631 4.32029 12.3334 4.48986 12.3334 4.66667C12.3321 4.75534 12.3132 4.84288 12.2777 4.92416C12.2423 5.00544 12.1909 5.07882 12.1267 5.14Z"
                                  fill="#194BFB"></path>
                              </svg>
                            </div>
                          </div>
                          <div class="w-auto p-2">
                            <h5 class="text-xs leading-tight font-medium text-gray-300">Savings</h5>
                            <h4 class="leading-6 text-gray-100 font-semibold">$2,525.00</h4>
                          </div>
                        </div>
                        <div class="flex items-end -mx-2">
                          <div class="w-1/5 px-2">
                            <div class="group relative h-8 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-16 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-10 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-14 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/5 px-2">
                            <div class="group relative h-16 w-6 bg-gray-600 hover:bg-blue-500 rounded-t-md">
                              <div
                                class="hidden group-hover:block absolute z-10 bottom-full left-full w-40 px-3 py-2 bg-gray-700 rounded-lg">
                                <span class="text-xs text-gray-200">Lorem ipsum 200 dolor, sit amet elit.</span>
                                <div
                                  class="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-100 rounded-full">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-6">
                <div class="pt-6 pb-14 px-6 bg-gray-800 rounded-xl">
                  <div class="flex flex-wrap -mx-3 -mb-4 justify-between items-center">
                    <div class="w-auto px-3 mb-4">
                      <h4 class="text-lg text-gray-200 font-bold tracking-wide">Money Flow</h4>
                    </div>
                    <div class="w-full sm:w-auto px-3 mb-4">
                      <div class="flex flex-wrap items-center">
                        <div class="flex items-center mr-4">
                          <span class="inline-block w-3 h-1 mr-1 bg-blue-500 rounded-full"></span>
                          <span class="text-xs font-semibold text-gray-100">Income</span>
                        </div>
                        <div class="flex items-center mr-6">
                          <span class="inline-block w-3 h-1 mr-1 bg-yellow-500 rounded-full"></span>
                          <span class="text-xs font-semibold text-gray-100">Expenses</span>
                        </div>
                        <div class="w-full sm:w-auto mt-4 sm:mt-0">
                          <div class="relative inline-block max-w-max bg-gray-600 rounded-xl">
                            <select
                              class="relative py-3 pl-2 pr-6 cursor-pointer bg-transparent text-xs text-gray-300 font-semibold appearance-none outline-none"
                              style="z-index: 1;" name="" id="">
                              <option value="">7 Days</option>
                              <option value="">30 Days</option>
                            </select>
                            <span class="absolute top-1/2 right-0 mr-2 transform -translate-y-1/2" style="z-index: 0;">
                              <svg width="10" height="7" viewbox="0 0 10 7" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L5 5.5L9 1.5" stroke="#3D485B" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="chart mt-8 mb-3" data-type="chart-line" style="min-height: 200px;"></div>
                </div>
              </div>
              <div>
                <div class="pt-6 pb-14 px-6 bg-gray-800 rounded-xl">
                  <div class="flex flex-wrap -mx-3 mb-6 justify-between items-center">
                    <div class="w-auto px-3">
                      <h4 class="text-lg text-gray-200 font-bold tracking-wide">Statistics</h4>
                    </div>
                    <div class="w-auto px-3">
                      <a class="inline-flex h-9 px-3 items-center text-xs font-semibold bg-gray-600 hover:bg-gray-700 transition duration-200 rounded-lg"
                        href="#">
                        <span class="mr-2 text-gray-300">View All</span>
                        <svg width="7" height="10" viewbox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 9L5.5 5L1.5 1" stroke="#3D485B" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="px-8 md:px-14 py-10 bg-gray-600 rounded-xl">
                    <div class="flex flex-wrap items-center justify-between -mx-2">
                      <div class="w-full md:w-1/2 px-2 mb-12 md:mb-0">
                        <div class="max-w-xxs pr-12">
                          <div class="flex flex-wrap -mx-2 -mb-3">
                            <div class="w-1/2 px-2 mb-3">
                              <div class="flex items-center">
                                <div class="w-1.5 h-1.5 mr-3 bg-purple-500 rounded-full"></div>
                                <div>
                                  <h5 class="text-sm leading-5 text-gray-300 font-semibold">$725.00</h5>
                                  <span
                                    class="text-xs leading-none font-semibold text-gray-300 opacity-60">Shopping</span>
                                </div>
                              </div>
                            </div>
                            <div class="w-1/2 px-2 mb-3">
                              <div class="flex items-center">
                                <div class="w-1.5 h-1.5 mr-3 bg-green-500 rounded-full"></div>
                                <div>
                                  <h5 class="text-sm leading-5 text-gray-300 font-semibold">$725.00</h5>
                                  <span class="text-xs leading-none font-semibold text-gray-300 opacity-60">Food</span>
                                </div>
                              </div>
                            </div>
                            <div class="w-1/2 px-2 mb-3">
                              <div class="flex items-center">
                                <div class="w-1.5 h-1.5 mr-3 bg-blue-500 rounded-full"></div>
                                <div>
                                  <h5 class="text-sm leading-5 text-gray-300 font-semibold">$2,350.00</h5>
                                  <span class="text-xs leading-none font-semibold text-gray-300 opacity-60">Home</span>
                                </div>
                              </div>
                            </div>
                            <div class="w-1/2 px-2 mb-3">
                              <div class="flex items-center">
                                <div class="w-1.5 h-1.5 mr-3 bg-yellow-500 rounded-full"></div>
                                <div>
                                  <h5 class="text-sm leading-5 text-gray-300 font-semibold">$710.00</h5>
                                  <span
                                    class="text-xs leading-none font-semibold text-gray-300 opacity-60">Others</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2 px-2">
                        <div class="chart px-2" data-type="radial-bar-part" data-variant="four"
                          style="min-height: 120px;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-2/5 px-3">
              <div class="p-6 bg-gray-800 rounded-xl">
                <div class="flex flex-wrap -mx-3 mb-6 justify-between items-center">
                  <div class="w-auto px-3">
                    <h4 class="text-lg text-gray-100 font-semibold">Wallet</h4>
                  </div>
                  <div class="w-auto px-3">
                    <a class="inline-block py-1 text-gray-300 hover:text-gray-400" href="#">
                      <svg width="18" height="4" viewbox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 2C8 2.55228 8.44772 3 9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2Z"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M15 2C15 2.55228 15.4477 3 16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2Z"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="px-3 md:px-14 pb-6 mb-8 border-b border-gray-400">
                  <img class="block mx-auto mb-6" src="~/assets/trizzle-assets/images/card.png" alt="">
                  <div class="mb-6 text-center">
                    <button class="inline-block w-6 h-1 mr-1 bg-blue-500 rounded-full"></button>
                    <button
                      class="inline-block w-2.5 h-1 mr-1 bg-gray-600 hover:w-6 rounded-full transition-all duration-500"></button>
                    <button
                      class="inline-block w-2.5 h-1 mr-1 bg-gray-600 hover:w-6 rounded-full transition-all duration-500"></button>
                  </div>
                  <a class="flex w-full h-12 py-2 px-3 items-center justify-center text-gray-200 font-semibold bg-gray-600 hover:bg-gray-700 transition duration-200 rounded-lg"
                    href="#">
                    <svg width="17" height="14" viewbox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.3334 0.75H2.66669C2.00365 0.75 1.36776 1.01339 0.89892 1.48223C0.430079 1.95107 0.166687 2.58696 0.166687 3.25V10.75C0.166687 11.413 0.430079 12.0489 0.89892 12.5178C1.36776 12.9866 2.00365 13.25 2.66669 13.25H14.3334C14.9964 13.25 15.6323 12.9866 16.1011 12.5178C16.57 12.0489 16.8334 11.413 16.8334 10.75V3.25C16.8334 2.58696 16.57 1.95107 16.1011 1.48223C15.6323 1.01339 14.9964 0.75 14.3334 0.75ZM15.1667 10.75C15.1667 10.971 15.0789 11.183 14.9226 11.3393C14.7663 11.4955 14.5544 11.5833 14.3334 11.5833H2.66669C2.44567 11.5833 2.23371 11.4955 2.07743 11.3393C1.92115 11.183 1.83335 10.971 1.83335 10.75V3.25C1.83335 3.02899 1.92115 2.81702 2.07743 2.66074C2.23371 2.50446 2.44567 2.41667 2.66669 2.41667H14.3334C14.5544 2.41667 14.7663 2.50446 14.9226 2.66074C15.0789 2.81702 15.1667 3.02899 15.1667 3.25V10.75ZM11.8334 5.75C11.3903 5.7531 10.956 5.87389 10.575 6.1C10.1954 5.87477 9.763 5.75405 9.32165 5.7501C8.8803 5.74615 8.44577 5.85912 8.06222 6.07752C7.67867 6.29592 7.35978 6.61197 7.13796 6.99355C6.91613 7.37513 6.79928 7.80863 6.79928 8.25C6.79928 8.69137 6.91613 9.12487 7.13796 9.50645C7.35978 9.88803 7.67867 10.2041 8.06222 10.4225C8.44577 10.6409 8.8803 10.7538 9.32165 10.7499C9.763 10.746 10.1954 10.6252 10.575 10.4C10.9065 10.5967 11.279 10.714 11.6634 10.7429C12.0477 10.7718 12.4336 10.7114 12.7908 10.5664C13.1479 10.4215 13.4667 10.1959 13.7223 9.90736C13.9778 9.6188 14.1632 9.27505 14.2639 8.90298C14.3645 8.5309 14.3778 8.14059 14.3027 7.76253C14.2275 7.38448 14.066 7.02892 13.8307 6.72364C13.5953 6.41836 13.2926 6.17163 12.9461 6.00273C12.5996 5.83383 12.2188 5.74733 11.8334 5.75ZM9.47502 9.08333C9.42788 9.08735 9.38049 9.08735 9.33335 9.08333C9.11234 9.08333 8.90038 8.99554 8.7441 8.83926C8.58782 8.68297 8.50002 8.47101 8.50002 8.25C8.50002 8.02899 8.58782 7.81702 8.7441 7.66074C8.90038 7.50446 9.11234 7.41667 9.33335 7.41667C9.38049 7.41265 9.42788 7.41265 9.47502 7.41667C9.28645 7.93333 9.28645 8.5 9.47502 9.01667V9.08333ZM11.8334 9.08333C11.6685 9.08333 11.5074 9.03446 11.3704 8.94289C11.2333 8.85132 11.1265 8.72117 11.0635 8.5689C11.0004 8.41663 10.9839 8.24908 11.016 8.08742C11.0482 7.92577 11.1276 7.77729 11.2441 7.66074C11.3606 7.5442 11.5091 7.46483 11.6708 7.43268C11.8324 7.40052 12 7.41703 12.1523 7.4801C12.3045 7.54317 12.4347 7.64998 12.5262 7.78702C12.6178 7.92407 12.6667 8.08518 12.6667 8.25C12.6667 8.47101 12.5789 8.68297 12.4226 8.83926C12.2663 8.99554 12.0544 9.08333 11.8334 9.08333Z"
                        fill="#3D485B"></path>
                    </svg>
                    <span class="ml-2">Add new Card</span>
                  </a>
                </div>
                <div>
                  <div class="flex mb-6 items-center justify-between">
                    <h4 class="text-lg text-gray-200 font-semibold">Recent Activity</h4>
                    <a class="inline-block text-sm text-gray-200 hover:text-gray-300 font-medium tracking-wide"
                      href="#">View all</a>
                  </div>
                  <div class="flex mb-6 items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex w-12 h-12 mr-3 items-center justify-center bg-gray-600 rounded-full">
                        <img src="~/assets/trizzle-assets/logos/s-stripe.svg" alt="">
                      </div>
                      <div>
                        <h5 class="text-sm font-semibold text-gray-200">Stripe</h5>
                        <span class="text-xs text-gray-400 font-semibold">Deposit</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <h6 class="text-sm text-gray-300 font-semibold">+$523.10</h6>
                      <span class="text-xs text-gray-400 font-semibold">Today at 7.18 AM</span>
                    </div>
                  </div>
                  <div class="flex mb-6 items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex w-12 h-12 mr-3 items-center justify-center bg-gray-600 rounded-full">
                        <img src="~/assets/trizzle-assets/logos/f-facebook.svg" alt="">
                      </div>
                      <div>
                        <h5 class="text-sm font-semibold text-gray-200">Facebook</h5>
                        <span class="text-xs text-gray-400 font-semibold">Advertising</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <h6 class="text-sm text-gray-300 font-semibold">+$523.10</h6>
                      <span class="text-xs text-gray-400 font-semibold">Today at 7.18 AM</span>
                    </div>
                  </div>
                  <div class="flex mb-6 items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex w-12 h-12 mr-3 items-center justify-center bg-gray-600 rounded-full">
                        <img src="~/assets/trizzle-assets/logos/twitter-icon.svg" alt="">
                      </div>
                      <div>
                        <h5 class="text-sm font-semibold text-gray-200">Twitter</h5>
                        <span class="text-xs text-gray-400 font-semibold">Advertising</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <h6 class="text-sm text-gray-300 font-semibold">-$1,243.00</h6>
                      <span class="text-xs text-gray-400 font-semibold">Yesterday at 10.00 PM</span>
                    </div>
                  </div>
                  <div class="flex mb-6 items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex w-12 h-12 mr-3 items-center justify-center bg-gray-600 rounded-full">
                        <img src="~/assets/trizzle-assets/logos/slack-icon.svg" alt="">
                      </div>
                      <div>
                        <h5 class="text-sm font-semibold text-gray-200">Slack</h5>
                        <span class="text-xs text-gray-400 font-semibold">Payment</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <h6 class="text-sm text-gray-300 font-semibold">-$190.00</h6>
                      <span class="text-xs text-gray-400 font-semibold">Yesterday at 4.00 PM</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex w-12 h-12 mr-3 items-center justify-center bg-gray-600 rounded-full">
                        <img src="~/assets/trizzle-assets/logos/steam-icon.svg" alt="">
                      </div>
                      <div>
                        <h5 class="text-sm font-semibold text-gray-200">Steam</h5>
                        <span class="text-xs text-gray-400 font-semibold">Payment</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <h6 class="text-sm text-gray-300 font-semibold">-$450.00</h6>
                      <span class="text-xs text-gray-400 font-semibold">Yesterday at 4.00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>
</template>

<script>
import Dashboardheader from '~~/components/DasboardComponent/Dashboardheader.vue'
export default {
  components: { Dashboardheader },
}
</script>

<style>

</style>