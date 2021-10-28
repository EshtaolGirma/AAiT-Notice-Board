<template>
  <h3 class="tab-title" style="margin-left: 50px; color: #121c41">
    Add New course Material
  </h3>
  <hr />
  <div>
    <form>
      <div class="form-group">
        <!-- <div class="title field col-6">
                    <label for="username">Course Material Name</label>
                    <input type="text" class="form-control" placeholder="Name">
                </div> -->

        <div class="row field">
          <div class="col">
            <label class="file-category" for="file-category"
              >File Category</label
            >

            <div class="row col categories">
              <div class="col">
                <input type="radio" name="file-type" />
                <label for="file-category">Reference Books</label>
              </div>
              <div class="col">
                <input type="radio" name="file-type" />
                <label for="file-category">lecture</label>
              </div>
              <div class="col">
                <input type="radio" name="file-type" />
                <label for="file-category">Assignments</label>
              </div>

              <div class="col">
                <input type="radio" name="file-type" />
                <label for="file-category">Other Supportive</label>
              </div>
            </div>
          </div>
        </div>

        <div class="row field">
          <div class="col">
            <input
              type="file"
              name="file"
              id="file"
              class="input-file"
              @change="file"
            />
            <label for="file" class="input-file-label">
              <i class="fas fa-cloud-upload-alt"></i>{{ name }}</label
            >
          </div>
        </div>

        <div class="row field">
          <div class="col">
            <button type="button" class="btn btn-success btn-detail-submit">
              Done
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "choose a file",
    };
  },
  methods: {
    file: function (event) {
      this.name = event.target.files[0].name;
    },
  },
};
</script>

<style>
.form-group {
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}
label {
  padding-bottom: 10px;
  padding-left: 8px;
}

.file-category {
  font-weight: 600;
  font-size: 20px;
}

.categories {
  padding-inline: 20px;
}

.field {
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
}

.input-file {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.input-file + label {
  background-color: #1976d2;
  color: white;
  font-weight: 500;
  font-size: 20px;
  border-radius: 30px;
  padding: 10px;
  padding-inline: 20px;
}

.btn-success {
  background: #2e4081;
  border: none;
  z-index: 200;
  font-size: 16px;
  border-radius: 7px;
}
.btn-success:hover {
  background: #121c41;
}
.fa-cloud-upload-alt {
  margin-right: 10px;
}
</style>