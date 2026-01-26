---
type: method
interface: ISketchRegion
member: Select2
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True to append this selection to the selection list, false to replace the selection list with this selection
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
  - ISketchRegion.DeSelect
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - sketch
  - region
  - select2
  - isketchregion
  - append
  - boolean
  - data
  - select
  - regions
  - vba
  - vb
  - net
---

# ISketchRegion.Select2

Selects the sketch region and marks it.

## Signature

```csharp
System.Boolean Select2( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True to append this selection to the selection list, false to replace the selection list with this selection
- `Data` (SelectData): ISelectData object

## Return Value

True if the sketch region is selected, false if not

## Examples

- Get Sketch Regions (VBA) (Get_Sketch_Regions_Example_VB.htm)
- Get Sketch Regions (VB.NET) (Get_Sketch_Regions_Example_VBNET.htm)
- Get Sketch Regions (C#) (Get_Sketch_Regions_Example_CSharp.htm)

## See Also

- `ISketchRegion.DeSelect`