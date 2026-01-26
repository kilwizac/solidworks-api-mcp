---
type: method
interface: IExtrudeFeatureData2
member: GetFromEntity
returns: void
parameters:
  -
    name: FromEntity
    type: System.Object
    description: Entity from which the extrusion was created: Surface Face Plane Vertex Sketch point
  -
    name: Type
    type: System.Int32
    description: Type of entity from which to create the extrusion as defined in swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.FromType
  - IExtrudeFeatureData2.SetFromEntity
keywords:
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - starting
  - plane
  - getfromentity
  - feature
  - data2
  - entity
  - object
  - type
  - int32
  - void
---

# IExtrudeFeatureData2.GetFromEntity

Gets the entity and its type from which the extrusion was created.

## Signature

```csharp
void GetFromEntity( 
   out System.Object
FromEntity
,
   out System.Int32
Type
)
```
## Parameters

- `FromEntity` (System.Object): Entity from which the extrusion was created: Surface Face Plane Vertex Sketch point
- `Type` (System.Int32): Type of entity from which to create the extrusion as defined in swSelectType_e

## Return Value

Unknown.

## See Also

- `IExtrudeFeatureData2.FromType`
- `IExtrudeFeatureData2.SetFromEntity`