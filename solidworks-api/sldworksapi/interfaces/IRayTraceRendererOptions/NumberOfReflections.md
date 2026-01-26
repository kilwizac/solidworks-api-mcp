---
type: property
interface: IRayTraceRendererOptions
member: NumberOfReflections
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.NumberOfRefractions
keywords:
  - numberofreflections
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - number
  - reflections
  - int32
readonly: null
---

# IRayTraceRendererOptions.NumberOfReflections

Gets or sets the number of reflections in the final render.

## Signature

```csharp
System.Int32 NumberOfReflections {get; set;}
```
## Parameters

None.

## Return Value

0 <= Number of reflections <= 32

## Remarks

This property is only available when
IRayTraceRendererOptions::CustomRenderSettings
is true.
The number of reflections impacts rendering performance, so only use a high number of reflections to correctly see objects in the rendering.

## See Also

- `IRayTraceRendererOptions.NumberOfRefractions`