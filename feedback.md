# Project 1 Evaluation

## Deployment:
**3: Excelling**
> Did you successfully deploy your project to github pages? Is the app's functionality the same deployed as it is locally?

## Technical Requirements:
**3: Excelling**
> Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

## Code Quality:
**2: Performing**
> Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code?

## Creativity/Interface:
**3: Excelling**
> Is your user interface easy to use and understand? Does it make sense for the problem you're solving? Does your interface demonstrate creative design?


## Notes

A few DRYness issues, but otherwise very good job.

I've made a few edits to DRY up some of your code. In particular your handleCOLORChange methods were a bit redundant. Instead of having each color get it's own dedicated function, we can make one function expect `any color` to be provided via the `bind` context.

```js
this.inputs.b.on('click', this.handleButtonChange.bind({view: this, code: 'b'}))
this.inputs.g.on('click', this.handleButtonChange.bind({view: this, code: 'g'}))
this.inputs.r.on('click', this.handleButtonChange.bind({view: this, code: 'r'}))
this.inputs.p.on('click', this.handleButtonChange.bind({view: this, code: 'p'}))

//...

handleButtonChange () {
  // this.inputs.sound[0].play()
  this.view.inputs[this.code].fadeOut(100).fadeIn(100)
  this.view.model.clicks += 1
  this.view.winCheck()
  this.view.model.addToUserPattern(this.code)
  // console.log(this.model.userPattern)
  this.view.model.comparePattern()
}
```

The sound button also felt a little weird. Sound is initially turned off, and so a single click enables it, but then subsequent clicks don't turn it back off. Check `handleSound()` in `simonView.js` for a toggle option.


# Things you'd like specific feedback on:

`"how to stop sequence so that if user gets a wrong choice it doesn't fire the simon pattern. right now it finishes the sequence, doesn't break the game but is annoying for the user"`

It took me a few tries before uncovering the weird behavior. What I found was that the game still reads input while the challenge sequence is being played back. There are a few options to solve this, one is to ignore input while the sequence is playing:

Create a new game property, maybe called `input_allowed`. When beginning to play the next sequence, set it `false`. Then have the last `setTimeout` restore `input_allowed` to `true`. Finally inside `handleButtonChange` in simonView, test against `input_allowed` before responding to the click.