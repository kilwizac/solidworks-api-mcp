---
type: method
interface: IMoveFaceFeatureData
member: GetEndConditionEntity
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.GetFromEntity
  - IMoveFaceFeatureData.SetEndConditionEntity
  - IMoveFaceFeatureData.SetFromEntity
keywords:
  - getendconditionentity
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - end
  - condition
  - entity
  - object
---

# IMoveFaceFeatureData.GetEndConditionEntity

Gets the entity to which the Move Face feature is translated.

## Signature

```csharp
System.Object GetEndConditionEntity()
```
## Parameters

None.

## Return Value

Body , face , plane , surface , or vertex to which the face of the Move Face feature is translated (see Remarks )

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

- `IMoveFaceFeatureData.GetFromEntity`
- `IMoveFaceFeatureData.SetEndConditionEntity`
- `IMoveFaceFeatureData.SetFromEntity`