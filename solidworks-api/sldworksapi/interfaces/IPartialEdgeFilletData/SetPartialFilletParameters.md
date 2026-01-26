---
type: method
interface: IPartialEdgeFilletData
member: SetPartialFilletParameters
returns: System.Int32
parameters:
  -
    name: AlongEdgeDirection
    type: System.Boolean
    description: True to start the fillet at the start point of the edge, false to start the fillet at the end point of the edge
  -
    name: StartCondition
    type: System.Int32
    description: Start condition as defined in swSimpleFilletPartialEdgeCondition_e (see Remarks )
  -
    name: StartValue
    type: System.Double
    description: Distance or percent offset from the start point (see Remarks )
  -
    name: StartReference
    type: System.Object
    description: Offset reference (2D/3D sketch point , reference point , planar face ); valid only if StartCondition is swPartialEdgeReferenceOffset
  -
    name: EndCondition
    type: System.Int32
    description: End condition as defined in swSimpleFilletPartialEdgeCondition_e (see Remarks )
  -
    name: EndValue
    type: System.Double
    description: Distance or percent offset from the end point (see Remarks )
  -
    name: EndReference
    type: System.Object
    description: Offset reference (2D/3D sketch point , reference point , planar face ); valid only if EndCondition is swPartialEdgeReferenceOffset
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - parts
related:
  - IPartialEdgeFilletData.AlongEdgeDirection
  - IPartialEdgeFilletData.DistanceOffsetEnd
  - IPartialEdgeFilletData.DistanceOffsetStart
  - IPartialEdgeFilletData.PercentOffsetEnd
  - IPartialEdgeFilletData.PercentOffsetStart
  - IPartialEdgeFilletData.ReferenceOffsetEnd
  - IPartialEdgeFilletData.ReferenceOffsetStart
keywords:
  - setpartialfilletparameters
  - ipartialedgefilletdata
  - partial
  - edge
  - fillet
  - data
  - parameters
  - along
  - direction
  - boolean
  - start
  - condition
  - int32
  - value
  - double
  - reference
  - object
  - end
---

# IPartialEdgeFilletData.SetPartialFilletParameters

Sets the properties of this partial edge fillet.

## Signature

```csharp
System.Int32 SetPartialFilletParameters( 
   System.Boolean
AlongEdgeDirection
,
   System.Int32
StartCondition
,
   System.Double
StartValue
,
   System.Object
StartReference
,
   System.Int32
EndCondition
,
   System.Double
EndValue
,
   System.Object
EndReference
)
```
## Parameters

- `AlongEdgeDirection` (System.Boolean): True to start the fillet at the start point of the edge, false to start the fillet at the end point of the edge
- `StartCondition` (System.Int32): Start condition as defined in swSimpleFilletPartialEdgeCondition_e (see Remarks )
- `StartValue` (System.Double): Distance or percent offset from the start point (see Remarks )
- `StartReference` (System.Object): Offset reference (2D/3D sketch point , reference point , planar face ); valid only if StartCondition is swPartialEdgeReferenceOffset
- `EndCondition` (System.Int32): End condition as defined in swSimpleFilletPartialEdgeCondition_e (see Remarks )
- `EndValue` (System.Double): Distance or percent offset from the end point (see Remarks )
- `EndReference` (System.Object): Offset reference (2D/3D sketch point , reference point , planar face ); valid only if EndCondition is swPartialEdgeReferenceOffset

## Return Value

Result code as defined in swFeatureError_e

## Remarks

StartValue (or EndValue) is a:
Distance if StartCondition (or EndCondition) is swSimpleFilletPartialEdgeCondition_e.swPartialEdgeDistanceOffset.
Percent value if StartCondition (or EndCondition) is swSimpleFilletPartialEdgeCondition_e.swPartialEdgePercentOffset.

## Examples

- IPartialEdgeFilletData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartialEdgeFilletData)

## See Also

- `IPartialEdgeFilletData.AlongEdgeDirection`
- `IPartialEdgeFilletData.DistanceOffsetEnd`
- `IPartialEdgeFilletData.DistanceOffsetStart`
- `IPartialEdgeFilletData.PercentOffsetEnd`
- `IPartialEdgeFilletData.PercentOffsetStart`
- `IPartialEdgeFilletData.ReferenceOffsetEnd`
- `IPartialEdgeFilletData.ReferenceOffsetStart`