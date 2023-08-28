import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appTextWithTooltip]',
})
export class TextWithTooltipDirective implements OnInit {
  @Input() text: string;
  @Input() tooltipText: string;

  public constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  public ngOnInit(): void {
    const text = this.text.split(this.tooltipText);
    const span = this.renderer.createElement('span');
    this.renderer.setProperty(span, 'innerHTML', text[0]);
    this.renderer.appendChild(this.elementRef.nativeElement, span);
  }
}
