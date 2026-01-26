---
type: method
interface: ILinearPatternFeatureData
member: ISetPatternFaceArray
returns: void
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces
  -
    name: ArrayDataIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of faces of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ILinearPatternFeatureData.BodyPattern
  - ILinearPatternFeatureData.GetPatternFaceCount
  - ILinearPatternFeatureData.IGetPatternFaceArray
  - ILinearPatternFeatureData.PatternFaceArray
keywords:
  - isetpatternfacearray
  - ilinearpatternfeaturedata
  - linear
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

# ILinearPatternFeatureData.ISetPatternFaceArray

Sets the list of patterned faces for this linear pattern feature.

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

- `FaceCount` (System.Int32): Number of faces
- `ArrayDataIn` (System.Object): in-process, unmanaged C++: Pointer to an array of faces of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILinearPatternFeatureData.BodyPattern`
- `ILinearPatternFeatureData.GetPatternFaceCount`
- `ILinearPatternFeatureData.IGetPatternFaceArray`
- `ILinearPatternFeatureData.PatternFaceArray`