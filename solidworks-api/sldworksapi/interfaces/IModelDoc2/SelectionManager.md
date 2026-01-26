---
type: property
interface: IModelDoc2
member: SelectionManager
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - selections
  - ui
related:
  - IModelDoc2.ISelectionManager
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - selectionmanager
  - imodeldoc2
  - model
  - doc2
  - manager
  - object
  - persistent
  - reference
  - id
  - create
  - plane
  - thru
  - points
  - context
  - vba
  - determine
  - sketch
  - suitable
  - feature
  - find
  - total
  - length
  - segments
  - equation
  - driven
  - curve
  - vb
  - net
readonly: null
---

# IModelDoc2.SelectionManager

Gets the ISelectionMgr object for this document, which makes the currently selected object available.

## Signature

```csharp
System.Object SelectionManager {get; set;}
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISelectionMgr
objects are transient because they are invalid as soon as another selection is made. So, do not hold on to these pointers for any length of time.

## Examples

- Get Object's Persistent Reference ID (C++) (Get_Object_s_Persistent_Reference_ID_Example_CPlusPlus_COM.htm)
- Create Plane Thru 3 Points In-context (VBA) (Create_Plane_Thru_3_Points_In-context_Example_VB.htm)
- Determine If Sketch Suitable for Feature (VBA) (Determine_If_Sketch_Suitable_for_Feature_Example_VB.htm)
- Find Total Length of Sketch Segments in Sketch (VBA) (Find_Total_Length_of_Sketch_Segments_in_Sketch_Example_VB.htm)
- Create Equation-driven Curve (C#) (Create_Equation-driven_Curve_Example_CSharp.htm)
- Create Equation-driven Curve (VB.NET) (Create_Equation-driven_Curve_Example_VBNET.htm)
- Create Equation-driven Curve (VBA) (Create_Equation-driven_Curve_Example_VB.htm)

## See Also

- `IModelDoc2.ISelectionManager`