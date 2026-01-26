---
type: method
interface: IRefPointFeatureData
member: ISetSelections
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of selected entities
  -
    name: Entities
    type: System.Object
    description: in-process, unmanaged C++: POinter to an array of entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRefPointFeatureData.GetSelectionsCount
  - IRefPointFeatureData.IGetSelections
  - IRefPointFeatureData.Selections
keywords:
  - isetselections
  - irefpointfeaturedata
  - ref
  - point
  - feature
  - data
  - selections
  - count
  - int32
  - entities
  - object
  - void
---

# IRefPointFeatureData.ISetSelections

Sets the number of entities to use to create the reference points.

## Signature

```csharp
void ISetSelections( 
   System.Int32
Count
,
   ref System.Object
Entities
)
```
## Parameters

- `Count` (System.Int32): Number of selected entities
- `Entities` (System.Object): in-process, unmanaged C++: POinter to an array of entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRefPointFeatureData.GetSelectionsCount`
- `IRefPointFeatureData.IGetSelections`
- `IRefPointFeatureData.Selections`