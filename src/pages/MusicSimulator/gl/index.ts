import { InputHandler } from "../../../common/input";
import { Camera } from "./camera";
import { GLContext } from "./context";
import { Program, ShaderType } from "./program";
import default_frag from "./shaders/default.frag.glsl?raw";
import default_vert from "./shaders/default.vert.glsl?raw";
import batch_frag from "./shaders/batch.frag.glsl?raw";
import batch_vert from "./shaders/batch.vert.glsl?raw";

export class WebGLApp extends GLContext {
  gl: WebGL2RenderingContext;
  input_handler: InputHandler;
  camera: Camera;

  constructor(canvas: HTMLCanvasElement) {
    super();

    this.gl = WebGLApp.gl;
    this.input_handler = new InputHandler(canvas);
    this.camera = new Camera(canvas.width, canvas.height);

    const resize_canvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      this.gl.viewport(0, 0, canvas.width, canvas.height);
      this.camera.width = canvas.width;
      this.camera.height = canvas.height;
    };
    resize_canvas();
    window.addEventListener("resize", resize_canvas);

    GLContext.add_program(new Program("default", [
      {
        type: ShaderType.FRAGMENT,
        source: default_frag,
      },
      {
        type: ShaderType.VERTEX,
        source: default_vert,
      },
    ]));
    GLContext.add_program(new Program("batch", [
      {
        type: ShaderType.FRAGMENT,
        source: batch_frag,
      },
      {
        type: ShaderType.VERTEX,
        source: batch_vert,
      }
    ]));
  }

  render(dt: number) {
    this.gl.clearColor(30 / 255, 30 / 255, 30 / 255, 255);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.camera.update(this.input_handler, dt);

    for (const obj of GLContext.objects) {
      obj.render(this.camera);
    }
  }
}
