---
type: method
interface: ISldWorks
member: IGetRayTraceRenderer
returns: RayTraceRenderer
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
  - ISldWorks.GetRayTraceRenderer
keywords:
  - igetraytracerenderer
  - isldworks
  - sld
  - works
  - ray
  - trace
  - renderer
  - type
  - int32
---

# ISldWorks.IGetRayTraceRenderer

Get a ray-trace rendering engine.

## Signature

```csharp
RayTraceRenderer IGetRayTraceRenderer( 
   System.Int32
RendererType
)
```
## Parameters

- `RendererType` (System.Int32): Type of ray-trace rendering engine as defined in swRayTraceRenderType_e

## Return Value

Ray trace renderer

## See Also

- `ISldWorks.GetRayTraceRenderer`