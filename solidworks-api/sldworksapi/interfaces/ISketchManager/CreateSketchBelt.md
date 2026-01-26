---
type: method
interface: ISketchManager
member: CreateSketchBelt
returns: System.Boolean
parameters:
  -
    name: Length
    type: System.Double
    description: Length of the belt
  -
    name: Thickness
    type: System.Double
    description: Thickness of the belt
  -
    name: Engage
    type: System.Int32
    description: 1 to engage the belt, 0 to not
  -
    name: PulleyCount
    type: System.Int32
    description: Number of pulley components
  -
    name: Side1
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side2
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side3
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side4
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side5
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side6
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side7
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side8
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side9
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side10
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side11
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
  -
    name: Side12
    type: System.Int32
    description: Place the belt for the corresponding pulley component : 0 = inside 1 = outside
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - sketch
  - see
  - also
  - isketch
  - belt
  - feature
  - ifeature
  - createsketchbelt
  - isketchmanager
  - manager
  - create
  - length
  - double
  - thickness
  - engage
  - int32
  - pulley
  - count
  - side1
  - side2
  - side3
  - side4
  - side5
  - side6
  - side7
  - side8
  - side9
  - side10
  - side11
  - side12
  - boolean
---

# ISketchManager.CreateSketchBelt

Creates a sketch belt feature.

## Signature

```csharp
System.Boolean CreateSketchBelt( 
   System.Double
Length
,
   System.Double
Thickness
,
   System.Int32
Engage
,
   System.Int32
PulleyCount
,
   System.Int32
Side1
,
   System.Int32
Side2
,
   System.Int32
Side3
,
   System.Int32
Side4
,
   System.Int32
Side5
,
   System.Int32
Side6
,
   System.Int32
Side7
,
   System.Int32
Side8
,
   System.Int32
Side9
,
   System.Int32
Side10
,
   System.Int32
Side11
,
   System.Int32
Side12
)
```
## Parameters

- `Length` (System.Double): Length of the belt
- `Thickness` (System.Double): Thickness of the belt
- `Engage` (System.Int32): 1 to engage the belt, 0 to not
- `PulleyCount` (System.Int32): Number of pulley components
- `Side1` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side2` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side3` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side4` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side5` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side6` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side7` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side8` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side9` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side10` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side11` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside
- `Side12` (System.Int32): Place the belt for the corresponding pulley component : 0 = inside 1 = outside

## Return Value

True the belt is created, false if not

## Remarks

The order of the sides corresponds to the order of the pulleys in the selection list. For example Side1 indicates on which side of the first pulley component in the selection list you want the belt placed.
If only four pulley components exist in the sketch, then Side5 - Side12 are ignored. This method limits you to 12 pulleys.