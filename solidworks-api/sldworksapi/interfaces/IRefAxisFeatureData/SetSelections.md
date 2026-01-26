---
type: method
interface: IRefAxisFeatureData
member: SetSelections
returns: System.Boolean
parameters:
  -
    name: EntitiesVar
    type: System.Object
    description: Array of entities for this reference axis feature
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
  - IRefAxisFeatureData.ISetSelections
keywords:
  - setselections
  - irefaxisfeaturedata
  - ref
  - axis
  - feature
  - data
  - selections
  - entities
  - var
  - object
  - boolean
---

# IRefAxisFeatureData.SetSelections

Sets the entities for this reference axis feature.

## Signature

```csharp
System.Boolean SetSelections( 
   System.Object
EntitiesVar
)
```
## Parameters

- `EntitiesVar` (System.Object): Array of entities for this reference axis feature

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
- `IRefAxisFeatureData.ISetSelections`