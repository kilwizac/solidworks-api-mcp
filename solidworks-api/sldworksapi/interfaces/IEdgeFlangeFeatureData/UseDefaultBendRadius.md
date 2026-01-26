---
type: property
interface: IEdgeFlangeFeatureData
member: UseDefaultBendRadius
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.BendRadius
keywords:
  - bends
  - radius
  - usedefaultbendradius
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - use
  - default
  - bend
  - boolean
readonly: null
---

# IEdgeFlangeFeatureData.UseDefaultBendRadius

Gets or sets whether to use the default sheet metal bend radius for this edge flange.

## Signature

```csharp
System.Boolean UseDefaultBendRadius {get; set;}
```
## Parameters

None.

## Return Value

True uses the default sheet metal bend radius of the edge flange (default), false uses a custom bend radius

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.BendRadius`