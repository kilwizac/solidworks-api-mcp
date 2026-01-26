---
type: property
interface: ICurveDrivenPatternFeatureData
member: D1Direction
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICurveDrivenPatternFeatureData.D2Direction
keywords:
  - d1direction
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - d1
  - direction
  - object
  - create
  - access
  - vb
  - net
  - vba
readonly: null
---

# ICurveDrivenPatternFeatureData.D1Direction

Gets or sets Direction 1 of this curve-driven pattern feature.

## Signature

```csharp
System.Object D1Direction {get; set;}
```
## Parameters

None.

## Return Value

Pattern direction entity (see Remarks )

## Remarks

The pattern direction can be a curve, edge, sketch entity, or a sketch. You must pre-select the direction entity using selection Mark = 1 before creating the feature definition. If you are using a 3D curve for Direction 1, then you must also pre-select the face normal entity using selection Mark = 1024.
Use this property only when editing the pattern feature.
If you specify this property using a 3D curve, you should also specify
ICurveDrivenPatternFeatureData::D1FaceNormal
.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Create and Access Curve-driven Pattern Feature (C#) (Create_and_Access_Curve-driven_Pattern_Feature_Example_CSharp.htm)
- Create and Access Curve-driven Pattern Feature (VB.NET) (Create_and_Access_Curve-driven_Pattern_Feature_Example_VBNET.htm)
- Create and Access Curve-driven Pattern Feature (VBA) (Create_and_Access_Curve-driven_Pattern_Feature_Example_VB.htm)

## See Also

- `ICurveDrivenPatternFeatureData.D2Direction`