---
type: method
interface: ICircularPatternFeatureData
member: ISetPatternFaceArray
returns: void
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of patterned faces
  -
    name: ArrayDataIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of patterned faces of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ICircularPatternFeatureData.BodyPattern
  - ICircularPatternFeatureData.GetPatternFaceCount
  - ICircularPatternFeatureData.IGetPatternFaceArray
  - ICircularPatternFeatureData.PatternFaceArray
keywords:
  - isetpatternfacearray
  - icircularpatternfeaturedata
  - circular
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

# ICircularPatternFeatureData.ISetPatternFaceArray

Sets a list of patterned faces for this circular pattern.

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

- `FaceCount` (System.Int32): Number of patterned faces
- `ArrayDataIn` (System.Object): in-process, unmanaged C++: Pointer to an array of patterned faces of size FaceCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICircularPatternFeatureData.BodyPattern`
- `ICircularPatternFeatureData.GetPatternFaceCount`
- `ICircularPatternFeatureData.IGetPatternFaceArray`
- `ICircularPatternFeatureData.PatternFaceArray`