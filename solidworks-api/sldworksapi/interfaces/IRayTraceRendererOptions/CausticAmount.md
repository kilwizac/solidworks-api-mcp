---
type: property
interface: IRayTraceRendererOptions
member: CausticAmount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRayTraceRendererOptions.CausticQuality
  - IRayTraceRendererOptions.DirectCaustics
keywords:
  - causticamount
  - iraytracerendereroptions
  - ray
  - trace
  - renderer
  - options
  - caustic
  - amount
  - int32
readonly: null
---

# IRayTraceRendererOptions.CausticAmount

Gets or sets the maximum number of photons fired, which controls the amount of visible caustics.

## Signature

```csharp
System.Int32 CausticAmount {get; set;}
```
## Parameters

None.

## Return Value

Maximum number of photons fired

## Remarks

Increasing the amount of photons fired creates sharper and clearer caustics but increases rendering time.

## See Also

- `IRayTraceRendererOptions.CausticQuality`
- `IRayTraceRendererOptions.DirectCaustics`