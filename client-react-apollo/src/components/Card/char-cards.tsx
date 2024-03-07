import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

type TProps = {
  image: string
  name: string
  location: string
  species: string
}

export const CharsCard = ({ image, name, location, species }: TProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name} />
      <CardMedia
        component='img'
        height='300'
        width='300'
        image={image}
        loading='lazy'
        alt={name}
        sx={{ objectFit: 'fill' }}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          <strong>Lives in:</strong> {location}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <strong>Species:</strong> {species}
        </Typography>
      </CardContent>
    </Card>
  )
}
