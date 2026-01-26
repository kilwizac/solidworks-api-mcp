---
type: method
interface: IMoveCopyBodyFeatureData
member: IAddMate
returns: Mate2
parameters:
  -
    name: Nsize
    type: System.Int32
    description: Number of entities to use to create a mate
  -
    name: MateEntArr
    type: System.Object
    description: Array of entities to sue to create a mate (see Remarks )
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
  - IMoveCopyBodyFeatureData.AddMate
keywords:
  - mates
  - see
  - also
  - imate2
  - multibody
  - parts
  - iaddmate
  - imovecopybodyfeaturedata
  - move
  - copy
  - body
  - feature
  - data
  - add
  - mate
  - nsize
  - int32
  - ent
  - arr
  - object
  - type
  - align
  - distance
  - double
  - angle
  - error
  - status
  - mate2
---

# IMoveCopyBodyFeatureData.IAddMate

Adds a mate to the feature.

## Signature

```csharp
Mate2 IAddMate( 
   System.Int32
Nsize
,
   ref System.Object
MateEntArr
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

- `Nsize` (System.Int32): Number of entities to use to create a mate
- `MateEntArr` (System.Object): Array of entities to sue to create a mate (see Remarks )
- `MateTypeFromEnum` (System.Int32): Type of mate as defined in swMateType_e
- `AlignFromEnum` (System.Int32): Type of alignment as defined in swMateAlign_e
- `Distance` (System.Double): Distance to use with distance or limit mates
- `Angle` (System.Double): Angle to use with angle mates
- `ErrorStatus` (System.Int32): Success or error as defined by swAddMateError_e

## Return Value

Mate

## Remarks

You can specify MateEntArr with either an array of mate entities or null. If you specify null, then before calling this method, you must call
IModelDocExtension::SelectByID2
with a selection mark of 1 to select each mate entity.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMoveCopyBodyFeatureData.AddMate`