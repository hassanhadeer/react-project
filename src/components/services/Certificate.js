import React from 'react'
import './Certificate.css'
import CertificateImage from '../servicesImages/certificate.png'


export default function Certificate() {
  return (
    <div className="Certificate">
      <div class="row">
        <div class="col-sm-8">
          <img src={CertificateImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">Registrar and registry locks, multi-factor authentication, account-specific access control – these are just some of our industry-leading security features that protect your data and keep your domain name registrations</p>
        </div>
      </div>
    </div>
  )
}
