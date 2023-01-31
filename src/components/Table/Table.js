import { Table, Cell, Column, HeaderCell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
const dogBreedsTable = [
  {
    breed: 'Labrador',
    breedType: 'Purebred',
    origin: 'Canada,USA',
    popularity: '1',
    temperament: ['Cheerful', 'Gentle', 'Friendly', 'Intelligent'],
    hypoallergenic: 'No',
    intelligence: 7,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    breed: 'GermanShepard',
    breedType: 'Purebred',
    origin: 'Germany',
    popularity: '2',
    temperament: ['Corageous', 'Intelligent', 'Loyal', 'Watchful'],
    hypoallergenic: 'No',
    intelligence: 3,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    breed: 'Golden Retriever',
    breedType: 'Purebred',
    origin: 'United Kingdom',
    popularity: '3',
    temperament: ['Intelligent', 'Kind', 'Friendly', 'Confident'],
    hypoallergenic: 'No',
    intelligence: 4,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    breed: 'French Bulldog',
    breedType: 'Purebred',
    origin: 'France, UK',
    popularity: '4',
    temperament: ['Playful', 'Sociable', 'Friendly', 'Lively', 'Patient'],
    hypoallergenic: 'No',
    intelligence: 58,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    breed: 'Bulldog',
    breedType: 'Purebred',
    origin: 'United Kingdom',
    popularity: '5',
    temperament: ['Friendly', 'Docile', 'Willful', 'Gregarious'],
    hypoallergenic: 'No',
    intelligence: 77,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    breed: 'Beagle',
    breedType: 'Purebred',
    origin: 'United Kingdom',
    popularity: '6',
    temperament: ['Gentle', 'Intelligent', 'Even Tempered', 'Determined'],
    hypoallergenic: 'No',
    intelligence: 72,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    breed: 'Poodle',
    breedType: 'Purebred',
    origin: 'Germany, France',
    popularity: '7',
    temperament: ['Intelligent', 'Faithful', 'Trainable', 'Instinctual'],
    hypoallergenic: 'Yes',
    intelligence: 2,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    breed: 'Rottweiler',
    breedType: 'Purebred',
    origin: 'Germany',
    popularity: '8',
    temperament: ['Intelligent', 'Corageous', 'Fearless', 'Confident'],
    hypoallergenic: 'No',
    intelligence: 9,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    breed: 'German',
    breedType: 'Purebred',
    origin: 'Germany',
    popularity: '9',
    temperament: ['Intelligent', 'Trainable', 'Boisterous', 'Cooperative'],
    hypoallergenic: 'No',
    intelligence: 9,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    breed: 'Yorkshire',
    breedType: 'Purebred',
    origin: 'United Kingdom',
    popularity: '10',
    temperament: ['Independent', 'Intelligent', 'Corageous', 'Confident'],
    hypoallergenic: 'Yes',
    intelligence: 27,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    breed: 'Boxer',
    breedType: 'Purebred',
    origin: 'Germany',
    popularity: '11',
    temperament: ['Playful', 'Friendly', 'Devoted', 'Loyal'],
    hypoallergenic: 'No',
    intelligence: 48,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
];

export default function DogsTable() {
  return (
    <div>
      <h1>Dogs!</h1>
      <Table data={dogBreedsTable}>
        <Column width={200} fixed resizable>
          <HeaderCell>Breed</HeaderCell>
          <Cell dataKey="breed" />
        </Column>

        <Column width={180} fixed resizable>
          <HeaderCell>Breed Type</HeaderCell>
          <Cell dataKey="breedType" />
        </Column>

        <Column width={180} fixed resizable>
          <HeaderCell>Origin</HeaderCell>
          <Cell dataKey="origin" />
        </Column>

        <Column width={170} fixed resizable>
          <HeaderCell>Popularity</HeaderCell>
          <Cell dataKey="Popularity" />
        </Column>

        <Column width={160} fixed resizable>
          <HeaderCell>Temperament</HeaderCell>
          <Cell dataKey="temperament" />
        </Column>

        <Column width={150} fixed resizable>
          <HeaderCell>Hypoallergenic</HeaderCell>
          <Cell dataKey="hypoallergenic" />
        </Column>

        <Column minWidth={100} flexGrow={2}>
          <HeaderCell>Intelligence</HeaderCell>
          <Cell dataKey="intelligence" />
        </Column>
      </Table>
    </div>
  );
}
