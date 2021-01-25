import { Grid } from 'semantic-ui-react';

export default function ItemList({ list }) {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        {list.map((item) => (
          <Grid.Column key={item.id}>
            <img src={item.image_link} alt={item.name} />
          </Grid.Column>
        ))}

      </Grid.Row>
    </Grid>
  );
}
