---
type: property
interface: IProjectionCurveFeatureData
member: Reverse
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - reverse
  - iprojectioncurvefeaturedata
  - projection
  - curve
  - feature
  - data
  - boolean
readonly: null
---

# IProjectionCurveFeatureData.Reverse

Reverses the direction that the curve is projected.

## Signature

```csharp
System.Boolean Reverse {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the direction of this projected curve, false to not

## Remarks

If all faces in
IProjectionCurveFeatureData::FaceArray
are on the same side with respect to
IProjectionCurveFeatureData::Sketch
, then this property is ignored. The projection direction is calculated from the selected sketches and faces.
You can reverse the direction in which the curve is projected when the selected face wraps around the plane of the curve. For example, if the sketch being projected is surrounded by a cylindrical face, then two possible projections exist. If this property is set to true, the direction based on the normal vector of the sketch is reversed. The default direction is along the sketch normal.

## Examples

- IProjectionCurveFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IProjectionCurveFeatureData)