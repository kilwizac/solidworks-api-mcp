---
type: method
interface: ICompositeCurveFeatureData
member: SetEntitiesToJoin
returns: void
parameters:
  -
    name: EntVar
    type: System.Object
    description: Array of entities (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICompositeCurveFeatureData.ISetEntitiesToJoin
keywords:
  - setentitiestojoin
  - icompositecurvefeaturedata
  - composite
  - curve
  - feature
  - data
  - entities
  - join
  - ent
  - var
  - object
  - void
---

# ICompositeCurveFeatureData.SetEntitiesToJoin

Sets the entities to join to create this composite curve.

## Signature

```csharp
void SetEntitiesToJoin( 
   System.Object
EntVar
)
```
## Parameters

- `EntVar` (System.Object): Array of entities (see Remarks )

## Return Value

Unknown.

## Remarks

The entities can be edges, reference curves other than composite curves, projection curves, and sketch entities.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICompositeCurveFeatureData.ISetEntitiesToJoin`