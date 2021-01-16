import React from 'react';
import { Map } from './Map';
import { QueryForm } from './QueryForm';
import {
  Section,
  GridColumn,
  H3,
  H3Container,
  H4,
  Span,
  DirectContact,
  PDirectContact,
  DataDirectContact,
  IData,
  DataDirectContactRow,
  FollowUs,
  ISocialMedia,
  ASocialMedia,
} from './styles';

export const ContactSection = () => {
  return (
    <Section>
      <GridColumn>
        <H3Container>
          <H3>Contacto Directo</H3>
          <Span></Span>
        </H3Container>
        <DirectContact>
          <PDirectContact>
            Para mayor información llamar por teléfono y coordinar reunión
            previa cita.
          </PDirectContact>
          <DataDirectContact>
            <DataDirectContactRow>
              <IData className='icon-location_on'></IData>Shubert N° 890
            </DataDirectContactRow>
            <DataDirectContactRow>
              <IData className='icon-phone'></IData>+51 920600942 <br />
              +51 944200630
            </DataDirectContactRow>
            <DataDirectContactRow>
              <IData className='icon-mail-envelope-closed'></IData>
              contacto@hagalover.com
            </DataDirectContactRow>
          </DataDirectContact>
        </DirectContact>
        <div>
          <H4>Siguenos</H4>
          <FollowUs>
            <ASocialMedia href=''>
              <ISocialMedia className='icon-facebook'></ISocialMedia>
            </ASocialMedia>
            <ASocialMedia href=''>
              <ISocialMedia className='icon-twitter'></ISocialMedia>
            </ASocialMedia>
            <ASocialMedia href=''>
              <ISocialMedia className='icon-linkedin2'></ISocialMedia>
            </ASocialMedia>
          </FollowUs>
        </div>
      </GridColumn>
      <GridColumn>
        <H3Container>
          <H3>Escríbenos</H3>
          <Span></Span>
        </H3Container>
        <QueryForm/>
      </GridColumn>
      <GridColumn>
        <H3Container>
          <H3>Ubícanos</H3>
          <Span></Span>
        </H3Container>

        <Map/>
      </GridColumn>
    </Section>
  );
};
