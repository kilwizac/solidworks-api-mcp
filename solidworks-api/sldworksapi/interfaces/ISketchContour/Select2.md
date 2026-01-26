---
type: method
interface: ISketchContour
member: Select2
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
  - ISketchContour.DeSelect
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - contours
  - select2
  - isketchcontour
  - sketch
  - contour
  - append
  - boolean
  - data
  - select
  - vba
  - vb
  - net
  - corresponding
  - objects
  - assembly
  - component
---

# ISketchContour.Select2

Selects the sketch contour and marks it.

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

- `Append` (System.Boolean): True appends the selection to the selection list, false replaces the selection list with this selection
- `Data` (SelectData): ISelectData object

## Return Value

True if sketch contour selected, false if not

## Examples

- Get Sketch Contours (VBA) (Get_Sketch_Contours_Example_VB.htm)
- Get Sketch Contours (VB.NET) (Get_Sketch_Contours_Example_VBNET.htm)
- Get Sketch Contours (C#) (Get_Sketch_Contours_Example_CSharp.htm)
- Get Corresponding Objects in Assembly Component (C#) (Get_Corresponding_Objects_in_Assembly_Component_Example_CSharp.htm)
- Get Corresponding Objects in Assembly Component (VB.NET) (Get_Corresponding_Objects_in_Assembly_Component_Example_VBNET.htm)
- Get Corresponding Objects in Assembly Component (VBA) (Get_Corresponding_Objects_in_Assembly_Component_Example_VB.htm)

## See Also

- `ISketchContour.DeSelect`