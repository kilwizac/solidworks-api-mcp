---
type: method
interface: IMoveFaceFeatureData
member: SetFromEntity
returns: void
parameters:
  -
    name: FromEntity
    type: System.Object
    description: Face , plane , or surface from which the face of the Move Face feature is translated
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.EndCondition
  - IMoveFaceFeatureData.GetEndConditionEntity
  - IMoveFaceFeatureData.SetEndConditionEntity
keywords:
  - setfromentity
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - entity
  - object
  - void
---

# IMoveFaceFeatureData.SetFromEntity

Sets the entity from which the face of the Move Face feature is translated.

## Signature

```csharp
void SetFromEntity( 
   System.Object
FromEntity
)
```
## Parameters

- `FromEntity` (System.Object): Face , plane , or surface from which the face of the Move Face feature is translated

## Return Value

Unknown.

## See Also

- `IMoveFaceFeatureData.EndCondition`
- `IMoveFaceFeatureData.GetEndConditionEntity`
- `IMoveFaceFeatureData.SetEndConditionEntity`