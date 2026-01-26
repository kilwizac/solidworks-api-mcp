---
type: method
interface: IExtrudeFeatureData2
member: SetFromEntity
returns: void
parameters:
  -
    name: FromEntity
    type: System.Object
    description: Entity from which to create the extrusion: Surface Face Plane Vertex Sketch point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetFromEntity
keywords:
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - starting
  - plane
  - setfromentity
  - feature
  - data2
  - entity
  - object
  - void
---

# IExtrudeFeatureData2.SetFromEntity

Sets the entity from which to create an extrusion.

## Signature

```csharp
void SetFromEntity( 
   System.Object
FromEntity
)
```
## Parameters

- `FromEntity` (System.Object): Entity from which to create the extrusion: Surface Face Plane Vertex Sketch point

## Return Value

Unknown.

## Remarks

You must also set the type of entity using
IExtrudeFeatureData2::FromType
.

## See Also

- `IExtrudeFeatureData2.GetFromEntity`