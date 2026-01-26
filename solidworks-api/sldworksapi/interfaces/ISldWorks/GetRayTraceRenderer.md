---
type: method
interface: ISldWorks
member: GetRayTraceRenderer
returns: System.Object
parameters:
  -
    name: RendererType
    type: System.Int32
    description: Type of ray-trace rendering engine as defined in swRayTraceRenderType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.IGetRayTraceRenderer
keywords:
  - photoview
  - 360
  - getraytracerenderer
  - isldworks
  - sld
  - works
  - ray
  - trace
  - renderer
  - type
  - int32
  - object
  - render
  - model
  - vb
  - net
  - vba
---

# ISldWorks.GetRayTraceRenderer

Get a ray-trace rendering engine.

## Signature

```csharp
System.Object GetRayTraceRenderer( 
   System.Int32
RendererType
)
```
## Parameters

- `RendererType` (System.Int32): Type of ray-trace rendering engine as defined in swRayTraceRenderType_e

## Return Value

Ray trace renderer

## Examples

- Render Model (C#) (Render_Model_Example_CSharp.htm)
- Render Model (VB.NET) (Render_Model_Example_VBNET.htm)
- Render Model (VBA) (Render_Model_Example_VB.htm)

## See Also

- `ISldWorks.IGetRayTraceRenderer`