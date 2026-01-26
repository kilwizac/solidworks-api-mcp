---
type: method
interface: ICompositeCurveFeatureData
member: GetEntitiesToJoin
returns: System.Object
parameters:
  -
    name: Type
    type: System.Object
    description: Type of entity as defined in swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICompositeCurveFeatureData.GetEntitiesToJoinCount
  - ICompositeCurveFeatureData.IGetEntitiesToJoin
keywords:
  - getentitiestojoin
  - icompositecurvefeaturedata
  - composite
  - curve
  - feature
  - data
  - entities
  - join
  - type
  - object
---

# ICompositeCurveFeatureData.GetEntitiesToJoin

Gets the entities to join to create this composite curve feature.

## Signature

```csharp
System.Object GetEntitiesToJoin( 
   out System.Object
Type
)
```
## Parameters

- `Type` (System.Object): Type of entity as defined in swSelectType_e

## Return Value

Array of entities (see Remarks )

## Remarks

The entities can be edges, reference curves other than composite curves, projection curves, and sketch entities.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICompositeCurveFeatureData.GetEntitiesToJoinCount`
- `ICompositeCurveFeatureData.IGetEntitiesToJoin`