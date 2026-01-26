---
type: method
interface: ICompositeCurveFeatureData
member: ISetEntitiesToJoin
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities
  -
    name: Ents
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of entities (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICompositeCurveFeatureData.SetEntitiesToJoin
keywords:
  - isetentitiestojoin
  - icompositecurvefeaturedata
  - composite
  - curve
  - feature
  - data
  - entities
  - join
  - count
  - int32
  - ents
  - object
  - void
---

# ICompositeCurveFeatureData.ISetEntitiesToJoin

Sets the entities to join to create this composite curve.

## Signature

```csharp
void ISetEntitiesToJoin( 
   System.Int32
Count
,
   ref System.Object
Ents
)
```
## Parameters

- `Count` (System.Int32): Number of entities
- `Ents` (System.Object): in-process, unmanaged C++: Pointer to an array of entities (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

The entities can be edges, reference curves other than composite curves, projection curves, and sketch entities.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICompositeCurveFeatureData.SetEntitiesToJoin`