---
type: property
interface: IModelDoc2
member: ISelectionManager
returns: SelectionMgr
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
  - IModelDoc2.SelectionManager
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - iselectionmanager
  - imodeldoc2
  - model
  - doc2
  - manager
  - mgr
  - access
  - assembly
  - deselect
  - every
  - other
  - selected
  - object
  - display
  - item
  - featuremanager
  - design
  - tree
  - curve
  - spline
  - points
  - parent
  - features
  - feature
  - sketch
  - segment
  - constraints
readonly: true
---

# IModelDoc2.ISelectionManager

Gets the ISelectionMgr object for this document, which makes the currently selected object available.

## Signature

```csharp
SelectionMgr ISelectionManager {get;}
```
## Parameters

None.

## Return Value

ISelectionMgr object

## Remarks

ISelectionMgr
objects are transient because they are invalid as soon as another selection is made. So, do not hold on to these pointers for any length of time.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Deselect Every Other Selected Object (C++) (Deselect_Every_Other_Selected_Object_Example_CPlusPlus_COM.htm)
- Display of Item in FeatureManager Design Tree (C++) (Display_of_Item_in_Feature_Manager_Example_CPlusPlus_COM.htm)
- Get Curve Spline Points (C++) (Get_Curve_Spline_Points_Example_CPlusPlus_COM.htm)
- Get Parent Features (C++) (Get_Parent_Features_Example_CPlusPlus_COM.htm)
- Get Selected Feature (C++) (Get_Selected_Feature_Example_CPlusPlus_COM.htm)
- Get Sketch Segment Constraints (C++) (Get_Sketch_Segment_Constraints_Example_CPlusPlus_COM.htm)
- Get Spline Points (C++) (Get_Spline_Points_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDoc2.SelectionManager`