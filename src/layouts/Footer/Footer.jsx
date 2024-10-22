import './Footer.css'

function Footer() {
    return ( 
        <footer className="footer">
      <div className="footer-content mt-2">
        <div className="footer-section">
          <h4>Phone</h4>
          <p className='bi bi-telephone-fill'>&nbsp;095-879-0271</p>
        </div>
        <div className="footer-section">
          <h4>Email</h4>
          <p className='bi bi-envelope-open-fill'>&nbsp;pasut.fak@spumail.net</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <div className="socials" style={{marginLeft: '11px'}}>
          <a href="https://www.facebook.com/profile.php?id=100081821505955&locale=th_TH"><img src="https://img5.pic.in.th/file/secure-sv1/fbf0935bb1a9472935.png" alt="Facebook" /></a>
          <a href="https://www.instagram.com/kenpasut/profilecard/?igsh=MWg5aGc1MTV6Y3FudA=="><img src="https://img2.pic.in.th/pic/ig20060512644bc49b.png" alt="Instagram" /></a>
          <a href="https://line.me/ti/p/aNfqHJGVon"><img src="https://img5.pic.in.th/file/secure-sv1/LINE_logo.svg5db906bdf2adf6dc.png" alt="Line" /></a>
          </div>
        </div>
      </div>
        <div>
          <h2 className='text-center mt-4'>
            <span className='badge bg-dark'>SPU</span>
            &nbsp;-&nbsp;
            <span className='badge bg-dark'>SIT</span>
            &nbsp;-&nbsp;
            <span className='badge bg-dark'>CSI</span>
          </h2>
        </div>
    </footer>
     )
}

export default Footer