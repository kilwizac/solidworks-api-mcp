---
type: method
interface: IFoldsFeatureData
member: ISetBends
returns: void
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces describing the bends
  -
    name: FaceArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of bend features that describe the bends that belong to this folds feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFoldsFeatureData.Bends
  - IFoldsFeatureData.IGetBends
  - IFoldsFeatureData.IGetBendsCount
keywords:
  - bends
  - folds
  - feature
  - isetbends
  - ifoldsfeaturedata
  - data
  - face
  - count
  - int32
  - array
  - object
  - void
---

# IFoldsFeatureData.ISetBends

Sets the bend features for this fold feature.

## Signature

```csharp
void ISetBends( 
   System.Int32
FaceCount
,
   ref System.Object
FaceArray
)
```
## Parameters

- `FaceCount` (System.Int32): Number of faces describing the bends
- `FaceArray` (System.Object): in-process, unmanaged C++: Pointer to an array of bend features that describe the bends that belong to this folds feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFoldsFeatureData.Bends`
- `IFoldsFeatureData.IGetBends`
- `IFoldsFeatureData.IGetBendsCount`