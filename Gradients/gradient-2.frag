#i£def GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u mouse; 
uniform float u_time;

void main() {
        vec2 st = gl_FragCoord. xy/abs(u_mouse * 0.7);
        gl_FragColor = vec4 (sin(st.x + u_time),                        // red
                            (st.y - u_time),                            // green
                            abs(exp(sin(-st.x)) / exp (cos (st.y))),    // blue
                            1.0);                                       // alpha
｝
