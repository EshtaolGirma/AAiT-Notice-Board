<template>
  <div>
    <h3 class="tab-title" style="margin-left: 50px; color: #121c41">
      Courses Materials
    </h3>
    <div>
      <table class="table table-hover course-table">
        <!-- Reference books part -->
        <thead>
          <tr>
            <th>Reference Books</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Applied Math II</td>
            <td><i class="fas fa-download"></i></td>
          </tr>

          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>
          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>
          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>
          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>
        </tbody>
        <!-- End of Reference books part -->
        <!-- Slides part -->
        <thead>
          <tr>
            <th>Lecture Note Slides</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>

          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>
          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>
        </tbody>
        <!-- End of Slides -->
        <!-- Assignments part -->
        <thead>
          <tr>
            <th>Assignments</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>

          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>
          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>
        </tbody>
        <!-- End of assignments -->

        <!-- Other Material -->
        <thead>
          <tr>
            <th>Other Supportive Material</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>

          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>
          <tr>
            <td>Applied Math I</td>
            <td><i class="fas fa-download"></i></td>
          </tr>
        </tbody>
        <!-- End of Other Material -->
      </table>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      course: Object,
    },
    data() {
     return {

     };
    },
    mounted() { 
      fetch('')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err.message))
    },
};
</script>

<style scoped>
.table {
  width: 90%;
  margin: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}
</style>
