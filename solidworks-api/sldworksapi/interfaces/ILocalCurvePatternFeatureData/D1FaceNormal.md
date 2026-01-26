---
type: property
interface: ILocalCurvePatternFeatureData
member: D1FaceNormal
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - d1facenormal
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d1
  - face
  - normal
  - object
readonly: null
---

# ILocalCurvePatternFeatureData.D1FaceNormal

Gets or sets the face on which the 3D curve lies for this curve-driven component pattern feature.

## Signature

```csharp
System.Object D1FaceNormal {get; set;}
```
## Parameters

None.

## Return Value

IFace2

## Remarks

If you pre-select a 3D curve for Direction 1, then before creating the feature definition, you must also pre-select the face normal entity using selection Mark = 64.
Use this property only when editing the pattern feature.
This property is valid only when specifying
ILocalCurvePatternFeatureData::D1Direction
using a 3D curve.
If you try to change this property to null or Nothing,
IFeature::ModifyDefinition
returns true but the property does not change.
For more information, see the
Curve Driven Component Pattern
topic in the SOLIDWORKS Design user-interface help.