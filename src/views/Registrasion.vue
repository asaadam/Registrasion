<template>
  <div>
    <h1>Terima kasih</h1>
    <h2>Pendaftaran telah ditutup</h2>
  
  </div>
    
</template>
<script>
import router from "@/router";
import Joi from "joi";
import { mapActions, mapState, mapGetters } from "vuex";
// const URL = "https://bemfilkom.ub.ac.id/api/postdata.php";
// const URLCHECK = "https://bemfilkom.ub.ac.id/api/getown.php";
const URL = "http://localhost/backend/postdata.php";
const URLCHECK = "http://localhost/backend/658802_getown.php";
export default {
  name:"Registrasion",
  computed: {
    ...mapGetters({
      dataUser: "auth/getUser"
    }),
    ...mapState("auth", ["user", "isLoggedIn"])
  },
  data: () => ({
    daftar: {
      nim: "",
      prodi: "",
      line: "",
      pilihan1: "",
      alasan1: "",
      pilihan2: "",
      alasan2: ""
    },
    status:null,
    selected1: null,
    isRegistered: false,
    test: "hello World",
    loading: false,
    isNimRight: false,
    mentri: [
      { info: "Direktorat Jendral Dalam Negeri" },
      { info: "Direktorat Jendral Luar Negeri" },
      { info: "Direktorat Jendral Kaderisasi" },
      { info: "Direktorat Jendral Pengembangan dan Pemberdayaan Mahasiswa" },
      { info: "Kementerian Inovasi Karya" },
      { info: "Direktorat Jendral Advokasi dan Kebijakan Kampus" },
      { info: "Direktorat Jendral Kesejahteraan Mahasiswa" },
      { info: "Kementerian Kajian dan Aksi Strategis" },
      { info: "Kementerian Sosial Masyarakat" }
    ],
    biro: [
      { info: "Biro Bisnis Dan Kemitraan" },
      { info: "Biro Pengembangan Informasi Dan Teknologi" },
      { info: "Bagian Administrasi Kesekretariatan" },
      { info: "Bagian Keuangan" },
      { info: "Bagian Media Informasi" },
      { info: "Bagian Media Kreatif" }
    ]
  }),
  methods: {
    ...mapActions("auth", ["login", "logout"]),
    checked() {
      console.log("hello");
    },
    register() {
      const nim = this.nim;
      const checkNim = nim.startsWith("17") || nim.startsWith("18");
      if (checkNim) {
        const send = {
          nama: this.dataUser.name,
          email: this.dataUser.email,
          nim: this.nim,
          prodi: this.prodi,
          idline: this.line,
          pilihan1: this.daftar.pilihan1,
          alasan1: this.alasan1,
          pilihan2: this.daftar.pilihan2,
          alasan2: this.alasan2
        };
        this.loading = true;
        console.log(this.loading);
        fetch(URL, {
          method: "POST",
          body: JSON.stringify(send),
          headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*"
          }
        })
          .then(ress => {
            console.log(ress);
            this.loading = false;
            console.log(this.loading);
            router.push("/sukses");
          })
          .catch(err => {
            router.push("/registrasion");
            console.log(err);
            this.loading = false;
          });
      } else {
        this.isNimRight = true;
      }
    },

    async areRegistered() {
      let status;
      const email = {
        email: this.dataUser.email
      };
      await fetch(URLCHECK, {
        method: "POST",
        body: JSON.stringify(email)
      })
        .then(res => {
          if (res.ok) return res.json();
        })
        .then(result => {
          console.log(result);
          this.status=result.value;
          this.isRegistered = result.status;
          if (this.isRegistered) {
            router.push("/sukses");
          }
        });
    }
  },
  beforeMount() {
    this.areRegistered();
  }
};
</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.test {
}
</style>

