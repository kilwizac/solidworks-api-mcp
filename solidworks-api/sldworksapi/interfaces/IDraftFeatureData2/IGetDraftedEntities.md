---
type: method
interface: IDraftFeatureData2
member: IGetDraftedEntities
returns: Entity
parameters:
  -
    name: Count
    type: System.Int16
    description: Number of entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDraftFeatureData2.GetDraftedEntities
keywords:
  - igetdraftedentities
  - idraftfeaturedata2
  - draft
  - feature
  - data2
  - drafted
  - entities
  - count
  - int16
  - entity
---

# IDraftFeatureData2.IGetDraftedEntities

Gets the drafted entities (faces or edges) for this draft feature.

## Signature

```csharp
Entity IGetDraftedEntities( 
   System.Int16
Count
)
```
## Parameters

- `Count` (System.Int16): Number of entities

## Return Value

in-process, unmanaged C++: Pointer to an array of entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IDraftFeatureData2::GetDraftedEntityCount
to determine the size of the array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDraftFeatureData2.GetDraftedEntities`