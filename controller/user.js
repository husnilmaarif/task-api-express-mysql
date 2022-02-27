let users = [
  { id: 1, e: "husnil", email: "husnil@gmail.com" },
  { id: 2, e: "isana", email: "isana@gmail.com" },
  { id: 3, e: "fadel", email: "fadel@gmail.com" },
];

module.exports = {
  index: (req, res) => {
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
      });
    } else {
      res.json({
        status: false,
        massage: "data masih kosong / gagal",
      });
    }
  },
  store: (req, res) => {
    users.push(req.body);
    res.send({
      status: true,
      massage: "data pengguna berhasil di-simpan",
      data: users,
      method: req.method,
      url: req.url,
    });
  },
  update: (req, res) => {
    const id = req.params.id;
    users.filter((user) => {
      if (user.id == id) {
        user.id = id;
        user.nama = req.body.nama;
        user.email = req.body.email;

        return user;
      }
    });
    res.json({
      status: true,
      massage: "data pengguna berhasil di-edit",
      data: users,
      method: req.method,
      url: req.url,
    });
  },
  delete: (req, res) => {
    let id = req.params.userId;
    users = users.filter((user) => user.id != id);
    res.send({
      status: true,
      massage: "data pengguna berhasil di-hapus",
      data: users,
      method: req.method,
      url: req.url,
    });
  },
};
