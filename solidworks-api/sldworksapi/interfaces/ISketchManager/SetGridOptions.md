---
type: method
interface: ISketchManager
member: SetGridOptions
returns: void
parameters:
  -
    name: Display
    type: System.Boolean
    description: True to display the grid, false if not
  -
    name: Spacing
    type: System.Double
    description: Snap distance
  -
    name: Snap
    type: System.Boolean
    description: True to snap to grid, false to not
  -
    name: DotStyle
    type: System.Boolean
    description: True for dotted grids, false if not
  -
    name: NumMajor
    type: System.Int16
    description: Number of minors in major
  -
    name: NumMinor
    type: System.Int16
    description: Number of snaps in minor
  -
    name: AlignToEdge
    type: System.Boolean
    description: True if to align to an edge, false if not
  -
    name: AngleSnap
    type: System.Boolean
    description: True to snap to angle, false to not
  -
    name: AngleUnit
    type: System.Double
    description: Angle at which to snap
  -
    name: MinorAuto
    type: System.Boolean
    description: True if the minor grids are to be set automatically, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - grid
  - options
  - sketch
  - see
  - also
  - isketch
  - setgridoptions
  - isketchmanager
  - manager
  - display
  - boolean
  - spacing
  - double
  - snap
  - dot
  - style
  - num
  - major
  - int16
  - minor
  - align
  - edge
  - angle
  - unit
  - auto
  - void
---

# ISketchManager.SetGridOptions

Sets the options for the grid.

## Signature

```csharp
void SetGridOptions( 
   System.Boolean
Display
,
   System.Double
Spacing
,
   System.Boolean
Snap
,
   System.Boolean
DotStyle
,
   System.Int16
NumMajor
,
   System.Int16
NumMinor
,
   System.Boolean
AlignToEdge
,
   System.Boolean
AngleSnap
,
   System.Double
AngleUnit
,
   System.Boolean
MinorAuto
)
```
## Parameters

- `Display` (System.Boolean): True to display the grid, false if not
- `Spacing` (System.Double): Snap distance
- `Snap` (System.Boolean): True to snap to grid, false to not
- `DotStyle` (System.Boolean): True for dotted grids, false if not
- `NumMajor` (System.Int16): Number of minors in major
- `NumMinor` (System.Int16): Number of snaps in minor
- `AlignToEdge` (System.Boolean): True if to align to an edge, false if not
- `AngleSnap` (System.Boolean): True to snap to angle, false to not
- `AngleUnit` (System.Double): Angle at which to snap
- `MinorAuto` (System.Boolean): True if the minor grids are to be set automatically, false if not

## Return Value

Unknown.

## Remarks

The AlignToEdge argument aligns the grid with the currently selected edge. If AlignToEdge is set to TRUE, then you must have selected an edge.