---
type: method
interface: ITablePatternFeatureData
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
    description: in-process, unmanaged C++: Pointer to an array of patterned faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ITablePatternFeatureData.GetPatternFaceCount
  - ITablePatternFeatureData.IGetPatternFaceArray
  - ITablePatternFeatureData.PatternFaceArray
keywords:
  - isetpatternfacearray
  - itablepatternfeaturedata
  - table
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

# ITablePatternFeatureData.ISetPatternFaceArray

Sets the patterned faces for this table-driven pattern feature.

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
- `ArrayDataIn` (System.Object): in-process, unmanaged C++: Pointer to an array of patterned faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ITablePatternFeatureData.GetPatternFaceCount`
- `ITablePatternFeatureData.IGetPatternFaceArray`
- `ITablePatternFeatureData.PatternFaceArray`