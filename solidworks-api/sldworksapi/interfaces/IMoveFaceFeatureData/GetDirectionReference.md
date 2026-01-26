---
type: method
interface: IMoveFaceFeatureData
member: GetDirectionReference
returns: System.Object
parameters:
  -
    name: DirRefType
    type: System.Int32
    description: Direction reference type as defined in swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.ReverseDirection
  - IMoveFaceFeatureData.SetDirectionReference
keywords:
  - getdirectionreference
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - direction
  - reference
  - dir
  - ref
  - type
  - int32
  - object
  - change
  - vba
---

# IMoveFaceFeatureData.GetDirectionReference

Gets the direction reference for this Move Face feature.

## Signature

```csharp
System.Object GetDirectionReference( 
   out System.Int32
DirRefType
)
```
## Parameters

- `DirRefType` (System.Int32): Direction reference type as defined in swSelectType_e

## Return Value

Direction reference: If a translated, then a plane , planar face , linear edge , or reference axis If rotated, then a linear edge or reference axis

## Examples

- Change Direction Reference of Move Face Feature (VBA) (Change_Direction_Reference_of_Move_Face_Feature_Example_VB.htm)

## See Also

- `IMoveFaceFeatureData.ReverseDirection`
- `IMoveFaceFeatureData.SetDirectionReference`