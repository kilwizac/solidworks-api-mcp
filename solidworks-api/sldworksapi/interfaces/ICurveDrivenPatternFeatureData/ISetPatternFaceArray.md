---
type: method
interface: ICurveDrivenPatternFeatureData
member: ISetPatternFaceArray
returns: void
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of pattern faces
  -
    name: ArrayDataIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of pattern faces of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ICurveDrivenPatternFeatureData.BodyPattern
  - ICurveDrivenPatternFeatureData.GetPatternFaceCount
  - ICurveDrivenPatternFeatureData.IGetPatternFaceArray
  - ICurveDrivenPatternFeatureData.PatternFaceArray
keywords:
  - isetpatternfacearray
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - face
  - array
  - count
  - int32
  - object
  - void
---

# ICurveDrivenPatternFeatureData.ISetPatternFaceArray

Sets a list of pattern faces for this curve-driven pattern feature.

## Signature

```csharp
void ISetPatternFaceArray( 
   System.Int32
FaceCount
,
   ref System.Object
ArrayDataIn
)
```
## Parameters

- `FaceCount` (System.Int32): Number of pattern faces
- `ArrayDataIn` (System.Object): in-process, unmanaged C++: Pointer to an array of pattern faces of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICurveDrivenPatternFeatureData.BodyPattern`
- `ICurveDrivenPatternFeatureData.GetPatternFaceCount`
- `ICurveDrivenPatternFeatureData.IGetPatternFaceArray`
- `ICurveDrivenPatternFeatureData.PatternFaceArray`