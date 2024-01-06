import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScriptLoaderService {
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = false;
    this.renderer.appendChild(this.document.body, script);
  }

  public removeScript(src: string): void {
    const scripts: HTMLCollectionOf<HTMLScriptElement> =
      this.document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src.includes(src)) {
        this.renderer.removeChild(this.document.body, scripts[i]);
      }
    }
  }
}
