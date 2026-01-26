---
type: property
interface: IEdgeFlangeFeatureData
member: BendAngle
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
  - angle
  - bendangle
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - bend
  - double
readonly: null
---

# IEdgeFlangeFeatureData.BendAngle

Gets or sets the bend angle of the edge flange.

## Signature

```csharp
System.Double BendAngle {get; set;}
```
## Parameters

None.

## Return Value

Flange angle; default value is 1.5707963267949 radians

## Remarks

If
IEdgeFlangeFeatureData::OffsetType
is set to
swFlangeOffsetTypes_e
.swFlangeOffsetUptoEdgeAndMerge to merge two bodies in a multibody part, then
IEdgeFlangeFeatureData::LockAngle
is automatically set to true. You must set IEdgeFlangeFeatureData::LockAngle to false before you can use this property to set a new bend angle.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)