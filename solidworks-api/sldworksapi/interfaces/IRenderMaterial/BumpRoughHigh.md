---
type: property
interface: IRenderMaterial
member: BumpRoughHigh
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - bumproughhigh
  - irendermaterial
  - render
  - material
  - bump
  - rough
  - high
  - double
readonly: null
---

# IRenderMaterial.BumpRoughHigh

Gets or sets the high threshold of the surface finish for this appearance.

## Signature

```csharp
System.Double BumpRoughHigh {get; set;}
```
## Parameters

None.

## Return Value

High threshold

## Remarks

The high threshold is an absolute distance from the neutral surface (amplitude = 0). The high threshold extends further away from the neutral surface than the low threshold.
For positive
amplitude
, the high threshold flattens the peaks of the surface finish. For negative amplitude, the high threshold flattens the valleys of the surface finish.