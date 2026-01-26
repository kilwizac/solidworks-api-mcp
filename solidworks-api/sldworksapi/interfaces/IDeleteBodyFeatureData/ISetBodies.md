---
type: method
interface: IDeleteBodyFeatureData
member: ISetBodies
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies
  -
    name: Bodies
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of IBody2 objects of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDeleteBodyFeatureData.Bodies
  - IDeleteBodyFeatureData.GetBodiesCount
  - IDeleteBodyFeatureData.IGetBodies
keywords:
  - delete
  - bodies
  - isetbodies
  - ideletebodyfeaturedata
  - body
  - feature
  - data
  - count
  - int32
  - body2
  - void
---

# IDeleteBodyFeatureData.ISetBodies

Sets the bodies to delete.

## Signature

```csharp
void ISetBodies( 
   System.Int32
Count
,
   ref Body2
Bodies
)
```
## Parameters

- `Count` (System.Int32): Number of bodies
- `Bodies` (Body2): in-process, unmanaged C++: Pointer to an array of IBody2 objects of size count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDeleteBodyFeatureData.Bodies`
- `IDeleteBodyFeatureData.GetBodiesCount`
- `IDeleteBodyFeatureData.IGetBodies`