---
type: method
interface: IModelView
member: InitializeShading
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelDoc2.ViewOglShading
keywords:
  - opengl
  - initializeshading
  - imodelview
  - model
  - view
  - initialize
  - shading
  - void
---

# IModelView.InitializeShading

Sets up the model view for OpenGL shading.

## Signature

```csharp
void InitializeShading()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Third-party developers should call this method if they are going to use OpenGL shading and are unsure whether shading has already been used for the current window. This method needs to be called for any window drawn into with OpenGL calls.
This method is provided so third-party applications do not need to use any of the Choos...() functions provided in the OpenGL library. Many of the Choos..() functions, for example ChoosePixelFormat(), can only be called once per window. In the case of ChoosePixelFormat(), a second call to the function is ignored. The effect is harmless if the third-party application makes this call after the SOLIDWORKS Design application has made the call. However, it is dangerous if the third party were to call it first because the SOLIDWORKS Design application may require a more complicated format.
To make OpenGL calls, you must get an OpenGL render context (RC). We keep our render context private so that there are not any problems with corruption of SOLIDWORKS RC by an application. To get a rendering context to make OpenGL calls, you must:
uiModelView_c::InitializeShading()
CClientDC dC(CWnd* parentWindow);
HGLRC hRc = ::wglCreateContext(dC.m_hDC);
::wglMakeCurrent(dC.m_hDC, hRc); (call this before each 'paint' operation)
When you are done using OpenGL for this paint'operation, call:
::wglMakeCurrent(NULL, NULL);
When the DLL shuts down or the
IModelView
object is destroyed (watch for a
DModelViewEvents DestroyNotify2
), your application must do the following:
::wglMakeCurrent(NULL, NULL);
::wglDeleteContext(hRc);

## See Also

- `IModelDoc2.ViewOglShading`