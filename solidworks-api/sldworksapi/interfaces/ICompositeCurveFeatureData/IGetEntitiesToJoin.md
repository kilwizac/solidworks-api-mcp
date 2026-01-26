---
type: method
interface: ICompositeCurveFeatureData
member: IGetEntitiesToJoin
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities
  -
    name: Type
    type: System.Int32
    description: Type of entity as defined in swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICompositeCurveFeatureData.GetEntitiesToJoin
keywords:
  - igetentitiestojoin
  - icompositecurvefeaturedata
  - composite
  - curve
  - feature
  - data
  - entities
  - join
  - count
  - int32
  - type
  - object
---

# ICompositeCurveFeatureData.IGetEntitiesToJoin

Gets the entities to join to create this composite curve.

## Signature

```csharp
System.Object IGetEntitiesToJoin( 
   System.Int32
Count
,
   out System.Int32
Type
)
```
## Parameters

- `Count` (System.Int32): Number of entities
- `Type` (System.Int32): Type of entity as defined in swSelectType_e

## Return Value

in-process, unmanaged C++: Pointer to an array of entities (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The entities can be edges, reference curves other than composite curves, projection curves, and sketch entities. Call
ICompositeCurveFeatureData::GetEntitiesToJoinCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ICompositeCurveFeatureData.GetEntitiesToJoin`