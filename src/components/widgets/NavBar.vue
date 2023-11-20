<template>
  <section class="p-4">
    <nav class="navbar rounded-full bg-base-100 shadow-lg">
      <div class="navbar-start">
        <div class="dropdown">
          <label :tabindex="0" class="btn btn-circle btn-ghost">
            <v-icon name="hi-menu-alt-2" />
          </label>
          <ul
            :tabindex="0"
            class="menu dropdown-content menu-sm z-[1] mt-3 rounded bg-base-100 p-2 shadow"
          >
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Employees</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <button class="btn btn-ghost text-xl">Emp App</button>
      </div>
      <div class="navbar-end">
        <div class="dropdown dropdown-end dropdown-bottom">
          <button class="btn btn-circle btn-ghost">
            <div class="indicator">
              <v-icon name="co-bell" />
              <span class="badge indicator-item badge-primary badge-xs"></span>
            </div>
          </button>
          <ul
            class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a href="#" class="justify-between">
                Hello World!
                <span class="badge indicator-item badge-primary">New</span>
              </a>
            </li>
            <li>
              <a href="#" class="justify-between">
                You have new message
                <span class="badge indicator-item badge-primary">New</span>
              </a>
            </li>
            <li>
              <a href="#" class="justify-between">
                New Friend Suggestion
                <span class="badge indicator-item badge-primary">New</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown dropdown-end">
          <label :tabindex="0" class="avatar btn btn-circle btn-ghost">
            <div class="w-10 rounded-full">
              <img
                src="../../assets/sample/img/person.webp"
                alt="user's photo"
              /></div
          ></label>
          <ul
            :tabindex="0"
            class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>
