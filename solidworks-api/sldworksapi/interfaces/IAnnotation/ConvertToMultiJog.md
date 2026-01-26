---
type: method
interface: IAnnotation
member: ConvertToMultiJog
returns: System.Boolean
parameters:
  -
    name: LeaderNumber
    type: System.Int32
    description: Number of the leader to convert in the 0-based list of leaders
  -
    name: NumberOfPoints
    type: System.Int32
    description: Number of the leader to convert in the 0-based list of leaders
  -
    name: PointsData
    type: System.Object
    description: Number of jog points
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - converttomultijog
  - iannotation
  - annotation
  - convert
  - multi
  - jog
  - leader
  - number
  - int32
  - points
  - data
  - object
  - boolean
---

# IAnnotation.ConvertToMultiJog

Converts a note with a leader to a note with a multi-jog leader.

## Signature

```csharp
System.Boolean ConvertToMultiJog( 
   System.Int32
LeaderNumber
,
   System.Int32
NumberOfPoints
,
   System.Object
PointsData
)
```
## Parameters

- `LeaderNumber` (System.Int32): Number of the leader to convert in the 0-based list of leaders
- `NumberOfPoints` (System.Int32): Number of the leader to convert in the 0-based list of leaders
- `PointsData` (System.Object): Number of jog points

## Return Value

True if the leader is converted to a multi-jog leader, false if not