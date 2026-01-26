---
type: property
interface: ISheet
member: TableAnchor
returns: TableAnchor
parameters:
  -
    name: TableType
    type: System.Int32
    description: Table type as defined in swTableAnnotationType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.SetAsTableAnchor
keywords:
  - sheet
  - see
  - also
  - isheet
  - table
  - anchor
  - anchors
  - tableanchor
  - type
  - int32
  - hole
  - vb
  - net
  - vba
readonly: true
---

# ISheet.TableAnchor

Gets the specified table anchor.

## Signature

```csharp
TableAnchor TableAnchor( 
   System.Int32
TableType
) {get;}
```
## Parameters

- `TableType` (System.Int32): Table type as defined in swTableAnnotationType_e

## Return Value

Table anchor

## Examples

- Get and Set Table Anchor of Hole Table (C#) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_CSharp.htm)
- Get and Set Table Anchor of Hole Table (VB.NET) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_VBNET.htm)
- Get and Set Table Anchor of Hole Table (VBA) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_VB.htm)

## See Also

- `ISheet.SetAsTableAnchor`