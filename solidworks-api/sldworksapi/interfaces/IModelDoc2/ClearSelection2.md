---
type: method
interface: IModelDoc2
member: ClearSelection2
returns: void
parameters:
  -
    name: All
    type: System.Boolean
    description: True clears the entire existing selection list, false clears only the items in the active selection list (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - selections
  - ui
related:
  - ISelectionMgr.SuspendSelectionList
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - clear
  - clearselection2
  - imodeldoc2
  - model
  - doc2
  - selection2
  - all
  - boolean
  - void
  - add
  - component
  - mate
  - bodies
  - traverse
  - distance
  - mates
  - vba
  - create
  - plane
  - thru
  - points
  - context
  - names
  - multibody
  - part
  - insert
  - note
  - equation
  - driven
  - curve
  - vb
  - net
---

# IModelDoc2.ClearSelection2

Clears the selection list.

## Signature

```csharp
void ClearSelection2( 
   System.Boolean
All
)
```
## Parameters

- `All` (System.Boolean): True clears the entire existing selection list, false clears only the items in the active selection list (see Remarks )

## Return Value

Unknown.

## Remarks

False only works if the current PropertyManager page contains a selection list; otherwise, this method clears all selections.

## Examples

- Add Component and Mate (C++) (Add_Component_and_Mate_Example_CPlusPlus_COM.htm)
- Get Bodies (C++) (Get_Bodies_Example_CPlusPlus_COM.htm)
- Traverse Bodies (C++) (Traverse_Bodies_Example_CPlusPlusCLI.htm)
- Add Distance Mates (VBA) (Add_Distance_Mates_Example_VB.htm)
- Create Plane Thru 3 Points In-context (VBA) (Create_Plane_Thru_3_Points_In-context_Example_VB.htm)
- Get Names of Bodies in Multibody Part (VBA) (Get_Names_of_Bodies_in_MultiBody_Part_Example_VB.htm)
- Insert a Note (VBA) (Insert_a_Note_Example_VB.htm)
- Create Equation-driven Curve (C#) (Create_Equation-driven_Curve_Example_CSharp.htm)
- Create Equation-driven Curve (VB.NET) (Create_Equation-driven_Curve_Example_VBNET.htm)
- Create Equation-driven Curve (VBA) (Create_Equation-driven_Curve_Example_VB.htm)

## See Also

- `ISelectionMgr.SuspendSelectionList`