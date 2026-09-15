import { defineType, defineField } from 'sanity'

// Unternehmen, Kontakt & Impressum (Singleton).
// Diese Angaben erscheinen im Impressum und in der Datenschutzerklärung.
export default defineType({
  name:  'siteSettings',
  title: 'Unternehmen & Impressum',
  type:  'document',
  groups: [
    { name: 'company', title: 'Unternehmen', default: true },
    { name: 'contact', title: 'Kontakt' },
    { name: 'legal',   title: 'Register & Steuer' },
  ],
  fields: [
    defineField({ name: 'companyName',      title: 'Firmenname', type: 'string', group: 'company' }),
    defineField({ name: 'managingDirector', title: 'Geschäftsführer', type: 'string', group: 'company' }),
    defineField({ name: 'street',           title: 'Straße & Hausnummer', type: 'string', group: 'company' }),
    defineField({ name: 'zipCity',          title: 'PLZ & Ort', type: 'string', group: 'company' }),
    defineField({ name: 'country',          title: 'Land', type: 'string', initialValue: 'Deutschland', group: 'company' }),

    defineField({ name: 'phone', title: 'Telefon', type: 'string', group: 'contact' }),
    defineField({ name: 'email', title: 'E-Mail',  type: 'string', group: 'contact' }),

    defineField({ name: 'registerCourt',  title: 'Registergericht (z.B. Amtsgericht Oldenburg)', type: 'string', group: 'legal' }),
    defineField({ name: 'registerNumber', title: 'Registernummer (z.B. HRB 217894)', type: 'string', group: 'legal' }),
    defineField({ name: 'taxNumber',      title: 'Steuernummer', type: 'string', group: 'legal' }),
    defineField({ name: 'vatId',          title: 'USt-IdNr.', type: 'string', group: 'legal' }),
    defineField({ name: 'responsible',    title: 'Inhaltlich Verantwortlicher (Name, ggf. E-Mail)', type: 'string', group: 'legal' }),
  ],
  preview: { prepare: () => ({ title: 'Unternehmen & Impressum' }) },
})
