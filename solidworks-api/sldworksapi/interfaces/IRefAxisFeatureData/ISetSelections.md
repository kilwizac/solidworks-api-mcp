---
type: method
interface: IRefAxisFeatureData
member: ISetSelections
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities
  -
    name: EntArr
    type: System.Object
    description: in-process,unmanaged C++: Pointer to an array of entities for this reference axis feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRefAxisFeatureData.GetSelections
  - IRefAxisFeatureData.GetSelectionsCount
  - IRefAxisFeatureData.IGetSelections
  - IRefAxisFeatureData.SetSelections
keywords:
  - isetselections
  - irefaxisfeaturedata
  - ref
  - axis
  - feature
  - data
  - selections
  - count
  - int32
  - ent
  - arr
  - object
  - boolean
---

# IRefAxisFeatureData.ISetSelections

Sets the entities for this reference axis feature.

## Signature

```csharp
System.Boolean ISetSelections( 
   System.Int32
Count
,
   ref System.Object
EntArr
)
```
## Parameters

- `Count` (System.Int32): Number of entities
- `EntArr` (System.Object): in-process,unmanaged C++: Pointer to an array of entities for this reference axis feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the method executed, false if not

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRefAxisFeatureData.GetSelections`
- `IRefAxisFeatureData.GetSelectionsCount`
- `IRefAxisFeatureData.IGetSelections`
- `IRefAxisFeatureData.SetSelections`