---
type: method
interface: IMoveFaceFeatureData
member: SetDirectionReference
returns: System.Boolean
parameters:
  -
    name: LpDispatch
    type: System.Object
    description: Direction reference: If a translated, then a plane , planar face , linear edge , or reference axis If rotated, then a linear edge or reference axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.GetDirectionReference
  - IMoveFaceFeatureData.ReverseDirection
keywords:
  - setdirectionreference
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - direction
  - reference
  - lp
  - dispatch
  - object
  - boolean
  - change
  - vba
---

# IMoveFaceFeatureData.SetDirectionReference

Sets the direction reference for the Move Face feature.

## Signature

```csharp
System.Boolean SetDirectionReference( 
   System.Object
LpDispatch
)
```
## Parameters

- `LpDispatch` (System.Object): Direction reference: If a translated, then a plane , planar face , linear edge , or reference axis If rotated, then a linear edge or reference axis

## Return Value

True if the direction reference is set, false if not

## Examples

- Change Direction Reference of Move Face Feature (VBA) (Change_Direction_Reference_of_Move_Face_Feature_Example_VB.htm)

## See Also

- `IMoveFaceFeatureData.GetDirectionReference`
- `IMoveFaceFeatureData.ReverseDirection`