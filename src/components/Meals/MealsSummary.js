import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>On Sale this weekend</h2>
      {/* <h2>All T-Shirts</h2> */}
      <p>Read More</p>
      <p>
        A T-shirt (also spelled tee shirt), or tee, is a style of fabric shirt
        named after the T shape of its body and sleeves. Traditionally, it has
        short sleeves and a round neckline, known as a crew neck, which lacks a
        collar. T-shirts are generally made of a stretchy, light, and
        inexpensive fabric and are easy to clean.
      </p>
    </section>
  )
}

export default MealsSummary
