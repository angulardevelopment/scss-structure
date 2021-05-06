
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  ngAfterViewInit() {
    const inputs = Array.from(document.querySelectorAll('.color-box > input'))
    const root = document.documentElement
    const range = (document.querySelector('.booth-slider'))

    //as slider range's value changes, do something
    range.addEventListener('input', handleSlider)

    //as the value in the input changes, do something.
    inputs.forEach(input => {
      input.addEventListener('input', handleInputChange)
    })

    function handleInputChange(e) {
      let value = e.target.value  //get the value typed in box
      let inputId = e.target.parentNode.id //get the id of input containing box
      let inputBg = `--bg-${inputId}`  //compose the variable
      root.style.setProperty(inputBg, value)  //set the variable inline
    }

    function handleSlider(e) {
      let value = e.target.value
      root.style.setProperty('--slider', value)
    }


    const root2 = document.documentElement
    const themeBtns = Array.from(document.querySelectorAll('.theme > button'))

    themeBtns.forEach((btn) => {
      btn.addEventListener('click', handleThemeUpdate)
    })

    function handleThemeUpdate(e) {
      console.log(e.target.value)
      switch (e.target.value) {

        case 'dark':
          root2.style.setProperty('--bg', 'black')
          root2.style.setProperty('--bg-text', 'white')
          break
        case 'calm':
          root2.style.setProperty('--bg', '#B3E5FC')
          root2.style.setProperty('--bg-text', '#37474F')
          break
        case 'light':
          root2.style.setProperty('--bg', 'white')
          root2.style.setProperty('--bg-text', 'black')
          break
      }
    }
  }
}
