import { Component, EventEmitter, Input, Output, signal, } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  standalone: true,
  imports: [],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.scss'
})
export class ButtonMenuComponent {
  public text = signal("")
  @Input() set descriptionButton(value: string) { this.text.set(value) }
  @Input() public selected = false;
  @Output() click = new EventEmitter<void>()

  clickButton() {
    this.click.emit
  }

}
