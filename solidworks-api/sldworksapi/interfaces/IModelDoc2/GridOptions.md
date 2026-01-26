---
type: method
interface: IModelDoc2
member: GridOptions
returns: void
parameters:
  -
    name: DispGrid
    type: System.Boolean
    description: True to display the grid, false to not
  -
    name: GridSpacing
    type: System.Double
    description: Snap distance
  -
    name: Snap
    type: System.Boolean
    description: True to snap to grid, false to not
  -
    name: DotStyle
    type: System.Boolean
    description: True for dotted grids, false for not
  -
    name: NMajor
    type: System.Int16
    description: Number of minors in major
  -
    name: NMinor
    type: System.Int16
    description: Number of snaps in minor
  -
    name: Align2edge
    type: System.Boolean
    description: True if to align to an edge, false to not
  -
    name: AngleSnap
    type: System.Boolean
    description: True to snap to angle, false to not
  -
    name: AngleUnit
    type: System.Double
    description: Value of angle to which to snap
  -
    name: MinorAuto
    type: System.Boolean
    description: True if the minor grids are to be set automatically, false if not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetGridSettings
  - IModelDoc2.ToolsGrid
keywords:
  - gridoptions
  - imodeldoc2
  - model
  - doc2
  - grid
  - options
  - disp
  - boolean
  - spacing
  - double
  - snap
  - dot
  - style
  - major
  - int16
  - minor
  - align2edge
  - angle
  - unit
  - auto
  - void
---

# IModelDoc2.GridOptions

Obsolete. Superseded by ISketchManager::SetGridOptions.

## Signature

```csharp
void GridOptions( 
   System.Boolean
DispGrid
,
   System.Double
GridSpacing
,
   System.Boolean
Snap
,
   System.Boolean
DotStyle
,
   System.Int16
NMajor
,
   System.Int16
NMinor
,
   System.Boolean
Align2edge
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

- `DispGrid` (System.Boolean): True to display the grid, false to not
- `GridSpacing` (System.Double): Snap distance
- `Snap` (System.Boolean): True to snap to grid, false to not
- `DotStyle` (System.Boolean): True for dotted grids, false for not
- `NMajor` (System.Int16): Number of minors in major
- `NMinor` (System.Int16): Number of snaps in minor
- `Align2edge` (System.Boolean): True if to align to an edge, false to not
- `AngleSnap` (System.Boolean): True to snap to angle, false to not
- `AngleUnit` (System.Double): Value of angle to which to snap
- `MinorAuto` (System.Boolean): True if the minor grids are to be set automatically, false if not

## Return Value

Unknown.

## Remarks

The Align2edge argument aligns the grid with the currently selected edge. If Align2edge is set to True, then you must have selected an edge.

## See Also

- `IModelDoc2.GetGridSettings`
- `IModelDoc2.ToolsGrid`