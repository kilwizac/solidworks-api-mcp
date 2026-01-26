---
type: method
interface: IView
member: GetWitnessEntitiesCount
returns: System.Int32
parameters:
  -
    name: Size
    type: System.Int32
    description: Size of the virtual sharp witness line data array (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - virtual
  - sharps
  - view
  - see
  - also
  - iview
  - getwitnessentitiescount
  - witness
  - entities
  - count
  - size
  - int32
  - sharp
  - line
  - data
  - vba
  - vb
  - net
---

# IView.GetWitnessEntitiesCount

Gets the number of virtual sharp witness lines in this drawing view.

## Signature

```csharp
System.Int32 GetWitnessEntitiesCount( 
   out System.Int32
Size
)
```
## Parameters

- `Size` (System.Int32): Size of the virtual sharp witness line data array (see Remarks )

## Return Value

Number of virtual sharp witness lines in this drawing view

## Remarks

Call this method to get the sizes of the arrays returned by
IView::GetWitnessGeomInfo
and
IView::IGetWitnessGeomInfo
.

## Examples

- Get Virtual Sharp Witness Line Data (VBA) (Get_Virtual_Sharp_Witness_Line_Data_Example_VB.htm)
- Get Virtual Sharp Witness Line Data (VB.NET) (Get_Virtual_Sharp_Witness_Line_Data_Example_VBNET.htm)
- Get Virtual Sharp Witness Line Data (C#) (Get_Virtual_Sharp_Witness_Line_Data_Example_CSharp.htm)