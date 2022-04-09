import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  //sessionStorage a gömülmüş user varsa getir, varsa içerde hangi sayfa denildiyse oraya git, yoksa login
  return user ? <Outlet /> : <Navigate to="/" />;
};
//  <Outlet />; = Route nin içindeki döndürülecek component, child
export default PrivateRouter;
// Farklılıklar
// localStorage : sekmeler arasında paylaşılır

// sessionStorage : sekmeler arasında paylaşılmaz.

// localStorage : tarayıcı kapatılıp yeniden açıldığında kalır ve yaşar.

// sessionStorage : kalıcı değildir, tarayıcı kapatıldıktan sonra her şey temizlenir

// localStorage : Son kullanma tarihi yok

// sessionStorage : Sayfa oturumu bittiğinde sona erer

// Aynılık
// Aynı kaynakta (etki alanı / bağlantı noktası / protokol) verileri tutar, URL yolu farklı olabilir.
// Veriler String formatında saklanır. Nesneler, sayılar vb. Bir dizeye dönüştürülecektir.