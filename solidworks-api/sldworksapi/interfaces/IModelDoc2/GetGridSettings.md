---
type: method
interface: IModelDoc2
member: GetGridSettings
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GridOptions
  - IModelDoc2.ToolsGrid
keywords:
  - grid
  - options
  - getgridsettings
  - imodeldoc2
  - model
  - doc2
  - settings
  - object
---

# IModelDoc2.GetGridSettings

Gets the current grid settings.

## Signature

```csharp
System.Object GetGridSettings()
```
## Parameters

None.

## Return Value

Current grid settings (see Remarks )

## Remarks

The return format is the following array of doubles:
[
dispGrid
,
gridSpacing
,
snap, dotStyle, nMajor, nMinor, angleSnap, angleUnit, minorAuto
]
where:
dispGrid
- can be interpreted as a BOOLEAN: True if grid displayed, false otherwise
gridSpacing
- snap distance
snap
- can be interpreted as a BOOLEAN: True if snap to grid is on, false otherwise
dotStyle
- can be interpreted as a BOOLEAN: True if dotted grids, false otherwise
nMajor
- number of minors in major
nMinor
- number of snaps in minor
angleSnap
- can be interpreted as a BOOLEAN: True if snap to angle is on, false otherwise
angleUnit
- value of angle to which to snap
minorAuto
- an be interpreted as a BOOLEAN: True if the minor grids are set automatically, false otherwise

## See Also

- `IModelDoc2.GridOptions`
- `IModelDoc2.ToolsGrid`