---
type: method
interface: ISketchHatch
member: Select4
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the selection to the selection list, false replaces the selection list with this selection
  -
    name: Data
    type: SelectData
    description: ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - sketches
related:
  - ISketchHatch.DeSelect
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - area
  - hatch
  - select4
  - isketchhatch
  - sketch
  - append
  - boolean
  - data
  - select
---

# ISketchHatch.Select4

Selects the sketch hatch and marks it.

## Signature

```csharp
System.Boolean Select4( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True appends the selection to the selection list, false replaces the selection list with this selection
- `Data` (SelectData): ISelectData object

## Return Value

True if the sketch hatch is selected, false if not

## See Also

- `ISketchHatch.DeSelect`