---
type: property
interface: IEdgeFlangeFeatureData
member: BendRadius
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - bends
  - radius
  - bendradius
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - bend
  - double
readonly: null
---

# IEdgeFlangeFeatureData.BendRadius

Gets or sets the bend radius of the edge flange.

## Signature

```csharp
System.Double BendRadius {get; set;}
```
## Parameters

None.

## Return Value

Value of the bend radius; default value is 0.00073666 m

## Remarks

The setter of this property is valid only if
IEdgeFlangeFeatureData::UseDefaultBendRadius
is set to false.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)