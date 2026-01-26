---
type: method
interface: IMoveCopyBodyFeatureData
member: AddMate
returns: Mate2
parameters:
  -
    name: MateEntVar
    type: System.Object
    description: Array of the entities to use to create a mate (see Remarks )
  -
    name: MateTypeFromEnum
    type: System.Int32
    description: Type of mate as defined in swMateType_e
  -
    name: AlignFromEnum
    type: System.Int32
    description: Type of alignment as defined in swMateAlign_e
  -
    name: Distance
    type: System.Double
    description: Distance to use with distance or limit mates
  -
    name: Angle
    type: System.Double
    description: Angle to use with angle mates
  -
    name: ErrorStatus
    type: System.Int32
    description: Success or error as defined by swAddMateError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveCopyBodyFeatureData.IAddMate
keywords:
  - mates
  - see
  - also
  - imate2
  - multibody
  - parts
  - addmate
  - imovecopybodyfeaturedata
  - move
  - copy
  - body
  - feature
  - data
  - add
  - mate
  - ent
  - var
  - object
  - type
  - int32
  - align
  - distance
  - double
  - angle
  - error
  - status
  - mate2
---

# IMoveCopyBodyFeatureData.AddMate

Adds a mate to the feature.

## Signature

```csharp
Mate2 AddMate( 
   System.Object
MateEntVar
,
   System.Int32
MateTypeFromEnum
,
   System.Int32
AlignFromEnum
,
   System.Double
Distance
,
   System.Double
Angle
,
   out System.Int32
ErrorStatus
)
```
## Parameters

- `MateEntVar` (System.Object): Array of the entities to use to create a mate (see Remarks )
- `MateTypeFromEnum` (System.Int32): Type of mate as defined in swMateType_e
- `AlignFromEnum` (System.Int32): Type of alignment as defined in swMateAlign_e
- `Distance` (System.Double): Distance to use with distance or limit mates
- `Angle` (System.Double): Angle to use with angle mates
- `ErrorStatus` (System.Int32): Success or error as defined by swAddMateError_e

## Return Value

Mate

## Remarks

You can specify MateEntVar with either an array of mate entities or null. If you specify null, then before calling this method, you must call
IModelDocExtension::SelectByID2
with a selection mark of 1 to select each mate entity.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMoveCopyBodyFeatureData.IAddMate`