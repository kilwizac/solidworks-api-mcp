---
type: property
interface: IRayTraceRendererOptions
member: NumberOfRefractions
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.NumberOfReflections
keywords:
  - numberofrefractions
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - number
  - refractions
  - int32
readonly: null
---

# IRayTraceRendererOptions.NumberOfRefractions

Gets or sets the number of refractions in the final render.

## Signature

```csharp
System.Int32 NumberOfRefractions {get; set;}
```
## Parameters

None.

## Return Value

0 <= Number of refractions <= 32

## Remarks

This property is only available when
IRayTraceRendererOptions::CustomRenderSettings
is true.
The number of refractions impacts rendering performance, so only use a high number of refractions to correctly see objects in the rendering.

## See Also

- `IRayTraceRendererOptions.NumberOfReflections`