---
type: method
interface: IDeleteBodyFeatureData
member: IGetBodies
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDeleteBodyFeatureData.Bodies
  - IDeleteBodyFeatureData.ISetBodies
keywords:
  - delete
  - bodies
  - igetbodies
  - ideletebodyfeaturedata
  - body
  - feature
  - data
  - count
  - int32
  - body2
---

# IDeleteBodyFeatureData.IGetBodies

Gets the bodies to delete.

## Signature

```csharp
Body2 IGetBodies( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of bodies

## Return Value

in-process, unmanaged C++: Pointer to an array of IBody2 objects of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IDeleteBodiesFeatureData::GetBodiesCount
before calling this method to get the number of bodies to delete.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDeleteBodyFeatureData.Bodies`
- `IDeleteBodyFeatureData.ISetBodies`