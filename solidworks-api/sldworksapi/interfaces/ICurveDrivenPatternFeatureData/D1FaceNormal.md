---
type: property
interface: ICurveDrivenPatternFeatureData
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
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - d1
  - face
  - normal
  - object
readonly: null
---

# ICurveDrivenPatternFeatureData.D1FaceNormal

Gets or sets the face on which the 3D curve lies in Direction 1 of this curve driven pattern.

## Signature

```csharp
System.Object D1FaceNormal {get; set;}
```
## Parameters

None.

## Return Value

IFace2

## Remarks

This property is valid only when:
editing the curve-driven pattern feature
ICurveDrivePatternFeatureData::D1AlignmentMethod is set to swCurveDrivenPatternAlignment_e.swCurvePatternTangentToCurve
specifying Direction 1 using a 3D curve
To create a curve-driven pattern feature that uses a 3D curve for Direction 1, you must pre-select the face normal with selection Mark = 1024 before creating the curve-driven pattern feature data object.
If you try to edit this property to null or Nothing,
IFeature::ModifyDefinition
returns true but the property does not change.
For more information, see the
Curve Driven Patterns and the
Curve Driven Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.