import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <img />
              <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
            </div>
            <div className='text-center p-4'>
        © 2022 Metabnb
      </div>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Community</h6>
              <p>
                <a href='#!' className='text-reset'>
                  NFT
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tokens
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Landlords
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Discord
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Places</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Castle
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Farms
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Beach
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Learn more
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About us</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Road map
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Creators
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Career
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact us
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}