---
type: method
interface: IMoveFaceFeatureData
member: GetFromEntity
returns: void
parameters:
  -
    name: FromEntity
    type: System.Object
    description: Face , plane , or surface from which the face of the Move Face feature is translated
  -
    name: Type
    type: System.Int32
    description: Type of end condition as defined in swEndConditions_e
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
  - IMoveFaceFeatureData.SetFromEntity
keywords:
  - getfromentity
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - entity
  - object
  - type
  - int32
  - void
---

# IMoveFaceFeatureData.GetFromEntity

Gets the entity from which the face of the Move Face feature is translated.

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

- `FromEntity` (System.Object): Face , plane , or surface from which the face of the Move Face feature is translated
- `Type` (System.Int32): Type of end condition as defined in swEndConditions_e

## Return Value

Unknown.

## See Also

- `IMoveFaceFeatureData.EndCondition`
- `IMoveFaceFeatureData.GetEndConditionEntity`
- `IMoveFaceFeatureData.SetEndConditionEntity`
- `IMoveFaceFeatureData.SetFromEntity`