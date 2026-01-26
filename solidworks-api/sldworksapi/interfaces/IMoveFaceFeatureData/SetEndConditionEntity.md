---
type: method
interface: IMoveFaceFeatureData
member: SetEndConditionEntity
returns: void
parameters:
  -
    name: EndEntity
    type: System.Object
    description: Body , face , plane , surface , or vertex to which the face of the Move Face feature is translated (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.GetEndConditionEntity
  - IMoveFaceFeatureData.GetFromEntity
  - IMoveFaceFeatureData.SetFromEntity
keywords:
  - setendconditionentity
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - end
  - condition
  - entity
  - object
  - void
---

# IMoveFaceFeatureData.SetEndConditionEntity

Sets the entity to which the face of the Move Face feature is translated.

## Signature

```csharp
void SetEndConditionEntity( 
   System.Object
EndEntity
)
```
## Parameters

- `EndEntity` (System.Object): Body , face , plane , surface , or vertex to which the face of the Move Face feature is translated (see Remarks )

## Return Value

Unknown.

## Remarks

The type of entity depends on the type of
end condition
.
End condition
Type of entity
Up To Vertex
Vertex
Up To Surface
or
Offset From Surface
Face, plane, or surface
Up To Body
Body or surface

## See Also

- `IMoveFaceFeatureData.GetEndConditionEntity`
- `IMoveFaceFeatureData.GetFromEntity`
- `IMoveFaceFeatureData.SetFromEntity`