---
type: method
interface: IRayTraceRenderer
member: CloseRayTraceRender
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - closeraytracerender
  - iraytracerenderer
  - ray
  - trace
  - renderer
  - close
  - render
  - boolean
  - model
  - vb
  - net
  - vba
---

# IRayTraceRenderer.CloseRayTraceRender

Closes both the preview and final render windows.

## Signature

```csharp
System.Boolean CloseRayTraceRender()
```
## Parameters

None.

## Return Value

True if both the preview and final render windows are closed, false if not

## Remarks

When this method is called after calling
IRayTraceRenderer::Invoke FinalRender
or
IRayTraceRenderer::RenderToFile
, then both the preview and final render windows are closed.
To leave the preview render window open, call
IRayTraceRenderer::CloseFinalRenderWindow
instead of calling IRayTraceRender::CloseRayTraceRender.

## Examples

- Render Model (C#) (Render_Model_Example_CSharp.htm)
- Render Model (VB.NET) (Render_Model_Example_VBNET.htm)
- Render Model (VBA) (Render_Model_Example_VB.htm)